import React from 'react';

const App = () => (
  <div>
    <h1>App</h1>
  </div>
);

export default App;


import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from '../app';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
