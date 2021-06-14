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
    instance = new Treezor.UserApi();
  });

  describe('(package)', function() {
    describe('UserApi', function() {
      describe('deleteUser', function() {
        it('should call deleteUser successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUser call and complete the assertions
          /*
          var opts = {};

          instance.deleteUser(id, origin, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20027);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUser', function() {
        it('should call getUser successfully', function(done) {
          // TODO: uncomment, update parameter values for getUser call and complete the assertions
          /*
          var opts = {};

          instance.getUser(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20027);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsers', function() {
        it('should call getUsers successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsers call and complete the assertions
          /*
          var opts = {};

          instance.getUsers(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20027);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putUser', function() {
        it('should call putUser successfully', function(done) {
          // TODO: uncomment, update parameter values for putUser call and complete the assertions
          /*
          var opts = {};

          instance.putUser(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20027);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putUsers', function() {
        it('should call putUsers successfully', function(done) {
          // TODO: uncomment, update parameter values for putUsers call and complete the assertions
          /*
          var opts = {};

          instance.putUsers(specifiedUSPerson, email, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20027);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersIdKyclivenessPost', function() {
        it('should call usersIdKyclivenessPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdKyclivenessPost call and complete the assertions
          /*
          var opts = {};

          instance.usersIdKyclivenessPost(userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse201);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersIdKyclivenessPut', function() {
        it('should call usersIdKyclivenessPut successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdKyclivenessPut call and complete the assertions
          /*

          instance.usersIdKyclivenessPut(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersIdKycreviewPut', function() {
        it('should call usersIdKycreviewPut successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdKycreviewPut call and complete the assertions
          /*
          var opts = {};

          instance.usersIdKycreviewPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse20027);

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
