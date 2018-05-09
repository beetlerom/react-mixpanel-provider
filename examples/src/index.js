import React from 'react';
import ReactDOM from 'react-dom';
import { MixpanelProvider } from '../../src/index';
import mixpanel from 'mixpanel-browser';
import App from './app';

mixpanel.init('c1e2d6f3a7599132482ecd7f66670ae0');

ReactDOM.render(
    <MixpanelProvider mixpanel={mixpanel}>
        <App/>
    </MixpanelProvider>,
    document.getElementById('app')
);
