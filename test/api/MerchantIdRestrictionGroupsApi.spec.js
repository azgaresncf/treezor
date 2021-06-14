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
    instance = new Treezor.MerchantIdRestrictionGroupsApi();
  });

  describe('(package)', function() {
    describe('MerchantIdRestrictionGroupsApi', function() {
      describe('deleteMerchantIdRestrictionGroups', function() {
        it('should call deleteMerchantIdRestrictionGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteMerchantIdRestrictionGroups call and complete the assertions
          /*
          var opts = {};

          instance.deleteMerchantIdRestrictionGroups(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMerchantIdRestrictionGroup', function() {
        it('should call getMerchantIdRestrictionGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for getMerchantIdRestrictionGroup call and complete the assertions
          /*
          var opts = {};

          instance.getMerchantIdRestrictionGroup(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMerchantIdRestrictionGroupsId', function() {
        it('should call getMerchantIdRestrictionGroupsId successfully', function(done) {
          // TODO: uncomment, update parameter values for getMerchantIdRestrictionGroupsId call and complete the assertions
          /*
          var opts = {};

          instance.getMerchantIdRestrictionGroupsId(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('merchantIdRestrictionGroupsIdDeltaUpdatePut', function() {
        it('should call merchantIdRestrictionGroupsIdDeltaUpdatePut successfully', function(done) {
          // TODO: uncomment, update parameter values for merchantIdRestrictionGroupsIdDeltaUpdatePut call and complete the assertions
          /*
          var opts = {};

          instance.merchantIdRestrictionGroupsIdDeltaUpdatePut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('merchantIdRestrictionGroupsIdPresenceCheckGet', function() {
        it('should call merchantIdRestrictionGroupsIdPresenceCheckGet successfully', function(done) {
          // TODO: uncomment, update parameter values for merchantIdRestrictionGroupsIdPresenceCheckGet call and complete the assertions
          /*
          var opts = {};

          instance.merchantIdRestrictionGroupsIdPresenceCheckGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postMerchantIdRestrictionGroup', function() {
        it('should call postMerchantIdRestrictionGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for postMerchantIdRestrictionGroup call and complete the assertions
          /*
          var opts = {};

          instance.postMerchantIdRestrictionGroup(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putMerchantIdRestrictionGroups', function() {
        it('should call putMerchantIdRestrictionGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for putMerchantIdRestrictionGroups call and complete the assertions
          /*
          var opts = {};

          instance.putMerchantIdRestrictionGroups(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20016);

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
