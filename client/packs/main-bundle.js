import ReactOnRails from 'react-on-rails';
import rujs from '@rails/ujs';
import MainApp from '../bundles/Main/MainApp';

// Make sure rails-specific interactivity works
rujs.start();

// This is how react_on_rails can see the Main in the browser.
ReactOnRails.register({
  MainApp,
});

