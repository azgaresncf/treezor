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
    instance = new Treezor.CardDigitalizationsApi();
  });

  describe('(package)', function() {
    describe('CardDigitalizationsApi', function() {
      describe('cardDigitalizationsId', function() {
        it('should call cardDigitalizationsId successfully', function(done) {
          // TODO: uncomment, update parameter values for cardDigitalizationsId call and complete the assertions
          /*
          var opts = {};

          instance.cardDigitalizationsId(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2008);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletecardDigitalizationsId', function() {
        it('should call deletecardDigitalizationsId successfully', function(done) {
          // TODO: uncomment, update parameter values for deletecardDigitalizationsId call and complete the assertions
          /*

          instance.deletecardDigitalizationsId(id, reasonCode, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2008);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putcardDigitalizationsId', function() {
        it('should call putcardDigitalizationsId successfully', function(done) {
          // TODO: uncomment, update parameter values for putcardDigitalizationsId call and complete the assertions
          /*

          instance.putcardDigitalizationsId(id, status, reasonCode, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2008);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('readcardDigitalizations', function() {
        it('should call readcardDigitalizations successfully', function(done) {
          // TODO: uncomment, update parameter values for readcardDigitalizations call and complete the assertions
          /*
          var opts = {};

          instance.readcardDigitalizations(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2008);

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
