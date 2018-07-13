import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

// Imports
import Home from './Components/Home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
