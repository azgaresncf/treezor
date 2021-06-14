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
import {ApiClient} from '../ApiClient';

/**
 * The InlineResponse200AcquirerMerchantIdGroups model module.
 * @module model/InlineResponse200AcquirerMerchantIdGroups
 * @version 0.1.1
 */
export class InlineResponse200AcquirerMerchantIdGroups {
  /**
   * Constructs a new <code>InlineResponse200AcquirerMerchantIdGroups</code>.
   * @alias module:model/InlineResponse200AcquirerMerchantIdGroups
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200AcquirerMerchantIdGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200AcquirerMerchantIdGroups} obj Optional instance to populate.
   * @return {module:model/InlineResponse200AcquirerMerchantIdGroups} The populated <code>InlineResponse200AcquirerMerchantIdGroups</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200AcquirerMerchantIdGroups();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('merchants'))
        obj.merchants = ApiClient.convertToType(data['merchants'], [['String']]);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
    }
    return obj;
  }
}

/**
 * Acquirer Merchant ID Group's id
 * @member {Number} id
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.id = undefined;

/**
 * Acquirer Merchant ID Group's name
 * @member {String} name
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.name = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.isWhitelist = undefined;

/**
 * Array of Acquirer ID containing Array of Merchant ID
 * @member {Array.<Array.<String>>} merchants
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.merchants = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse200AcquirerMerchantIdGroups.StatusEnum = {
  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "CANCELED"
   * @const
   */
  CANCELED: "CANCELED",

  /**
   * value: "VALIDATED"
   * @const
   */
  VALIDATED: "VALIDATED"
};
/**
 * status of the Acquirer Merchant ID group
 * @member {module:model/InlineResponse200AcquirerMerchantIdGroups.StatusEnum} status
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.status = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.startDate = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} createdDate
 */
InlineResponse200AcquirerMerchantIdGroups.prototype.createdDate = undefined;

