import * as React from 'react'

interface IHelloPropType {
  name?: string;
}

const Hello: React.StatelessComponent<IHelloPropType> = (props: IHelloPropType) => {
  return <div>Hello {props.name}</div>;
}

Hello.defaultProps = {
  name: 'Stranger'
}

export default Hello;
