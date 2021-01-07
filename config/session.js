/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: '17aff78903fd3c64ee042c27f6d2f9d8',

  adapter: 'connect-mongo',
  url: 'mongodb://jobportalapiadmin:!De271287@cluster0-shard-00-00.sdykh.mongodb.net:27017,cluster0-shard-00-01.sdykh.mongodb.net:27017,cluster0-shard-00-02.sdykh.mongodb.net:27017/jobportal?ssl=true&replicaSet=atlas-hiakd4-shard-0&authSource=admin&retryWrites=true&w=majority', 
  collection: 'sessions'
  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
