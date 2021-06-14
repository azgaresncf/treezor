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
 * The MccRestrictionGroupsIdBody model module.
 * @module model/MccRestrictionGroupsIdBody
 * @version 0.1.1
 */
export class MccRestrictionGroupsIdBody {
  /**
   * Constructs a new <code>MccRestrictionGroupsIdBody</code>.
   * @alias module:model/MccRestrictionGroupsIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MccRestrictionGroupsIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MccRestrictionGroupsIdBody} obj Optional instance to populate.
   * @return {module:model/MccRestrictionGroupsIdBody} The populated <code>MccRestrictionGroupsIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MccRestrictionGroupsIdBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('mcc'))
        obj.mcc = ApiClient.convertToType(data['mcc'], ['Number']);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('fields'))
        obj.fields = ApiClient.convertToType(data['fields'], ['String']);
    }
    return obj;
  }
}

/**
 * Name of the MCC restriction group
 * @member {String} name
 */
MccRestrictionGroupsIdBody.prototype.name = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MccRestrictionGroupsIdBody.StatusEnum = {
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
 * Status of the MCC group
 * @member {module:model/MccRestrictionGroupsIdBody.StatusEnum} status
 */
MccRestrictionGroupsIdBody.prototype.status = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 * @default true
 */
MccRestrictionGroupsIdBody.prototype.isWhitelist = true;

/**
 * Array of MCC
 * @member {Array.<Number>} mcc
 */
MccRestrictionGroupsIdBody.prototype.mcc = undefined;

/**
 * The date at which the MCC restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
MccRestrictionGroupsIdBody.prototype.startDate = undefined;

/**
 * List of the object's properties you want to pick up.
 * @member {Array.<String>} fields
 */
MccRestrictionGroupsIdBody.prototype.fields = undefined;
