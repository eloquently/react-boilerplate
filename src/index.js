import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app';

// Add CSS files to bundle
require('../src/css/application.scss');


// Render application to DOM
ReactDOM.render(
    <App />,
    document.getElementById('app')
);