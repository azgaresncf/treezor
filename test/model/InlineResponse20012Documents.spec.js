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
    describe('InlineResponse20012Documents', function() {
      beforeEach(function() {
        instance = new Treezor.InlineResponse20012Documents();
      });

      it('should create an instance of InlineResponse20012Documents', function() {
        // TODO: update the code to test InlineResponse20012Documents
        expect(instance).to.be.a(Treezor.InlineResponse20012Documents);
      });

      it('should have the property documentId (base name: "documentId")', function() {
        // TODO: update the code to test the property documentId
        expect(instance).to.have.property('documentId');
        // expect(instance.documentId).to.be(expectedValueLiteral);
      });

      it('should have the property documentTag (base name: "documentTag")', function() {
        // TODO: update the code to test the property documentTag
        expect(instance).to.have.property('documentTag');
        // expect(instance.documentTag).to.be(expectedValueLiteral);
      });

      it('should have the property documentStatus (base name: "documentStatus")', function() {
        // TODO: update the code to test the property documentStatus
        expect(instance).to.have.property('documentStatus');
        // expect(instance.documentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property documentTypeId (base name: "documentTypeId")', function() {
        // TODO: update the code to test the property documentTypeId
        expect(instance).to.have.property('documentTypeId');
        // expect(instance.documentTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property documentType (base name: "documentType")', function() {
        // TODO: update the code to test the property documentType
        expect(instance).to.have.property('documentType');
        // expect(instance.documentType).to.be(expectedValueLiteral);
      });

      it('should have the property residenceId (base name: "residenceId")', function() {
        // TODO: update the code to test the property residenceId
        expect(instance).to.have.property('residenceId');
        // expect(instance.residenceId).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "clientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property userLastname (base name: "userLastname")', function() {
        // TODO: update the code to test the property userLastname
        expect(instance).to.have.property('userLastname');
        // expect(instance.userLastname).to.be(expectedValueLiteral);
      });

      it('should have the property userFirstname (base name: "userFirstname")', function() {
        // TODO: update the code to test the property userFirstname
        expect(instance).to.have.property('userFirstname');
        // expect(instance.userFirstname).to.be(expectedValueLiteral);
      });

      it('should have the property fileName (base name: "fileName")', function() {
        // TODO: update the code to test the property fileName
        expect(instance).to.have.property('fileName');
        // expect(instance.fileName).to.be(expectedValueLiteral);
      });

      it('should have the property temporaryUrl (base name: "temporaryUrl")', function() {
        // TODO: update the code to test the property temporaryUrl
        expect(instance).to.have.property('temporaryUrl');
        // expect(instance.temporaryUrl).to.be(expectedValueLiteral);
      });

      it('should have the property temporaryUrlThumb (base name: "temporaryUrlThumb")', function() {
        // TODO: update the code to test the property temporaryUrlThumb
        expect(instance).to.have.property('temporaryUrlThumb');
        // expect(instance.temporaryUrlThumb).to.be(expectedValueLiteral);
      });

      it('should have the property createdDate (base name: "createdDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedDate (base name: "modifiedDate")', function() {
        // TODO: update the code to test the property modifiedDate
        expect(instance).to.have.property('modifiedDate');
        // expect(instance.modifiedDate).to.be(expectedValueLiteral);
      });

      it('should have the property totalRows (base name: "totalRows")', function() {
        // TODO: update the code to test the property totalRows
        expect(instance).to.have.property('totalRows');
        // expect(instance.totalRows).to.be(expectedValueLiteral);
      });

    });
  });

}));