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
import {InlineResponse20026Transfers} from './InlineResponse20026Transfers';

/**
 * The InlineResponse20026 model module.
 * @module model/InlineResponse20026
 * @version 0.1.1
 */
export class InlineResponse20026 {
  /**
   * Constructs a new <code>InlineResponse20026</code>.
   * @alias module:model/InlineResponse20026
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20026} obj Optional instance to populate.
   * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20026();
      if (data.hasOwnProperty('transfers'))
        obj.transfers = ApiClient.convertToType(data['transfers'], [InlineResponse20026Transfers]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20026Transfers>} transfers
 */
InlineResponse20026.prototype.transfers = undefined;

