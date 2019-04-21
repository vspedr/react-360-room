// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render to this location
  r360.renderToLocation(
    r360.createRoot('Room'),
    r360.getDefaultLocation(),
  );

  // Render to this surface
  r360.renderToSurface(
    r360.createRoot('Switch'),
    r360.getDefaultSurface(),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('background.png'));
}

window.React360 = { init };
