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
 * The MerchantIdRestrictionGroupsIdBody model module.
 * @module model/MerchantIdRestrictionGroupsIdBody
 * @version 0.1.1
 */
export class MerchantIdRestrictionGroupsIdBody {
  /**
   * Constructs a new <code>MerchantIdRestrictionGroupsIdBody</code>.
   * @alias module:model/MerchantIdRestrictionGroupsIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MerchantIdRestrictionGroupsIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MerchantIdRestrictionGroupsIdBody} obj Optional instance to populate.
   * @return {module:model/MerchantIdRestrictionGroupsIdBody} The populated <code>MerchantIdRestrictionGroupsIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MerchantIdRestrictionGroupsIdBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('merchants'))
        obj.merchants = ApiClient.convertToType(data['merchants'], ['String']);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
    }
    return obj;
  }
}

/**
 * Name of the merchant ID restriction group
 * @member {String} name
 */
MerchantIdRestrictionGroupsIdBody.prototype.name = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MerchantIdRestrictionGroupsIdBody.StatusEnum = {
  /**
   * value: "VALIDATED"
   * @const
   */
  VALIDATED: "VALIDATED",

  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "CANCELED"
   * @const
   */
  CANCELED: "CANCELED"
};
/**
 * Status of the merchant ID restriction group
 * @member {module:model/MerchantIdRestrictionGroupsIdBody.StatusEnum} status
 */
MerchantIdRestrictionGroupsIdBody.prototype.status = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 * @default true
 */
MerchantIdRestrictionGroupsIdBody.prototype.isWhitelist = true;

/**
 * Array of merchant ID (Deprecated. Use PUT /merchantIdRestrictionGroups/{id}/DeltaUpdate/ to update merchants ID list)
 * @member {Array.<String>} merchants
 */
MerchantIdRestrictionGroupsIdBody.prototype.merchants = undefined;

/**
 * The date at which the merchant ID group will be take into account. Format YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
MerchantIdRestrictionGroupsIdBody.prototype.startDate = undefined;

