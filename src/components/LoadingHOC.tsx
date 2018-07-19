import * as React from 'react';

import Hello from './Hello';

interface IWithLoadingProps {
  loading: boolean;
}

export const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & IWithLoadingProps> {
    render() {
      const { loading, ...props } = this.props as IWithLoadingProps;
      return loading ? <Hello /> : <Component {...props} />;
    }
  };
