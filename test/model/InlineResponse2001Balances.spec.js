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
    describe('InlineResponse2001Balances', function() {
      beforeEach(function() {
        instance = new Treezor.InlineResponse2001Balances();
      });

      it('should create an instance of InlineResponse2001Balances', function() {
        // TODO: update the code to test InlineResponse2001Balances
        expect(instance).to.be.a(Treezor.InlineResponse2001Balances);
      });

      it('should have the property walletId (base name: "walletId")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

      it('should have the property currentBalance (base name: "currentBalance")', function() {
        // TODO: update the code to test the property currentBalance
        expect(instance).to.have.property('currentBalance');
        // expect(instance.currentBalance).to.be(expectedValueLiteral);
      });

      it('should have the property authorizations (base name: "authorizations")', function() {
        // TODO: update the code to test the property authorizations
        expect(instance).to.have.property('authorizations');
        // expect(instance.authorizations).to.be(expectedValueLiteral);
      });

      it('should have the property authorizedBalance (base name: "authorizedBalance")', function() {
        // TODO: update the code to test the property authorizedBalance
        expect(instance).to.have.property('authorizedBalance');
        // expect(instance.authorizedBalance).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property calculationDate (base name: "calculationDate")', function() {
        // TODO: update the code to test the property calculationDate
        expect(instance).to.have.property('calculationDate');
        // expect(instance.calculationDate).to.be(expectedValueLiteral);
      });

    });
  });

}));