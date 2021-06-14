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
import {InlineResponse20013} from '../model/InlineResponse20013';
import {InlineResponseDefault} from '../model/InlineResponseDefault';
import {IssuerInitiatedDigitizationDatasBody} from '../model/IssuerInitiatedDigitizationDatasBody';

/**
* IssuerInitiatedDigitizationData service.
* @module api/IssuerInitiatedDigitizationDataApi
* @version 0.1.1
*/
export class IssuerInitiatedDigitizationDataApi {

    /**
    * Constructs a new IssuerInitiatedDigitizationDataApi. 
    * @alias module:api/IssuerInitiatedDigitizationDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the tavRequestPOST operation.
     * @callback moduleapi/IssuerInitiatedDigitizationDataApi~tavRequestPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request the issuerInitiatedDigitizationData
     * Create a new issuerInitiatedDigitizationData request
     * @param {Object} opts Optional parameters
     * @param {module:model/IssuerInitiatedDigitizationDatasBody} opts.body 
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://www.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://www.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://www.treezor.com/basics). 
     * @param {module:api/IssuerInitiatedDigitizationDataApi~tavRequestPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tavRequestPOST(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/issuerInitiatedDigitizationDatas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tavrequestget operation.
     * @callback moduleapi/IssuerInitiatedDigitizationDataApi~tavrequestgetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search issuerInitiatedDigitizationData requests
     * Search tav issuerInitiatedDigitizationData requests that match search criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Array.<String>} opts.fields List of the object&#x27;s properties you want to pick up.
     * @param {String} opts.filter You can filter the API response by using filter(s). Filterable fields are :  - id  - cardId  - tokenRequestor  - statusId  - createdDate  - modifiedDate  Filters should be separated by a \&quot;;\&quot;. Example for 3 filters : FILTER1;FILTER2;FILTER3. A single filter has the following syntax : \&quot;fieldName criterion expression\&quot;. Where :  - fieldName : the name of a filterable field of this object.   - expression : the values to be included or excluded (see the table below for more information)   - criterion : a filter criterion.  Here are the possible values for criterion :   | Criteria |         Description    |                   Type                   | Expression Example |  |----------|------------------------|------------------------------------------|--------------------|  |     &gt;    |      greater than      |            alphanumeric string           |         100        |  |    &gt;&#x3D;    | greater or equal than  |            alphanumeric string           |         100        |  |     &lt;    |        less than       |            alphanumeric string           |         100        |  |    &lt;&#x3D;    |   less or equal than   |            alphanumeric string           |         100        |  |    !&#x3D;    |      not equal to      |            alphanumeric string           |         100        |  |   like   |          like          |            alphanumeric string           |         100        |  |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |  |    &#x3D;&#x3D;    |         equals         |            alphanumeric string           |         100        | 
     * @param {Number} opts.pageNumber Pagination page number. More info [here](https://agent.treezor.com/lists). 
     * @param {Number} opts.pageCount The number of items per page. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortBy The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortOrder The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
     * @param {module:api/IssuerInitiatedDigitizationDataApi~tavrequestgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tavrequestget(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),'filter': opts['filter'],'pageNumber': opts['pageNumber'],'pageCount': opts['pageCount'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/issuerInitiatedDigitizationDatas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}