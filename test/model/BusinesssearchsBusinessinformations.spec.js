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
    describe('BusinesssearchsBusinessinformations', function() {
      beforeEach(function() {
        instance = new Treezor.BusinesssearchsBusinessinformations();
      });

      it('should create an instance of BusinesssearchsBusinessinformations', function() {
        // TODO: update the code to test BusinesssearchsBusinessinformations
        expect(instance).to.be.a(Treezor.BusinesssearchsBusinessinformations);
      });

      it('should have the property legalName (base name: "legalName")', function() {
        // TODO: update the code to test the property legalName
        expect(instance).to.have.property('legalName');
        // expect(instance.legalName).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property legalTvaNumber (base name: "legalTvaNumber")', function() {
        // TODO: update the code to test the property legalTvaNumber
        expect(instance).to.have.property('legalTvaNumber');
        // expect(instance.legalTvaNumber).to.be(expectedValueLiteral);
      });

      it('should have the property legalRegistrationNumber (base name: "legalRegistrationNumber")', function() {
        // TODO: update the code to test the property legalRegistrationNumber
        expect(instance).to.have.property('legalRegistrationNumber');
        // expect(instance.legalRegistrationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property officeType (base name: "officeType")', function() {
        // TODO: update the code to test the property officeType
        expect(instance).to.have.property('officeType');
        // expect(instance.officeType).to.be(expectedValueLiteral);
      });

      it('should have the property safeNumber (base name: "safeNumber")', function() {
        // TODO: update the code to test the property safeNumber
        expect(instance).to.have.property('safeNumber');
        // expect(instance.safeNumber).to.be(expectedValueLiteral);
      });

      it('should have the property activityType (base name: "activityType")', function() {
        // TODO: update the code to test the property activityType
        expect(instance).to.have.property('activityType');
        // expect(instance.activityType).to.be(expectedValueLiteral);
      });

      it('should have the property externalId (base name: "externalId")', function() {
        // TODO: update the code to test the property externalId
        expect(instance).to.have.property('externalId');
        // expect(instance.externalId).to.be(expectedValueLiteral);
      });

      it('should have the property address1 (base name: "address1")', function() {
        // TODO: update the code to test the property address1
        expect(instance).to.have.property('address1');
        // expect(instance.address1).to.be(expectedValueLiteral);
      });

      it('should have the property postcode (base name: "postcode")', function() {
        // TODO: update the code to test the property postcode
        expect(instance).to.have.property('postcode');
        // expect(instance.postcode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property tradename (base name: "tradename")', function() {
        // TODO: update the code to test the property tradename
        expect(instance).to.have.property('tradename');
        // expect(instance.tradename).to.be(expectedValueLiteral);
      });

    });
  });

}));