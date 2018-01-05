import * as React from 'react';

const defaultProps = {
  fill: '#fff',
  width: '40px',
  height: '40px',
  padding: '5px',
  style: {},
};

type IProps = Partial<typeof defaultProps>;

export class AppIcon extends React.Component<IProps> {
  public render() {
    const props = { ...defaultProps, ...this.props };
    return (
      <svg
        style={{
          ...props.style,
          fill: props.fill,
          width: props.width,
          height: props.height,
          padding: props.padding,
        }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 998 999">
        <g id="white">
          <path id="lightning"
            d={[
              'M618.8,38.18,230.67,525.6a10,10,0,0,0,6.24,16.11l222,35.51a10,10,0,0,1,8,12.62',
              'l-103.14,361c-3,10.51,10.62,17.53,17.44,9L769.33,472.4a10,10,0,0,0-6.24-16.11',
              'l-222-35.51a10,10,0,0,1-8-12.62l103.14-361C639.25,36.64,625.62,29.62,618.8,38.18Z',
            ].join()} />
          <path id="left-border"
            d={[
              'M349.15,896.43l13.79-48.29q-3.07-1.21-6.14-2.47A150,150,0,0,0,153.33,642.2,373.77,373.77,0,0,1,125,499',
              'c0-207.11,167.89-375,375-375q6.63,0,13.21.23L550.81,77A430.45,430.45,0,0,0,500,74',
              'C265.28,74,75,264.28,75,499a423.39,423.39,0,0,0,37.81,175.45A150,150,0,0,0,324.55,886.19',
              'Q336.66,891.68,349.15,896.43Zm-38.87-70.19-.11.18c-.5.81-1,1.62-1.54,2.42l-.24.36',
              'c-1.15,1.73-2.35,3.43-3.6,5.08l-.15.19c-.58.77-1.18,1.53-1.79,2.29l-.2.24q-2,2.44-4.12,4.76',
              'l-.12.13c-.69.75-1.39,1.48-2.1,2.21l-.1.09c-1.49,1.52-3,3-4.63,4.41l-.08.07q-3.6,3.21-7.51,6.08',
              'l0,0q-3.93,2.87-8.13,5.36a100,100,0,0,1-137-137q2.49-4.21,5.37-8.15v0q2.87-3.9,6.08-7.52',
              'l.07-.07q2.13-2.38,4.41-4.64l.09-.09c.72-.71,1.46-1.41,2.21-2.1l.13-.12c1.54-1.43,3.13-2.8,4.75-4.12',
              'l.26-.2c.75-.61,1.51-1.21,2.28-1.79l.19-.15c1.65-1.25,3.35-2.45,5.08-3.6l.36-.24',
              'c.8-.52,1.61-1,2.42-1.54l.18-.11c.91-.56,1.83-1.1,2.76-1.63A100,100,0,0,1,311.91,823.48',
              'C311.38,824.41,310.84,825.33,310.28,826.24Z',
            ].join()} />
          <path id="right-border"
            d={[
              'M925,224A150,150,0,0,0,675.45,111.81q-12.11-5.49-24.6-10.24l-13.79,48.29q3.08,1.21,6.14,2.47',
              'A150,150,0,0,0,846.67,355.8,373.77,373.77,0,0,1,875,499c0,207.11-167.89,375-375,375',
              'q-6.63,0-13.21-.23L449.19,921A430.45,430.45,0,0,0,500,924c234.72,0,425-190.28,425-425',
              'a423.39,423.39,0,0,0-37.81-175.45A149.41,149.41,0,0,0,925,224Zm-63.87,50.82q-2.49,4.21-5.37,8.15',
              'h0q-2.87,3.91-6.08,7.53l-.07.07q-2.13,2.39-4.41,4.64l-.09.09c-.72.71-1.46,1.41-2.21,2.1',
              'l-.13.12q-2.31,2.14-4.76,4.12l-.24.2c-.76.61-1.52,1.21-2.29,1.79l-.18.15q-2.49,1.88-5.09,3.6',
              'l-.36.24c-.8.52-1.61,1-2.42,1.54l-.18.11c-.91.56-1.83,1.1-2.75,1.63a100,100,0,0,1-136.4-136.4',
              'c.53-.92,1.07-1.84,1.63-2.75l.11-.18c.5-.81,1-1.62,1.54-2.42l.24-.36c1.15-1.74,2.35-3.43,3.6-5.09',
              'l.15-.18c.58-.77,1.18-1.53,1.79-2.28.06-.09.13-.17.2-.26,1.32-1.62,2.69-3.21,4.12-4.75l.12-.13',
              'c.69-.75,1.39-1.49,2.1-2.21l.09-.09q2.25-2.28,4.64-4.42l.07-.06q3.62-3.21,7.53-6.08h0',
              'q3.93-2.88,8.15-5.37h0a100,100,0,0,1,137,137Z',
            ].join()} />
        </g>
      </svg>
    );
  }
}
