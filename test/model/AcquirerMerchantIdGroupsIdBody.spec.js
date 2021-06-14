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
    describe('AcquirerMerchantIdGroupsIdBody', function() {
      beforeEach(function() {
        instance = new Treezor.AcquirerMerchantIdGroupsIdBody();
      });

      it('should create an instance of AcquirerMerchantIdGroupsIdBody', function() {
        // TODO: update the code to test AcquirerMerchantIdGroupsIdBody
        expect(instance).to.be.a(Treezor.AcquirerMerchantIdGroupsIdBody);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property isWhitelist (base name: "isWhitelist")', function() {
        // TODO: update the code to test the property isWhitelist
        expect(instance).to.have.property('isWhitelist');
        // expect(instance.isWhitelist).to.be(expectedValueLiteral);
      });

      it('should have the property list (base name: "list")', function() {
        // TODO: update the code to test the property list
        expect(instance).to.have.property('list');
        // expect(instance.list).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property operation (base name: "operation")', function() {
        // TODO: update the code to test the property operation
        expect(instance).to.have.property('operation');
        // expect(instance.operation).to.be(expectedValueLiteral);
      });

    });
  });

}));
