import * as React from 'react';
import { reduxForm,propTypes} from 'redux-form';


class Form extends React.PureComponent<any> {
  static propTypes = {
    ...propTypes
  };
  render() {
    const { children, handleSubmit,onKeyPress,className } = this.props;    
    return (
      <form onSubmit={handleSubmit}  onKeyPress={onKeyPress}   autoComplete="off" noValidate className={className}>
        {children}
      </form>
    );
  }
}

export default reduxForm({
  enableReinitialize: true
})(Form);
