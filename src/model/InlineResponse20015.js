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
import {InlineResponse20015MccRestrictionGroups} from './InlineResponse20015MccRestrictionGroups';

/**
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version 0.1.1
 */
export class InlineResponse20015 {
  /**
   * Constructs a new <code>InlineResponse20015</code>.
   * @alias module:model/InlineResponse20015
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20015} obj Optional instance to populate.
   * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20015();
      if (data.hasOwnProperty('mccRestrictionGroups'))
        obj.mccRestrictionGroups = ApiClient.convertToType(data['mccRestrictionGroups'], [InlineResponse20015MccRestrictionGroups]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20015MccRestrictionGroups>} mccRestrictionGroups
 */
InlineResponse20015.prototype.mccRestrictionGroups = undefined;

