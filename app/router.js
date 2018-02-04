import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tools', function() {
    this.route('lotus-blossom', function() {});
    this.route('cherry-split');
  });
  this.route('veritone-redirect');
});

export default Router;
