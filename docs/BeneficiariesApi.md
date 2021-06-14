# Treezor.BeneficiariesApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBeneficiaries**](BeneficiariesApi.md#getBeneficiaries) | **GET** /beneficiaries | search beneficiary bank accounts
[**getBeneficiary**](BeneficiariesApi.md#getBeneficiary) | **GET** /beneficiaries/{id} | get a beneficiary bank account
[**postBeneficiary**](BeneficiariesApi.md#postBeneficiary) | **POST** /beneficiaries | create a beneficiary
[**putBeneficiary**](BeneficiariesApi.md#putBeneficiary) | **PUT** /beneficiaries/{id} | edit a beneficiary

<a name="getBeneficiaries"></a>
# **getBeneficiaries**
> InlineResponse2003 getBeneficiaries(opts)

search beneficiary bank accounts

Get beneficiary bank accounts that match search criteria.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.BeneficiariesApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'fields': ["fields_example"], // [String] | List of the object's properties you want to pick up.
  'filter': "filter_example", // String | You can filter the API response by using filter(s). Filterable fields are :  - id  - tag  - userId  - isActive (1 for yes, 0 for no)  - nickName  - address  - iban (encrypted IBAN)  - IbanInClear  - bic  - sepaCreditorIdentifier  - usableForSct  - createdDate  - modifiedDate  Filters should be separated by a \";\". Example for 3 filters : FILTER1;FILTER2;FILTER3. A single filter has the following syntax : \"fieldName criterion expression\". Where :  - fieldName : the name of a filterable field of this object.   - expression : the values to be included or excluded (see the table below for more information)   - criterion : a filter criterion.  Here are the possible values for criterion :   | Criteria |         Description    |                   Type                   | Expression Example |  |----------|------------------------|------------------------------------------|--------------------|  |     >    |      greater than      |            alphanumeric string           |         100        |  |    >=    | greater or equal than  |            alphanumeric string           |         100        |  |     <    |        less than       |            alphanumeric string           |         100        |  |    <=    |   less or equal than   |            alphanumeric string           |         100        |  |    !=    |      not equal to      |            alphanumeric string           |         100        |  |   like   |          like          |            alphanumeric string           |         100        |  |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |  |    ==    |         equals         |            alphanumeric string           |         100        | 
  'id': 56, // Number | Beneficiary bank account id.
  'userId': 56, // Number | Owner user's id. (deprecated, you must use the parameter filter)
  'iban': "iban_example", // String | Beneficiary bank account IBAN. (deprecated, you must use the parameter filter)
  'bic': "bic_example", // String | Beneficiary bank account BIC. (deprecated, you must use the parameter filter)
  'nickName': "nickName_example", // String | Beneficiary bank account's nick name. (deprecated, you must use the parameter filter)
  'name': "name_example", // String | Beneficiary bank account owner's name. (deprecated, you must use the parameter filter)
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example" // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
};
apiInstance.getBeneficiaries(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **fields** | [**[String]**](String.md)| List of the object&#x27;s properties you want to pick up. | [optional] 
 **filter** | **String**| You can filter the API response by using filter(s). Filterable fields are :  - id  - tag  - userId  - isActive (1 for yes, 0 for no)  - nickName  - address  - iban (encrypted IBAN)  - IbanInClear  - bic  - sepaCreditorIdentifier  - usableForSct  - createdDate  - modifiedDate  Filters should be separated by a \&quot;;\&quot;. Example for 3 filters : FILTER1;FILTER2;FILTER3. A single filter has the following syntax : \&quot;fieldName criterion expression\&quot;. Where :  - fieldName : the name of a filterable field of this object.   - expression : the values to be included or excluded (see the table below for more information)   - criterion : a filter criterion.  Here are the possible values for criterion :   | Criteria |         Description    |                   Type                   | Expression Example |  |----------|------------------------|------------------------------------------|--------------------|  |     &gt;    |      greater than      |            alphanumeric string           |         100        |  |    &gt;&#x3D;    | greater or equal than  |            alphanumeric string           |         100        |  |     &lt;    |        less than       |            alphanumeric string           |         100        |  |    &lt;&#x3D;    |   less or equal than   |            alphanumeric string           |         100        |  |    !&#x3D;    |      not equal to      |            alphanumeric string           |         100        |  |   like   |          like          |            alphanumeric string           |         100        |  |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |  |    &#x3D;&#x3D;    |         equals         |            alphanumeric string           |         100        |  | [optional] 
 **id** | **Number**| Beneficiary bank account id. | [optional] 
 **userId** | **Number**| Owner user&#x27;s id. (deprecated, you must use the parameter filter) | [optional] 
 **iban** | **String**| Beneficiary bank account IBAN. (deprecated, you must use the parameter filter) | [optional] 
 **bic** | **String**| Beneficiary bank account BIC. (deprecated, you must use the parameter filter) | [optional] 
 **nickName** | **String**| Beneficiary bank account&#x27;s nick name. (deprecated, you must use the parameter filter) | [optional] 
 **name** | **String**| Beneficiary bank account owner&#x27;s name. (deprecated, you must use the parameter filter) | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBeneficiary"></a>
# **getBeneficiary**
> InlineResponse2003 getBeneficiary(id, opts)

get a beneficiary bank account

Get a beneficiary bank account from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.BeneficiariesApi();
let id = 789; // Number | Beneficiary Bank Accounts internal id.
let opts = { 
  'fields': ["fields_example"] // [String] | List of the object's properties you want to pick up.
};
apiInstance.getBeneficiary(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Beneficiary Bank Accounts internal id. | 
 **fields** | [**[String]**](String.md)| List of the object&#x27;s properties you want to pick up. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postBeneficiary"></a>
# **postBeneficiary**
> InlineResponse2003 postBeneficiary(opts)

create a beneficiary

Create a new benefeciary bank account in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.BeneficiariesApi();
let opts = { 
  'body': new Treezor.BeneficiariesBody(), // BeneficiariesBody | 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'sddB2bWhitelist': null, // Array | Each unique mandate reference, with its frequency type, must be explicitely allowed when doing B2B Direct Debit. **The entry is not case sensitive.** Furthermore, a mandate not used during more than 36 months will be automatically rejected even if in the white list. 
  'sddCoreBlacklist': ["sddCoreBlacklist_example"] // [String] | Core Direct Debit are accepted by default. If a Core mandate is to be refused on reception, its UMR has to be added to this list. **The entry is not case sensitive.** If wild char * (star) is used instead of a UMR, all Direct Debit from this beneficiary will be refused. 
};
apiInstance.postBeneficiary(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BeneficiariesBody**](BeneficiariesBody.md)|  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **sddB2bWhitelist** | [**Array**](.md)| Each unique mandate reference, with its frequency type, must be explicitely allowed when doing B2B Direct Debit. **The entry is not case sensitive.** Furthermore, a mandate not used during more than 36 months will be automatically rejected even if in the white list.  | [optional] 
 **sddCoreBlacklist** | [**[String]**](String.md)| Core Direct Debit are accepted by default. If a Core mandate is to be refused on reception, its UMR has to be added to this list. **The entry is not case sensitive.** If wild char * (star) is used instead of a UMR, all Direct Debit from this beneficiary will be refused.  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putBeneficiary"></a>
# **putBeneficiary**
> InlineResponse2003 putBeneficiary(id, opts)

edit a beneficiary

Edit a benefeciary bank account in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.BeneficiariesApi();
let id = 56; // Number | Beneficiary's id.
let opts = { 
  'body': new Treezor.BeneficiariesIdBody(), // BeneficiariesIdBody | 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'sddB2bWhitelist': null, // Array | Each unique mandate reference, with its frequency type, must be explicitely allowed when doing B2B Direct Debit. **The entry is not case sensitive.** Furthermore, a mandate not used during more than 36 months will be automatically rejected even if in the white list. 
  'sddCoreBlacklist': ["sddCoreBlacklist_example"] // [String] | Core Direct Debit are accepted by default. If a Core mandate is to be refused on reception, its UMR has to be added to this list. **The entry is not case sensitive.** If wild char * (star) is used instead of a UMR, all Direct Debit from this beneficiary will be refused. 
};
apiInstance.putBeneficiary(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Beneficiary&#x27;s id. | 
 **body** | [**BeneficiariesIdBody**](BeneficiariesIdBody.md)|  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **sddB2bWhitelist** | [**Array**](.md)| Each unique mandate reference, with its frequency type, must be explicitely allowed when doing B2B Direct Debit. **The entry is not case sensitive.** Furthermore, a mandate not used during more than 36 months will be automatically rejected even if in the white list.  | [optional] 
 **sddCoreBlacklist** | [**[String]**](String.md)| Core Direct Debit are accepted by default. If a Core mandate is to be refused on reception, its UMR has to be added to this list. **The entry is not case sensitive.** If wild char * (star) is used instead of a UMR, all Direct Debit from this beneficiary will be refused.  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

