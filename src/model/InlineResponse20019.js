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
import {InlineResponse20019Payouts} from './InlineResponse20019Payouts';

/**
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version 0.1.1
 */
export class InlineResponse20019 {
  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * @alias module:model/InlineResponse20019
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20019} obj Optional instance to populate.
   * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20019();
      if (data.hasOwnProperty('payouts'))
        obj.payouts = ApiClient.convertToType(data['payouts'], [InlineResponse20019Payouts]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20019Payouts>} payouts
 */
InlineResponse20019.prototype.payouts = undefined;
