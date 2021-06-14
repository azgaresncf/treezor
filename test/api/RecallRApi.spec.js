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
    instance = new Treezor.RecallRApi();
  });

  describe('(package)', function() {
    describe('RecallRApi', function() {
      describe('getRecallR', function() {
        it('should call getRecallR successfully', function(done) {
          // TODO: uncomment, update parameter values for getRecallR call and complete the assertions
          /*
          var opts = {};

          instance.getRecallR(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20021);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRecallRId', function() {
        it('should call getRecallRId successfully', function(done) {
          // TODO: uncomment, update parameter values for getRecallRId call and complete the assertions
          /*
          var opts = {};

          instance.getRecallRId(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20021);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putRecallR', function() {
        it('should call putRecallR successfully', function(done) {
          // TODO: uncomment, update parameter values for putRecallR call and complete the assertions
          /*
          var opts = {};

          instance.putRecallR(id, responseType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20021);

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
