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
    describe('BeneficiariesSddB2bWhitelist', function() {
      beforeEach(function() {
        instance = new Treezor.BeneficiariesSddB2bWhitelist();
      });

      it('should create an instance of BeneficiariesSddB2bWhitelist', function() {
        // TODO: update the code to test BeneficiariesSddB2bWhitelist
        expect(instance).to.be.a(Treezor.BeneficiariesSddB2bWhitelist);
      });

      it('should have the property uniqueMandateReference (base name: "uniqueMandateReference")', function() {
        // TODO: update the code to test the property uniqueMandateReference
        expect(instance).to.have.property('uniqueMandateReference');
        // expect(instance.uniqueMandateReference).to.be(expectedValueLiteral);
      });

      it('should have the property isRecurrent (base name: "isRecurrent")', function() {
        // TODO: update the code to test the property isRecurrent
        expect(instance).to.have.property('isRecurrent');
        // expect(instance.isRecurrent).to.be(expectedValueLiteral);
      });

      it('should have the property walletId (base name: "walletId")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

    });
  });

}));
