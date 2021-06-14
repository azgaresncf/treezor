# Treezor.RecallRApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecallR**](RecallRApi.md#getRecallR) | **GET** /recallRs | get recalls or RRO
[**getRecallRId**](RecallRApi.md#getRecallRId) | **GET** /recallRs/{id} | get recalls or RRO
[**putRecallR**](RecallRApi.md#putRecallR) | **PUT** /recallRs/{id}/response/ | Consent on a recall or RRO

<a name="getRecallR"></a>
# **getRecallR**
> InlineResponse20021 getRecallR(opts)

get recalls or RRO

get recalls or RRO

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.RecallRApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'pageCount': 56, // Number | Maximum number of elements in on call. By default 50. 
  'pageNumber': 56, // Number | Page of asked resulset. By default it is the first page. 
  'filter': "filter_example" // String | List of available filters: - id - recallRSepaMessageId - cxlId - statusId - reasonCode - clientId - userId - walletId - sctrId - receivedDate - frozenWalletFollowingRecallr - createdDate - inError 
};
apiInstance.getRecallR(opts, (error, data, response) => {
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
 **pageCount** | **Number**| Maximum number of elements in on call. By default 50.  | [optional] 
 **pageNumber** | **Number**| Page of asked resulset. By default it is the first page.  | [optional] 
 **filter** | **String**| List of available filters: - id - recallRSepaMessageId - cxlId - statusId - reasonCode - clientId - userId - walletId - sctrId - receivedDate - frozenWalletFollowingRecallr - createdDate - inError  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecallRId"></a>
# **getRecallRId**
> InlineResponse20021 getRecallRId(opts)

get recalls or RRO

get recalls or RRO

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.RecallRApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'pageCount': 56, // Number | Maximum number of elements in on call. By default 50. 
  'pageNumber': 56 // Number | Page of asked resulset. By default it is the first page. 
};
apiInstance.getRecallRId(opts, (error, data, response) => {
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
 **pageCount** | **Number**| Maximum number of elements in on call. By default 50.  | [optional] 
 **pageNumber** | **Number**| Page of asked resulset. By default it is the first page.  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putRecallR"></a>
# **putRecallR**
> InlineResponse20021 putRecallR(id, responseType, opts)

Consent on a recall or RRO

Consent on a recall or RRO

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.RecallRApi();
let id = 789; // Number | Object internal id.
let responseType = 56; // Number | Response to the received recall request. If 1, the recall request is accepted and it will generate a positive response to the originating bank. If 0, the recall request is refused. It will generate a negative response to the originating bank. 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'negativeResponseReasonCode': "negativeResponseReasonCode_example", // String | Reason of negative response type. Required if responseType is false. This field is non case sensitive. 
  'negativeResponseAdditionalInformation': "negativeResponseAdditionalInformation_example", // String | Free field to add more informations of a negative response type. 
  'responseComment': "responseComment_example" // String | Free field to add more informations regardless the response type. 
};
apiInstance.putRecallR(id, responseType, opts, (error, data, response) => {
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
 **id** | **Number**| Object internal id. | 
 **responseType** | **Number**| Response to the received recall request. If 1, the recall request is accepted and it will generate a positive response to the originating bank. If 0, the recall request is refused. It will generate a negative response to the originating bank.  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **negativeResponseReasonCode** | **String**| Reason of negative response type. Required if responseType is false. This field is non case sensitive.  | [optional] 
 **negativeResponseAdditionalInformation** | **String**| Free field to add more informations of a negative response type.  | [optional] 
 **responseComment** | **String**| Free field to add more informations regardless the response type.  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

