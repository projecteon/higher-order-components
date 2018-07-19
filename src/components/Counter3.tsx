import * as React from "react";

interface CounterProps {
  style: React.CSSProperties;
  minValue?: number;
  maxValue?: number;
}

export const Counter = (props: CounterProps) => (
  <MakeCounter minValue={props.minValue} maxValue={props.maxValue}>
    {injectedProps => (
      <div style={props.style}>
        <button onClick={injectedProps.onDecrement}> - </button>
        {injectedProps.value}
        <button onClick={injectedProps.onIncrement}> + </button>
      </div>
    )}
  </MakeCounter>
);
