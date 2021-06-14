# Treezor.MerchantIdRestrictionGroupsApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMerchantIdRestrictionGroups**](MerchantIdRestrictionGroupsApi.md#deleteMerchantIdRestrictionGroups) | **DELETE** /merchantIdRestrictionGroups/{id} | cancel a merchant id restriction group
[**getMerchantIdRestrictionGroup**](MerchantIdRestrictionGroupsApi.md#getMerchantIdRestrictionGroup) | **GET** /merchantIdRestrictionGroups | search merchant id restriction  groups
[**getMerchantIdRestrictionGroupsId**](MerchantIdRestrictionGroupsApi.md#getMerchantIdRestrictionGroupsId) | **GET** /merchantIdRestrictionGroups/{id} | get a merchant ID restriction group
[**merchantIdRestrictionGroupsIdDeltaUpdatePut**](MerchantIdRestrictionGroupsApi.md#merchantIdRestrictionGroupsIdDeltaUpdatePut) | **PUT** /merchantIdRestrictionGroups/{id}/DeltaUpdate/ | edit the merchant ID list for a restriction group
[**merchantIdRestrictionGroupsIdPresenceCheckGet**](MerchantIdRestrictionGroupsApi.md#merchantIdRestrictionGroupsIdPresenceCheckGet) | **GET** /merchantIdRestrictionGroups/{id}/PresenceCheck/ | check the presence of merchants IDs list for a restriction group
[**postMerchantIdRestrictionGroup**](MerchantIdRestrictionGroupsApi.md#postMerchantIdRestrictionGroup) | **POST** /merchantIdRestrictionGroups | create a merchantIdRestrictionGroup
[**putMerchantIdRestrictionGroups**](MerchantIdRestrictionGroupsApi.md#putMerchantIdRestrictionGroups) | **PUT** /merchantIdRestrictionGroups/{id} | edit a merchant id restriction group (Deprecated)

<a name="deleteMerchantIdRestrictionGroups"></a>
# **deleteMerchantIdRestrictionGroups**
> InlineResponse20016 deleteMerchantIdRestrictionGroups(id, opts)

cancel a merchant id restriction group

Cancel a merchant id restriction group from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let id = 789; // Number | Merchant ID restriction Group internal id.
let opts = { 
  'fields': ["fields_example"] // [String] | List of the object's properties you want to pick up.
};
apiInstance.deleteMerchantIdRestrictionGroups(id, opts, (error, data, response) => {
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
 **id** | **Number**| Merchant ID restriction Group internal id. | 
 **fields** | [**[String]**](String.md)| List of the object&#x27;s properties you want to pick up. | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMerchantIdRestrictionGroup"></a>
# **getMerchantIdRestrictionGroup**
> InlineResponse20016 getMerchantIdRestrictionGroup(opts)

search merchant id restriction  groups

Get merchant ID restriction groups that match search criteria.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'fields': ["fields_example"], // [String] | List of the object's properties you want to pick up.
  'filter': "filter_example", // String | You can filter the API response by using filter(s). Filterable fields are :   - id   - name   - isWhitelist   - status   - startDate   - createdDate    Filters should be separated by a \";\". Example for 3 filters : FILTER1;FILTER2;FILTER3.    A single filter has the following syntax : \"fieldName criterion expression\".    Where :     - fieldName : the name of a filterable field of this object.      - expression : the values to be included or excluded (see the table below for more information)      - criterion : a filter criterion.    Here are the possible values for criterion :    | Criteria |         Description    |                   Type                   | Expression Example |   |----------|------------------------|------------------------------------------|--------------------|   |     >    |      greater than      |            alphanumeric string           |         100        |   |    >=    | greater or equal than  |            alphanumeric string           |         100        |   |     <    |        less than       |            alphanumeric string           |         100        |   |    <=    |   less or equal than   |            alphanumeric string           |         100        |   |    !=    |      not equal to      |            alphanumeric string           |         100        |   |   like   |          like          |            alphanumeric string           |         100        |   |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |   |    ==    |         equals         |            alphanumeric string           |         100        | 
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example" // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
};
apiInstance.getMerchantIdRestrictionGroup(opts, (error, data, response) => {
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
 **filter** | **String**| You can filter the API response by using filter(s). Filterable fields are :   - id   - name   - isWhitelist   - status   - startDate   - createdDate    Filters should be separated by a \&quot;;\&quot;. Example for 3 filters : FILTER1;FILTER2;FILTER3.    A single filter has the following syntax : \&quot;fieldName criterion expression\&quot;.    Where :     - fieldName : the name of a filterable field of this object.      - expression : the values to be included or excluded (see the table below for more information)      - criterion : a filter criterion.    Here are the possible values for criterion :    | Criteria |         Description    |                   Type                   | Expression Example |   |----------|------------------------|------------------------------------------|--------------------|   |     &gt;    |      greater than      |            alphanumeric string           |         100        |   |    &gt;&#x3D;    | greater or equal than  |            alphanumeric string           |         100        |   |     &lt;    |        less than       |            alphanumeric string           |         100        |   |    &lt;&#x3D;    |   less or equal than   |            alphanumeric string           |         100        |   |    !&#x3D;    |      not equal to      |            alphanumeric string           |         100        |   |   like   |          like          |            alphanumeric string           |         100        |   |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |   |    &#x3D;&#x3D;    |         equals         |            alphanumeric string           |         100        |  | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMerchantIdRestrictionGroupsId"></a>
# **getMerchantIdRestrictionGroupsId**
> InlineResponse20016 getMerchantIdRestrictionGroupsId(id, opts)

get a merchant ID restriction group

Get a merchant ID restriction group from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let id = 789; // Number | Merchant ID restriction Group internal id.
let opts = { 
  'fields': ["fields_example"] // [String] | List of the object's properties you want to pick up.
};
apiInstance.getMerchantIdRestrictionGroupsId(id, opts, (error, data, response) => {
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
 **id** | **Number**| Merchant ID restriction Group internal id. | 
 **fields** | [**[String]**](String.md)| List of the object&#x27;s properties you want to pick up. | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="merchantIdRestrictionGroupsIdDeltaUpdatePut"></a>
# **merchantIdRestrictionGroupsIdDeltaUpdatePut**
> InlineResponse20016 merchantIdRestrictionGroupsIdDeltaUpdatePut(id, opts)

edit the merchant ID list for a restriction group

Edit the merchant ID list for a restriction group in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let id = 56; // Number | Merchant ID restriction group's id.
let opts = { 
  'body': new Treezor.IdDeltaUpdateBody(), // IdDeltaUpdateBody | 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.merchantIdRestrictionGroupsIdDeltaUpdatePut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Merchant ID restriction group&#x27;s id. | 
 **body** | [**IdDeltaUpdateBody**](IdDeltaUpdateBody.md)|  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="merchantIdRestrictionGroupsIdPresenceCheckGet"></a>
# **merchantIdRestrictionGroupsIdPresenceCheckGet**
> InlineResponse20016 merchantIdRestrictionGroupsIdPresenceCheckGet(id, opts)

check the presence of merchants IDs list for a restriction group

Check if merchants IDs list for a restriction group in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let id = 56; // Number | Merchant ID restriction group's id.
let opts = { 
  'body': new Treezor.IdPresenceCheckBody(), // IdPresenceCheckBody | 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.merchantIdRestrictionGroupsIdPresenceCheckGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Merchant ID restriction group&#x27;s id. | 
 **body** | [**IdPresenceCheckBody**](IdPresenceCheckBody.md)|  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postMerchantIdRestrictionGroup"></a>
# **postMerchantIdRestrictionGroup**
> InlineResponse20016 postMerchantIdRestrictionGroup(opts)

create a merchantIdRestrictionGroup

Create a new merchant ID restriction group in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let opts = { 
  'body': new Treezor.MerchantIdRestrictionGroupsBody(), // MerchantIdRestrictionGroupsBody | 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.postMerchantIdRestrictionGroup(opts, (error, data, response) => {
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
 **body** | [**MerchantIdRestrictionGroupsBody**](MerchantIdRestrictionGroupsBody.md)|  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putMerchantIdRestrictionGroups"></a>
# **putMerchantIdRestrictionGroups**
> InlineResponse20016 putMerchantIdRestrictionGroups(id, opts)

edit a merchant id restriction group (Deprecated)

Edit a merchant id restriction group in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MerchantIdRestrictionGroupsApi();
let id = 56; // Number | Merchant ID restriction group's id.
let opts = { 
  'body': new Treezor.MerchantIdRestrictionGroupsIdBody(), // MerchantIdRestrictionGroupsIdBody | 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.putMerchantIdRestrictionGroups(id, opts, (error, data, response) => {
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
 **id** | **Number**| Merchant ID restriction group&#x27;s id. | 
 **body** | [**MerchantIdRestrictionGroupsIdBody**](MerchantIdRestrictionGroupsIdBody.md)|  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

