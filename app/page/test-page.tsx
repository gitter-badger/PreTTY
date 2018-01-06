import * as React from 'react';

import { transitionService, quickActionService, notificationService } from '../service';
import { Button } from '../component';
import { createNotification } from '../model/notification';
import { getUid } from '../util/uid';
import { IPageViewProps, PageViewType } from '../model/page';
import { pageService } from '../service/page-service';
import { MasterPasswordPage } from './master-password-page';
import { IdentityCreatePage } from './identity-create-page';
import { storageService } from '../service/storage-service';
import { dialogService } from '../service/dialog-service';
import { createDialog } from '../model/dialog';

export class TestPage extends React.Component<IPageViewProps> {
  public render() {
    return (
      <div style={{ width: '100%', height: '100%' }} onClick={(e) => this.clickTransition(e)}>
        Client Area in tab {this.props.tabId}
        <div>
          <Button onClick={() => quickActionService.openQuickAction()} label="Open Quick Action List" />
          <Button onClick={() => this.pushNotification()} label="Push notification" />
          <Button onClick={(e) => this.requestMasterPassword(e)} label="Request master password" />
          <Button onClick={(e) => this.createNewIdentity(e)} label="Create new identity" />
          <Button onClick={() => this.writeFile()} label="Write File" />
          <Button onClick={() => this.readFile()} label="Read File" />
        </div>
      </div>
    );
  }

  private pushNotification() {
    notificationService.pushNotification(createNotification('Hello PreTTY #' + getUid()));
  }

  private clickTransition(e: React.MouseEvent<Element>) {
    // ignore bubbled events
    if (e.currentTarget !== e.target) { return; }
    transitionService.transit({
      x: e.clientX,
      y: e.clientY,
      color: '#9acdad',
    });
  }

  private requestMasterPassword(e: React.MouseEvent<HTMLDivElement>) {
    this.replaceTabPage(e, MasterPasswordPage);
  }
  private createNewIdentity(e: React.MouseEvent<HTMLDivElement>) {
    this.replaceTabPage(e, IdentityCreatePage);
  }

  private replaceTabPage(e: React.MouseEvent<HTMLDivElement>, component: PageViewType) {
    transitionService.transit({
      x: e.clientX,
      y: e.clientY,
      color: '#09c',
    }).then(() => {
      pageService.replaceTabPage(this.props.tabId, component);
    });
  }

  private writeFile() {
    const list = [1, 2, 3, 4, 5, 6];
    const file = storageService.getFullFilePath('sampleData');
    storageService.saveModel(file, list, {
      compression: {
        format: 'zlib',
      },
      encryption: {
        algorithm: 'AES256',
        key: 'PreTTY',
      },
    }).then(() => {
      dialogService.showDialog(createDialog('Success', 'save file to ' + file));
    }).catch((e) => {
      console.log(e);
    });
  }

  private readFile() {
    // this can be verified using following command
    // cat sampleData | openssl aes-256-cbc -d -nosalt -pass "pass:PreTTY" | zlib-flate -uncompress
    const file = storageService.getFullFilePath('sampleData');
    storageService.loadModel<number>(file, {
      compression: {
        format: 'zlib',
      },
      encryption: {
        algorithm: 'AES256',
        key: 'PreTTY',
      },
    }).then((model) => {
      dialogService.showDialog(createDialog('Success', 'load from file: ' + file + ' data: ' + JSON.stringify(model)));
    }).catch((e) => {
      console.log(e);
    });
  }
}
