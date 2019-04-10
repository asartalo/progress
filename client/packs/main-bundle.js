import ReactOnRails from 'react-on-rails';
import rujs from '@rails/ujs';
import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';

// Make sure rails-specific interactivity works
rujs.start();

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
});

