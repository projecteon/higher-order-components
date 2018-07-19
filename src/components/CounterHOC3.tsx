import * as React from "react";

type MakeCounterHocProps = Omit<MakeCounterProps, 'children'>;

export const makeCounter = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
): React.SFC<Subtract<P, InjectedCounterProps> & MakeCounterHocProps> => ({
  minValue,
  maxValue,
  ...props
}: MakeCounterHocProps) => (
  <MakeCounter minValue={minValue} maxValue={maxValue}>
    {injectedProps => <Component {...props} {...injectedProps} />}
  </MakeCounter>
);
