/*eslint-env node, es6*/
/*eslint no-console:0*/
'use-strict';

const request = require('request'),
  auth = require('../../auth.json');

/********************************************
 * uses the canvas API to GET all migration
 * issues and save them to the course object
 ********************************************/
module.exports = function (course, stepCallback) {

  var url = "https://byui.instructure.com/api/v1/courses/" + course.info.canvasOU + "/content_migrations/" + course.info.migrationID + "/migration_issues";

  request.get(url, function (err, response, body) {
    if (err) {
      course.fatalError(err);
      stepCallback(err, course);
      return;
    }
    body = JSON.parse(body);
    course.newInfo('migrationIssues', body);
    course.message('Migration issues successfully retrieved');

    stepCallback(null, course);

  }).auth(null, null, true, auth.token);
}
