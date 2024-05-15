import React from 'react';
import { render } from 'react-dom';

import { tabs } from './browser';
import { Popup } from './component';
import '../css/app.css';

async function main() {
  await tabs.query({ active: true, currentWindow: true });
  render(<Popup />, document.getElementById('popup'));
}

main();
