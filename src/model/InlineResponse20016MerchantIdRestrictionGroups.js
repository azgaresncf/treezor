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
 * The InlineResponse20016MerchantIdRestrictionGroups model module.
 * @module model/InlineResponse20016MerchantIdRestrictionGroups
 * @version 0.1.1
 */
export class InlineResponse20016MerchantIdRestrictionGroups {
  /**
   * Constructs a new <code>InlineResponse20016MerchantIdRestrictionGroups</code>.
   * @alias module:model/InlineResponse20016MerchantIdRestrictionGroups
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20016MerchantIdRestrictionGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20016MerchantIdRestrictionGroups} obj Optional instance to populate.
   * @return {module:model/InlineResponse20016MerchantIdRestrictionGroups} The populated <code>InlineResponse20016MerchantIdRestrictionGroups</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20016MerchantIdRestrictionGroups();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('merchants'))
        obj.merchants = ApiClient.convertToType(data['merchants'], ['String']);
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
 * Merchant ID Group's id
 * @member {Number} id
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.id = undefined;

/**
 * Merchant ID Group's name
 * @member {String} name
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.name = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.isWhitelist = undefined;

/**
 * Array of Merchant ID
 * @member {Array.<String>} merchants
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.merchants = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20016MerchantIdRestrictionGroups.StatusEnum = {
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
 * status of the Merchant ID group
 * @member {module:model/InlineResponse20016MerchantIdRestrictionGroups.StatusEnum} status
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.status = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.startDate = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} createdDate
 */
InlineResponse20016MerchantIdRestrictionGroups.prototype.createdDate = undefined;
