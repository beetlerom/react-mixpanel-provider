import React from 'react';
import PropTypes from 'prop-types';

const withMixpanel = ChildComponent => class MixpanelComponent extends React.Component {
    static contextTypes = {
      mixpanel: PropTypes.object.isRequired,
    };

    render() {
      const { mixpanel } = this.context;
      return (
        <ChildComponent {...this.props} mixpanel={mixpanel} />
      );
    }
};

export default withMixpanel;
