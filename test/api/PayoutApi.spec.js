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
    instance = new Treezor.PayoutApi();
  });

  describe('(package)', function() {
    describe('PayoutApi', function() {
      describe('deletePayout', function() {
        it('should call deletePayout successfully', function(done) {
          // TODO: uncomment, update parameter values for deletePayout call and complete the assertions
          /*

          instance.deletePayout(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20019);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPayout', function() {
        it('should call getPayout successfully', function(done) {
          // TODO: uncomment, update parameter values for getPayout call and complete the assertions
          /*

          instance.getPayout(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20019);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPayouts', function() {
        it('should call getPayouts successfully', function(done) {
          // TODO: uncomment, update parameter values for getPayouts call and complete the assertions
          /*
          var opts = {};

          instance.getPayouts(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20019);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postPayout', function() {
        it('should call postPayout successfully', function(done) {
          // TODO: uncomment, update parameter values for postPayout call and complete the assertions
          /*
          var opts = {};

          instance.postPayout(walletId, amount, currency, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20019);

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
