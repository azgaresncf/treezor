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
import {ApiClient} from "../ApiClient";
import {InlineResponse20014} from '../model/InlineResponse20014';
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* Mandate service.
* @module api/MandateApi
* @version 0.1.1
*/
export class MandateApi {

    /**
    * Constructs a new MandateApi. 
    * @alias module:api/MandateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteMandate operation.
     * @callback moduleapi/MandateApi~deleteMandateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * revoke a mandate
     * Change mandate&#x27;s status to canceled.
     * @param {Number} id Mandate&#x27;s internal id.
     * @param {module:model/String} origin The origin of the request for revocation
     * @param {module:api/MandateApi~deleteMandateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteMandate(id, origin, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMandate");
      }
      // verify the required parameter 'origin' is set
      if (origin === undefined || origin === null) {
        throw new Error("Missing the required parameter 'origin' when calling deleteMandate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'origin': origin
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/mandates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMandate operation.
     * @callback moduleapi/MandateApi~getMandateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get mandate
     * Get a mandate from the system.
     * @param {Number} id Mandate&#x27;s internal id.
     * @param {module:api/MandateApi~getMandateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMandate(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMandate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/mandates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getMandates operation.
     * @callback moduleapi/MandateApi~getMandatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * search mandates
     * Get mandates that match search criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.mandateId Mandate&#x27;s Id
     * @param {Number} opts.userId User&#x27;s id who initiates the mandate request.
     * @param {String} opts.uniqueMandateReference Unique Mandate Reference (UMR) of the searched mandate. It is a sequence of characters that ensures the mandate traceability. UMR coupled with SCI allows to uniquely identify a creditor and a contract for any mandate. It is provided at the mandate creation.
     * @param {String} opts.mandateStatus Mandate&#x27;s status. Possible values: * CANCELED * PENDING * VALIDATED 
     * @param {String} opts.filter You can filter the API response by using filter(s). Filters should be separated by a \&quot;;\&quot;. Example for 3 filters : FILTER1;FILTER2;FILTER3. A single filter has the following syntax : \&quot;fieldName criterion expression\&quot;. Where :  - fieldName : the name of a filterable field of this object.   - expression : the values to be included or excluded (see the table below for more information)   - criterion : a filter criterion.  Here are the possible values for criterion :   | Criteria |         Description    |                   Type                   | Expression Example |  |----------|------------------------|------------------------------------------|--------------------|  |     &gt;    |      greater than      |            alphanumeric string           |         100        |  |    &gt;&#x3D;    | greater or equal than  |            alphanumeric string           |         100        |  |     &lt;    |        less than       |            alphanumeric string           |         100        |  |    &lt;&#x3D;    |   less or equal than   |            alphanumeric string           |         100        |  |    !&#x3D;    |      not equal to      |            alphanumeric string           |         100        |  |   like   |          like          |            alphanumeric string           |         100        |  |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |  |    &#x3D;&#x3D;    |         equals         |            alphanumeric string           |         100        | 
     * @param {module:api/MandateApi~getMandatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getMandates(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'mandateId': opts['mandateId'],'userId': opts['userId'],'uniqueMandateReference': opts['uniqueMandateReference'],'mandateStatus': opts['mandateStatus'],'filter': opts['filter']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/mandates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the mandatesIdResendOtpPut operation.
     * @callback moduleapi/MandateApi~mandatesIdResendOtpPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * send an OTP
     * Send an OTP to sign a specific mandate. The OTP will be sent to the user&#x27;s mobile phone OR to a specific mobile phone number in the request. 
     * @param {Number} id Mandate&#x27;s id.
     * @param {String} accessToken Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {Number} userId User&#x27;s id who initiates the mandate request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.debtorMobile Debtor&#x27;s mobile phone number. Used to send the OTP for signature
     * @param {module:api/MandateApi~mandatesIdResendOtpPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    mandatesIdResendOtpPut(id, accessToken, accessSignature, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling mandatesIdResendOtpPut");
      }
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling mandatesIdResendOtpPut");
      }
      // verify the required parameter 'accessSignature' is set
      if (accessSignature === undefined || accessSignature === null) {
        throw new Error("Missing the required parameter 'accessSignature' when calling mandatesIdResendOtpPut");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling mandatesIdResendOtpPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'accessToken': accessToken,'accessSignature': accessSignature,'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'userId': userId,'debtorMobile': opts['debtorMobile']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/mandates/{id}/ResendOtp/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the mandatesIdSignPut operation.
     * @callback moduleapi/MandateApi~mandatesIdSignPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * sign a mandate
     * Sign a mandate with the received OTP.
     * @param {Number} id Mandate&#x27;s id.
     * @param {String} accessToken Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {Number} userId User&#x27;s is who initiates the mandate request.
     * @param {String} otp The One-time password that the user got once mandate created.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.debtorSignatureIp IP address from which the mandate will be signed.
     * @param {module:api/MandateApi~mandatesIdSignPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    mandatesIdSignPut(id, accessToken, accessSignature, userId, otp, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling mandatesIdSignPut");
      }
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling mandatesIdSignPut");
      }
      // verify the required parameter 'accessSignature' is set
      if (accessSignature === undefined || accessSignature === null) {
        throw new Error("Missing the required parameter 'accessSignature' when calling mandatesIdSignPut");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling mandatesIdSignPut");
      }
      // verify the required parameter 'otp' is set
      if (otp === undefined || otp === null) {
        throw new Error("Missing the required parameter 'otp' when calling mandatesIdSignPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'accessToken': accessToken,'accessSignature': accessSignature,'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'userId': userId,'otp': otp,'debtorSignatureIp': opts['debtorSignatureIp']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/mandates/{id}/Sign/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postMandates operation.
     * @callback moduleapi/MandateApi~postMandatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a mandate
     * Create a new mandate in the system. 
     * @param {module:model/String} sddType Type of mandate.  | Type | Description | | ---- | ----------- | | core | Sepa Direct Debit Core | | b2b | Sepa Direct Debit Business 2 Business  | 
     * @param {Boolean} isPaper Indicate if it&#x27;s a paper mandate or not
     * @param {String} userId User&#x27;s id who initiates the mandate request. The creditor.
     * @param {String} debtorName Debtor&#x27;s full name
     * @param {String} debtorAddress Debtor&#x27;s address.
     * @param {String} debtorCity Debtor&#x27;s city.
     * @param {String} debtorZipCode Debtor&#x27;s zip code
     * @param {String} debtorCountry Debtor&#x27;s country
     * @param {String} debtorIban Debtor&#x27;s IBAN
     * @param {String} sequenceType Type of mandate.  | Type | Description | | ---- | ----------- | | one-off | One-off payment | | recurrent | Recurrent payment |  Default value: one-off. 
     * @param {String} createdIp IP address of the system that created mandate.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.debtorBic Debtor&#x27;s BIC (or SWIFT)
     * @param {String} opts.signatureDate Signature date of the mandate. Required if is paper.
     * @param {module:api/MandateApi~postMandatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postMandates(sddType, isPaper, userId, debtorName, debtorAddress, debtorCity, debtorZipCode, debtorCountry, debtorIban, sequenceType, createdIp, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sddType' is set
      if (sddType === undefined || sddType === null) {
        throw new Error("Missing the required parameter 'sddType' when calling postMandates");
      }
      // verify the required parameter 'isPaper' is set
      if (isPaper === undefined || isPaper === null) {
        throw new Error("Missing the required parameter 'isPaper' when calling postMandates");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling postMandates");
      }
      // verify the required parameter 'debtorName' is set
      if (debtorName === undefined || debtorName === null) {
        throw new Error("Missing the required parameter 'debtorName' when calling postMandates");
      }
      // verify the required parameter 'debtorAddress' is set
      if (debtorAddress === undefined || debtorAddress === null) {
        throw new Error("Missing the required parameter 'debtorAddress' when calling postMandates");
      }
      // verify the required parameter 'debtorCity' is set
      if (debtorCity === undefined || debtorCity === null) {
        throw new Error("Missing the required parameter 'debtorCity' when calling postMandates");
      }
      // verify the required parameter 'debtorZipCode' is set
      if (debtorZipCode === undefined || debtorZipCode === null) {
        throw new Error("Missing the required parameter 'debtorZipCode' when calling postMandates");
      }
      // verify the required parameter 'debtorCountry' is set
      if (debtorCountry === undefined || debtorCountry === null) {
        throw new Error("Missing the required parameter 'debtorCountry' when calling postMandates");
      }
      // verify the required parameter 'debtorIban' is set
      if (debtorIban === undefined || debtorIban === null) {
        throw new Error("Missing the required parameter 'debtorIban' when calling postMandates");
      }
      // verify the required parameter 'sequenceType' is set
      if (sequenceType === undefined || sequenceType === null) {
        throw new Error("Missing the required parameter 'sequenceType' when calling postMandates");
      }
      // verify the required parameter 'createdIp' is set
      if (createdIp === undefined || createdIp === null) {
        throw new Error("Missing the required parameter 'createdIp' when calling postMandates");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'sddType': sddType,'isPaper': isPaper,'userId': userId,'debtorName': debtorName,'debtorAddress': debtorAddress,'debtorCity': debtorCity,'debtorZipCode': debtorZipCode,'debtorCountry': debtorCountry,'debtorIban': debtorIban,'debtorBic': opts['debtorBic'],'sequenceType': sequenceType,'createdIp': createdIp,'signatureDate': opts['signatureDate']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/mandates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}