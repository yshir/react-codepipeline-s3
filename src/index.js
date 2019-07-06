import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <p>Hello, World. From react-codepipeline-s3.</p>
    <p>env REACT_APP_HOGE: "{process.env.REACT_APP_HOGE || 'nothing'}"</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
