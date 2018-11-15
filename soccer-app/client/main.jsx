import React from 'react';
import { Meteor } from 'meteor/meteor'; 
import { render } from 'react-dom'; 
import injectTalugin from 'react-tap-event-plugin'; 

import App from '../imports/ui/App'; 

injectTapEventPlugin(); 

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target')); 
});