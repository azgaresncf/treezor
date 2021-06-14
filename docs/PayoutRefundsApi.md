# Treezor.PayoutRefundsApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayoutRefunds**](PayoutRefundsApi.md#getPayoutRefunds) | **GET** /payoutRefunds | search pay outs refund

<a name="getPayoutRefunds"></a>
# **getPayoutRefunds**
> InlineResponse20020 getPayoutRefunds(opts)

search pay outs refund

Get pay out refund that match search criteria.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayoutRefundsApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics).
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics).
  'id': 56, // Number | PayoutRefund id
  'tag': "tag_example", // String | PayoutRefund tag
  'codeStatus': "codeStatus_example", // String | PayoutRefund Code Status
  'informationStatus': "informationStatus_example", // String | PayoutRefund Information Status
  'payoutId': 56, // Number | Payout Id
  'pageNumber': 56 // Number | The page number
};
apiInstance.getPayoutRefunds(opts, (error, data, response) => {
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
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). | [optional] 
 **id** | **Number**| PayoutRefund id | [optional] 
 **tag** | **String**| PayoutRefund tag | [optional] 
 **codeStatus** | **String**| PayoutRefund Code Status | [optional] 
 **informationStatus** | **String**| PayoutRefund Information Status | [optional] 
 **payoutId** | **Number**| Payout Id | [optional] 
 **pageNumber** | **Number**| The page number | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

