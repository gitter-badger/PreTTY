import * as React from 'react';

export class App extends React.Component {
  public render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}