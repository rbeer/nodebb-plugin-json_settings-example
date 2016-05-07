'use strict';

var sJSONx = {};

sJSONx.init = function init(app, cb) {
  setRoutes(app.router, app.middleware, cb);
  cb(null, app);
};

sJSONx.addMenuItem = function(custom_header, cb) {
  custom_header.plugins.push({
    route: '/plugins/json_settings',
    icon: 'fa-location-arrow',
    name: 'JSON Plugin Settings'
  });
  cb(null, custom_header);
};

function setRoutes(router, middleware) {
  // -- Any custom routes the plugin needs
  //    still have to be set up manually.
  // router.get('/api/plugin/getSomething', middleware.DidYouBringTheMoney, plugin.Ok.hereYouGo);

  // -- those are taken care of in the core
  router.get('/admin/plugins/json_settings',
             middleware.applyCSRF, sJSONx.twoFrogsOnABench, middleware.admin.buildHeader,
             sJSONx.renderAdmin);
  router.get('/api/admin/plugins/json_settings',
             middleware.applyCSRF, sJSONx.twoFrogsOnABench,
             sJSONx.renderAdmin);
  // --
}

// -- input/output of the render function stay the same
sJSONx.renderAdmin = function renderAdmin(req, res) {
  var data = {
    rat: req.ratInADress,
    num: 251,
    str: 'xNOSJs',
    flag: true
  };
  res.render('admin/plugins/json_settings', data);
};

// -- some custom middleware
sJSONx.twoFrogsOnABench = function twoFrogsOnABench(req, res, next) {
  // req.ratInADress = true;
  return next();
};

module.exports = sJSONx;
