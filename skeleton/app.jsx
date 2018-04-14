import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './calculator';

$(document).ready(function () {
  ReactDOM.render(<Calculator />, document.getElementById('main'));
});
