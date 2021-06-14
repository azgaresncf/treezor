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

  describe('(package)', function() {
    describe('InlineResponse201Users', function() {
      beforeEach(function() {
        instance = new Treezor.InlineResponse201Users();
      });

      it('should create an instance of InlineResponse201Users', function() {
        // TODO: update the code to test InlineResponse201Users
        expect(instance).to.be.a(Treezor.InlineResponse201Users);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property identificationId (base name: "identification-id")', function() {
        // TODO: update the code to test the property identificationId
        expect(instance).to.have.property('identificationId');
        // expect(instance.identificationId).to.be(expectedValueLiteral);
      });

      it('should have the property identificationUrl (base name: "identification-url")', function() {
        // TODO: update the code to test the property identificationUrl
        expect(instance).to.have.property('identificationUrl');
        // expect(instance.identificationUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));