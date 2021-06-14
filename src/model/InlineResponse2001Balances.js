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
 * The InlineResponse2001Balances model module.
 * @module model/InlineResponse2001Balances
 * @version 0.1.1
 */
export class InlineResponse2001Balances {
  /**
   * Constructs a new <code>InlineResponse2001Balances</code>.
   * @alias module:model/InlineResponse2001Balances
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2001Balances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001Balances} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001Balances} The populated <code>InlineResponse2001Balances</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2001Balances();
      if (data.hasOwnProperty('walletId'))
        obj.walletId = ApiClient.convertToType(data['walletId'], 'Number');
      if (data.hasOwnProperty('currentBalance'))
        obj.currentBalance = ApiClient.convertToType(data['currentBalance'], 'Number');
      if (data.hasOwnProperty('authorizations'))
        obj.authorizations = ApiClient.convertToType(data['authorizations'], 'Number');
      if (data.hasOwnProperty('authorizedBalance'))
        obj.authorizedBalance = ApiClient.convertToType(data['authorizedBalance'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('calculationDate'))
        obj.calculationDate = ApiClient.convertToType(data['calculationDate'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} walletId
 */
InlineResponse2001Balances.prototype.walletId = undefined;

/**
 * @member {Number} currentBalance
 */
InlineResponse2001Balances.prototype.currentBalance = undefined;

/**
 * @member {Number} authorizations
 */
InlineResponse2001Balances.prototype.authorizations = undefined;

/**
 * @member {Number} authorizedBalance
 */
InlineResponse2001Balances.prototype.authorizedBalance = undefined;

/**
 * @member {String} currency
 */
InlineResponse2001Balances.prototype.currency = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} calculationDate
 */
InlineResponse2001Balances.prototype.calculationDate = undefined;

