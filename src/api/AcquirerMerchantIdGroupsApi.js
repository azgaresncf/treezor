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
import {AcquirerMerchantIdGroupsBody} from '../model/AcquirerMerchantIdGroupsBody';
import {AcquirerMerchantIdGroupsIdBody} from '../model/AcquirerMerchantIdGroupsIdBody';
import {InlineResponse200} from '../model/InlineResponse200';
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* AcquirerMerchantIdGroups service.
* @module api/AcquirerMerchantIdGroupsApi
* @version 0.1.1
*/
export class AcquirerMerchantIdGroupsApi {

    /**
    * Constructs a new AcquirerMerchantIdGroupsApi. 
    * @alias module:api/AcquirerMerchantIdGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteAcquirerMerchantIdGroups operation.
     * @callback moduleapi/AcquirerMerchantIdGroupsApi~deleteAcquirerMerchantIdGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * cancel a merchant id restriction group
     * Cancel a merchant id restriction group from the system.
     * @param {Number} id Merchant ID restriction Group internal id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields List of the object&#x27;s properties you want to pick up.
     * @param {module:api/AcquirerMerchantIdGroupsApi~deleteAcquirerMerchantIdGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteAcquirerMerchantIdGroups(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAcquirerMerchantIdGroups");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/acquirerMerchantIdGroups/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAcquirerMerchantIdGroup operation.
     * @callback moduleapi/AcquirerMerchantIdGroupsApi~getAcquirerMerchantIdGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * search acquirer merchant id restriction  groups
     * Get acquirer merchant ID restriction groups that match search criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Array.<String>} opts.fields List of the object&#x27;s properties you want to pick up.
     * @param {String} opts.filter You can filter the API response by using filter(s). Filterable fields are :   - id   - name   - isWhitelist   - status   - startDate   - createdDate    Filters should be separated by a \&quot;;\&quot;. Example for 3 filters : FILTER1;FILTER2;FILTER3.    A single filter has the following syntax : \&quot;fieldName criterion expression\&quot;.    Where :     - fieldName : the name of a filterable field of this object.      - expression : the values to be included or excluded (see the table below for more information)      - criterion : a filter criterion.    Here are the possible values for criterion :    | Criteria |         Description    |                   Type                   | Expression Example |   |----------|------------------------|------------------------------------------|--------------------|   |     &gt;    |      greater than      |            alphanumeric string           |         100        |   |    &gt;&#x3D;    | greater or equal than  |            alphanumeric string           |         100        |   |     &lt;    |        less than       |            alphanumeric string           |         100        |   |    &lt;&#x3D;    |   less or equal than   |            alphanumeric string           |         100        |   |    !&#x3D;    |      not equal to      |            alphanumeric string           |         100        |   |   like   |          like          |            alphanumeric string           |         100        |   |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |   |    &#x3D;&#x3D;    |         equals         |            alphanumeric string           |         100        | 
     * @param {Number} opts.pageNumber Pagination page number. More info [here](https://agent.treezor.com/lists). 
     * @param {Number} opts.pageCount The number of items per page. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortBy The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortOrder The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
     * @param {module:api/AcquirerMerchantIdGroupsApi~getAcquirerMerchantIdGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAcquirerMerchantIdGroup(opts, callback) {
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/acquirerMerchantIdGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAcquirerMerchantIdGroupsId operation.
     * @callback moduleapi/AcquirerMerchantIdGroupsApi~getAcquirerMerchantIdGroupsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get a acquirer merchant ID restriction group
     * Get a acquirer merchant ID restriction group from the system.
     * @param {Number} id Acquirer merchant ID restriction Group internal id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields List of the object&#x27;s properties you want to pick up.
     * @param {module:api/AcquirerMerchantIdGroupsApi~getAcquirerMerchantIdGroupsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAcquirerMerchantIdGroupsId(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAcquirerMerchantIdGroupsId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/acquirerMerchantIdGroups/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postAcquirerMerchantIdGroup operation.
     * @callback moduleapi/AcquirerMerchantIdGroupsApi~postAcquirerMerchantIdGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a acquirerMerchantIdGroup
     * Create a new merchant ID restriction group in the system grouped by acquirer.
     * @param {Object} opts Optional parameters
     * @param {module:model/AcquirerMerchantIdGroupsBody} opts.body 
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {module:api/AcquirerMerchantIdGroupsApi~postAcquirerMerchantIdGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postAcquirerMerchantIdGroup(opts, callback) {
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/acquirerMerchantIdGroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the putAcquirerMerchantIdGroups operation.
     * @callback moduleapi/AcquirerMerchantIdGroupsApi~putAcquirerMerchantIdGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * edit an acquirer merchant id restriction group
     * Edit an acquirer merchant id restriction group in the system.
     * @param {Number} id Acquirer Merchant ID restriction group&#x27;s id.
     * @param {Object} opts Optional parameters
     * @param {module:model/AcquirerMerchantIdGroupsIdBody} opts.body 
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {module:api/AcquirerMerchantIdGroupsApi~putAcquirerMerchantIdGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    putAcquirerMerchantIdGroups(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putAcquirerMerchantIdGroups");
      }

      let pathParams = {
        'id': id
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/acquirerMerchantIdGroups/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}