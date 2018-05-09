import React from 'react';
import PropTypes from 'prop-types';

export const getContext = (props) => {
  const { mixpanel } = props;
  return { mixpanel };
};

class MixpanelProvider extends React.Component {
    getChildContext = () => getContext(this.props);

    render() {
      return React.Children.only(this.props.children);
    }
}

MixpanelProvider.propTypes = {
  mixpanel: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

MixpanelProvider.childContextTypes = {
  mixpanel: PropTypes.object.isRequired,
};

export default MixpanelProvider;
