/*
 * Treezor
 * Treezor API.  more info [here](https://www.treezor.com). 
 *
 * OpenAPI spec version: 0.1.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Treezor);
  }
}(this, function(expect, Treezor) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Treezor.CountryRestrictionGroupsApi();
  });

  describe('(package)', function() {
    describe('CountryRestrictionGroupsApi', function() {
      describe('deleteCountryRestrictionGroups', function() {
        it('should call deleteCountryRestrictionGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCountryRestrictionGroups call and complete the assertions
          /*
          var opts = {};

          instance.deleteCountryRestrictionGroups(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCountryRestrictionGroups', function() {
        it('should call getCountryRestrictionGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for getCountryRestrictionGroups call and complete the assertions
          /*
          var opts = {};

          instance.getCountryRestrictionGroups(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCountryRestrictionGroupsId', function() {
        it('should call getCountryRestrictionGroupsId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCountryRestrictionGroupsId call and complete the assertions
          /*
          var opts = {};

          instance.getCountryRestrictionGroupsId(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCountryRestrictionGroup', function() {
        it('should call postCountryRestrictionGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for postCountryRestrictionGroup call and complete the assertions
          /*
          var opts = {};

          instance.postCountryRestrictionGroup(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putCountryRestrictionGroups', function() {
        it('should call putCountryRestrictionGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for putCountryRestrictionGroups call and complete the assertions
          /*
          var opts = {};

          instance.putCountryRestrictionGroups(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
