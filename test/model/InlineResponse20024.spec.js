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
    describe('InlineResponse20024', function() {
      beforeEach(function() {
        instance = new Treezor.InlineResponse20024();
      });

      it('should create an instance of InlineResponse20024', function() {
        // TODO: update the code to test InlineResponse20024
        expect(instance).to.be.a(Treezor.InlineResponse20024);
      });

      it('should have the property transfers (base name: "transfers")', function() {
        // TODO: update the code to test the property transfers
        expect(instance).to.have.property('transfers');
        // expect(instance.transfers).to.be(expectedValueLiteral);
      });

    });
  });

}));
