import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <p>Hello, World. From react-codepipeline-s3.</p>
    <p style={{ color: 'red' }}>changed!!</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
