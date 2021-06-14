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
 * The AcquirerMerchantIdGroupsIdBody model module.
 * @module model/AcquirerMerchantIdGroupsIdBody
 * @version 0.1.1
 */
export class AcquirerMerchantIdGroupsIdBody {
  /**
   * Constructs a new <code>AcquirerMerchantIdGroupsIdBody</code>.
   * @alias module:model/AcquirerMerchantIdGroupsIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AcquirerMerchantIdGroupsIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcquirerMerchantIdGroupsIdBody} obj Optional instance to populate.
   * @return {module:model/AcquirerMerchantIdGroupsIdBody} The populated <code>AcquirerMerchantIdGroupsIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AcquirerMerchantIdGroupsIdBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('list'))
        obj.list = ApiClient.convertToType(data['list'], Object);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('operation'))
        obj.operation = ApiClient.convertToType(data['operation'], 'String');
    }
    return obj;
  }
}

/**
 * Name of the acquirer merchant ID restriction group
 * @member {String} name
 */
AcquirerMerchantIdGroupsIdBody.prototype.name = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AcquirerMerchantIdGroupsIdBody.StatusEnum = {
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
 * Status of the acquirer merchant ID restriction group
 * @member {module:model/AcquirerMerchantIdGroupsIdBody.StatusEnum} status
 */
AcquirerMerchantIdGroupsIdBody.prototype.status = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 * @default true
 */
AcquirerMerchantIdGroupsIdBody.prototype.isWhitelist = true;

/**
 * Edit the merchant ID list for a restriction group in the system (delta between current merchants list and your new merchants list).
 * @member {Object} list
 */
AcquirerMerchantIdGroupsIdBody.prototype.list = undefined;

/**
 * The date at which the merchant ID group will be take into account. Format YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
AcquirerMerchantIdGroupsIdBody.prototype.startDate = undefined;

/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */
AcquirerMerchantIdGroupsIdBody.OperationEnum = {
  /**
   * value: "add"
   * @const
   */
  add: "add",

  /**
   * value: "remove"
   * @const
   */
  remove: "remove"
};
/**
 * Action to do with merchants id list, Mandatory if merchants list are setted
 * @member {module:model/AcquirerMerchantIdGroupsIdBody.OperationEnum} operation
 */
AcquirerMerchantIdGroupsIdBody.prototype.operation = undefined;
