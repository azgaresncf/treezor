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
import {InlineResponse20018Payinrefunds} from './InlineResponse20018Payinrefunds';

/**
 * The InlineResponse20018 model module.
 * @module model/InlineResponse20018
 * @version 0.1.1
 */
export class InlineResponse20018 {
  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * @alias module:model/InlineResponse20018
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20018} obj Optional instance to populate.
   * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20018();
      if (data.hasOwnProperty('payinrefunds'))
        obj.payinrefunds = ApiClient.convertToType(data['payinrefunds'], [InlineResponse20018Payinrefunds]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20018Payinrefunds>} payinrefunds
 */
InlineResponse20018.prototype.payinrefunds = undefined;

