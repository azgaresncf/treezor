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
import {InlineResponse20012Documents} from './InlineResponse20012Documents';

/**
 * The InlineResponse20012 model module.
 * @module model/InlineResponse20012
 * @version 0.1.1
 */
export class InlineResponse20012 {
  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * @alias module:model/InlineResponse20012
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20012} obj Optional instance to populate.
   * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20012();
      if (data.hasOwnProperty('documents'))
        obj.documents = ApiClient.convertToType(data['documents'], [InlineResponse20012Documents]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20012Documents>} documents
 */
InlineResponse20012.prototype.documents = undefined;

