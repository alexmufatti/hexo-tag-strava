var assert = require('assert');
var strava = require('./index.js');
describe('Strava', function() {
  describe('Parsin Url', function() {
    it('should detect embedId correctly and return the right html', function() {
    	const expected = '<div class=\'strava-wrapper\'><iframe height=\'405\' width=\'590\' frameborder=\'0\' allowtransparency=\'true\' scrolling=\'no\' src=\'https://www.strava.com/activities/2520099046/embed/myTest123\'></iframe></div>'
      assert.equal(expected, strava.strava(['id:myTest123']));
    });
  });
});
