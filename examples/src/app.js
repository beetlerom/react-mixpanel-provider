import React from 'react';
import PropTypes from 'prop-types';
import { withMixpanel } from 'react-mixpanel-provider';

class App extends React.Component {
  componentDidMount() {
    this.props.mixpanel.track('App, componentDidMount');
    console.log(this.props.mixpanel);
    console.info('"App, componentDidMount" sent!');
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

App.propTypes = {
  mixpanel: PropTypes.object.isRequired,
};

export default withMixpanel(App);
