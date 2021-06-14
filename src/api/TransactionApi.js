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
import {InlineResponse20023} from '../model/InlineResponse20023';
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* Transaction service.
* @module api/TransactionApi
* @version 0.1.1
*/
export class TransactionApi {

    /**
    * Constructs a new TransactionApi. 
    * @alias module:api/TransactionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getTransaction operation.
     * @callback moduleapi/TransactionApi~getTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get a transaction
     * Get a transaction from the system.
     * @param {Number} id Transaction&#x27;s internal id.
     * @param {module:api/TransactionApi~getTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTransaction(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransaction");
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
      let returnType = InlineResponse20023;

      return this.apiClient.callApi(
        '/transactions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTransactions operation.
     * @callback moduleapi/TransactionApi~getTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * search transactions
     * Get transactions that match search criteria. The request must contains at least one of those inputs walletId, transactionId,  executionDate, valueDate, createdDateFrom , createdDateTo
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.transactionId Transaction&#x27;s Id
     * @param {String} opts.transactionType Transaction types. Possible values: * Payin * Payout * Transfer * Transfer Refund * Payin Refund * Discount * Bill 
     * @param {Number} opts.walletId Transactions&#x27; wallet id.
     * @param {Number} opts.userId Transactions&#x27; user id.
     * @param {String} opts.name Transactions&#x27; name.
     * @param {String} opts.description transactions&#x27; description.
     * @param {String} opts.amount Transactions&#x27; amount.
     * @param {String} opts.currency Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). 
     * @param {Date} opts.valueDate The value date of the transaction (date applied for the payment) Format : YYYY-MM-DD HH:MM:SS
     * @param {Date} opts.executionDate Date of the execution of the transaction Format : YYYY-MM-DD HH:MM:SS
     * @param {Number} opts.pageNumber Pagination page number. More info [here](https://agent.treezor.com/lists). 
     * @param {Number} opts.pageCount The number of items per page. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortBy The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortOrder The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
     * @param {Date} opts.createdDateFrom The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.createdDateTo The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {module:api/TransactionApi~getTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTransactions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'transactionId': opts['transactionId'],'transactionType': opts['transactionType'],'walletId': opts['walletId'],'userId': opts['userId'],'name': opts['name'],'description': opts['description'],'amount': opts['amount'],'currency': opts['currency'],'valueDate': opts['valueDate'],'executionDate': opts['executionDate'],'pageNumber': opts['pageNumber'],'pageCount': opts['pageCount'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'createdDateFrom': opts['createdDateFrom'],'createdDateTo': opts['createdDateTo']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20023;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}