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
import {InlineResponse20029} from '../model/InlineResponse20029';
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* Wallet service.
* @module api/WalletApi
* @version 0.1.1
*/
export class WalletApi {

    /**
    * Constructs a new WalletApi. 
    * @alias module:api/WalletApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteWallet operation.
     * @callback moduleapi/WalletApi~deleteWalletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a wallet
     * Change wallet&#x27;s status to **CANCELED**.
     * @param {Number} id Wallet&#x27;s id
     * @param {String} origin Request&#x27;s origin. Possible values are: * OPERATOR * USER 
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {module:api/WalletApi~deleteWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteWallet(id, origin, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWallet");
      }
      // verify the required parameter 'origin' is set
      if (origin === undefined || origin === null) {
        throw new Error("Missing the required parameter 'origin' when calling deleteWallet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'origin': origin
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/wallets/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWallet operation.
     * @callback moduleapi/WalletApi~getWalletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get a wallet
     * @param {Number} id Object internal id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {module:api/WalletApi~getWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWallet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWallet");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/wallets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWallets operation.
     * @callback moduleapi/WalletApi~getWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * search wallets
     * Get wallets from the system that match the search criteria. The request must contains at least one of those inputs : walletId, eventAlias, userId, walletTypeId
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserIP Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.walletId Wallet&#x27;s unique id.
     * @param {String} opts.walletStatus Wallet&#x27;s status:  * **validated**: Wallet is active. It is possible to deposit to or retrieve money from the wallet.  * **cancelled**: Wallet is closed. No action possible, there is no money in the wallet, it was closed by an operator or by the user.  * **pending**: Wallet being validated (e.g. suspected fraud, late submission of documents&#x27; validation ... KYC ). In this case, it is not possible to use the wallet for transactions.
     * @param {Number} opts.userId Wallet owner&#x27;s id.
     * @param {Number} opts.parentUserId Parent user id of the wallet owner
     * @param {String} opts.walletTag Custom data.
     * @param {Number} opts.walletTypeId Wallet type id. The following values are defined:  | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) | 
     * @param {String} opts.eventAlias Short url wallet name. It&#x27;s automatically generated by the system, but it could be modified and customised by the user. For example: www.domain.com/wallet&#x3D;mywedding 
     * @param {Date} opts.eventPayinStartDate  Wallet activation date. The date from which you can deposit money on the wallet. Format : YYYY-MM-DD HH:MM:SS
     * @param {Date} opts.eventPayinEndDate Deadline to money deposit on the wallet. Format : YYYY-MM-DD HH:MM:SS 
     * @param {Number} opts.tariffId Wallet pricing id.
     * @param {Number} opts.payinCount Number of payin done on the wallet.
     * @param {Number} opts.pageNumber Pagination page number. More info [here](https://agent.treezor.com/lists). 
     * @param {Number} opts.pageCount The number of items per page. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortBy The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortOrder The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
     * @param {Date} opts.createdDateFrom The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.createdDateTo The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.updatedDateFrom The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.updatedDateTo The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {module:api/WalletApi~getWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getWallets(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIP': opts['accessUserIP'],'walletId': opts['walletId'],'walletStatus': opts['walletStatus'],'userId': opts['userId'],'parentUserId': opts['parentUserId'],'walletTag': opts['walletTag'],'walletTypeId': opts['walletTypeId'],'eventAlias': opts['eventAlias'],'eventPayinStartDate': opts['eventPayinStartDate'],'eventPayinEndDate': opts['eventPayinEndDate'],'tariffId': opts['tariffId'],'payinCount': opts['payinCount'],'pageNumber': opts['pageNumber'],'pageCount': opts['pageCount'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'createdDateFrom': opts['createdDateFrom'],'createdDateTo': opts['createdDateTo'],'updatedDateFrom': opts['updatedDateFrom'],'updatedDateTo': opts['updatedDateTo']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/wallets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postWallets operation.
     * @callback moduleapi/WalletApi~postWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a wallet
     * Create a new wallet in the system..
     * @param {Number} walletTypeId Wallet type id. The following values are defined:  | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) | 
     * @param {Number} tariffId Wallet pricing id.
     * @param {Number} userId Wallet owner&#x27;s id.
     * @param {String} currency The currency that will be used for all wallet money transactions format : ISO 4217 3-letter code for each currency : Euro &#x3D; EUR ; US Dollar &#x3D; USD Ã¢â‚¬Â¦ Default currency will be same as the wallet 
     * @param {String} eventName Event name that will be used as wallet name. For example, in a wedding list: Wedding of X and Y 
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserIP Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.jointUserId Wallet co-owner&#x27;s id. This user will not be allowed to collect the money from the wallet. 
     * @param {String} opts.walletTag Custom data
     * @param {String} opts.eventAlias Short url wallet name. It&#x27;s automatically generated by the system, but it could be modified and customised by the user. For example: www.domain.com/wallet&#x3D;mywedding. Please note that the eventAlias must be unique. 
     * @param {Date} opts.eventDate Wallet event date. Format : YYYY-MM-DD. Default: Created date + 7 days. 
     * @param {String} opts.eventMessage It can be a description of the wallet.
     * @param {Date} opts.eventPayinStartDate  DEPRECATED. Wallet activation date. The date from which you can deposit money on the wallet. Format : YYYY-MM-DD. If null, the default date will be the created date of the wallet. It will be deleted soon.
     * @param {Date} opts.eventPayinEndDate DEPRECATED. Deadline to money deposit on the wallet. Format : YYYY-MM-DD. If null, the money can be deposited indefinitely on the wallet. It will be deleted soon. 
     * @param {module:api/WalletApi~postWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postWallets(walletTypeId, tariffId, userId, currency, eventName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'walletTypeId' is set
      if (walletTypeId === undefined || walletTypeId === null) {
        throw new Error("Missing the required parameter 'walletTypeId' when calling postWallets");
      }
      // verify the required parameter 'tariffId' is set
      if (tariffId === undefined || tariffId === null) {
        throw new Error("Missing the required parameter 'tariffId' when calling postWallets");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling postWallets");
      }
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling postWallets");
      }
      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling postWallets");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIP': opts['accessUserIP'],'walletTypeId': walletTypeId,'tariffId': tariffId,'userId': userId,'jointUserId': opts['jointUserId'],'walletTag': opts['walletTag'],'currency': currency,'eventName': eventName,'eventAlias': opts['eventAlias'],'eventDate': opts['eventDate'],'eventMessage': opts['eventMessage'],'eventPayinStartDate': opts['eventPayinStartDate'],'eventPayinEndDate': opts['eventPayinEndDate']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/wallets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the putWallet operation.
     * @callback moduleapi/WalletApi~putWalletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update a wallet
     * Modifiy wallet information
     * @param {Number} id Object internal id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.walletTypeId Change wallet type id
     * @param {String} opts.eventName Change event name
     * @param {String} opts.eventAlias Change event alias. Please note that the eventAlias must be unique.
     * @param {String} opts.eventDate Change event date
     * @param {String} opts.eventMessage Change event message
     * @param {String} opts.eventPayinStartDate DEPRECATED. Change event payin starting date. It will be deleted soon.
     * @param {String} opts.eventPayinEndDate DEPRECATED. Change event payin end date.  It will be deleted soon.
     * @param {String} opts.urlImage Change URL image
     * @param {String} opts.imageName Change image name
     * @param {String} opts.tariffId Change tariff id
     * @param {module:api/WalletApi~putWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    putWallet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putWallet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'walletTypeId': opts['walletTypeId'],'eventName': opts['eventName'],'eventAlias': opts['eventAlias'],'eventDate': opts['eventDate'],'eventMessage': opts['eventMessage'],'eventPayinStartDate': opts['eventPayinStartDate'],'eventPayinEndDate': opts['eventPayinEndDate'],'urlImage': opts['urlImage'],'imageName': opts['imageName'],'tariffId': opts['tariffId']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/wallets/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}