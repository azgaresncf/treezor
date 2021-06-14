# Treezor.CardDigitalizationsApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cardDigitalizationsId**](CardDigitalizationsApi.md#cardDigitalizationsId) | **GET** /cardDigitalizations/{id} | Get a card digitalizations based on its internal id
[**deletecardDigitalizationsId**](CardDigitalizationsApi.md#deletecardDigitalizationsId) | **DELETE** /cardDigitalizations/{id} | Deletes a payment Token
[**putcardDigitalizationsId**](CardDigitalizationsApi.md#putcardDigitalizationsId) | **PUT** /cardDigitalizations/{id} | Update the status of a payment Token
[**readcardDigitalizations**](CardDigitalizationsApi.md#readcardDigitalizations) | **GET** /cardDigitalizations | search for card digitalizations

<a name="cardDigitalizationsId"></a>
# **cardDigitalizationsId**
> InlineResponse2008 cardDigitalizationsId(id, opts)

Get a card digitalizations based on its internal id

Get a card digitalizations based on its internal id

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardDigitalizationsApi();
let id = 789; // Number | Card digitalization internal id.
let opts = { 
  'fields': "fields_example" // String | fields to output separated by commas. Possible fields are id, externalId, cardId, detailsFromGPS, status, createdDate, modifiedDate
};
apiInstance.cardDigitalizationsId(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card digitalization internal id. | 
 **fields** | **String**| fields to output separated by commas. Possible fields are id, externalId, cardId, detailsFromGPS, status, createdDate, modifiedDate | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletecardDigitalizationsId"></a>
# **deletecardDigitalizationsId**
> InlineResponse2008 deletecardDigitalizationsId(id, reasonCode)

Deletes a payment Token

Deletes a payment Token

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardDigitalizationsApi();
let id = 789; // Number | Card digitalization internal id.
let reasonCode = "reasonCode_example"; // String | The reason code for the action. Possible values are :  | Reason code | Description | | ---- | ----------- | | L | Cardholder confirmed token device lost | | S | Cardholder confirmed token device stolen | | F | Issuer or cardholder confirmed fraudulent token transactions (Deprecated) | | T | Issuer or cardholder confirmed fraudulent token transactions | | C | Account closed | | Z | Other | 

apiInstance.deletecardDigitalizationsId(id, reasonCode, (error, data, response) => {
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
 **id** | **Number**| Card digitalization internal id. | 
 **reasonCode** | **String**| The reason code for the action. Possible values are :  | Reason code | Description | | ---- | ----------- | | L | Cardholder confirmed token device lost | | S | Cardholder confirmed token device stolen | | F | Issuer or cardholder confirmed fraudulent token transactions (Deprecated) | | T | Issuer or cardholder confirmed fraudulent token transactions | | C | Account closed | | Z | Other |  | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putcardDigitalizationsId"></a>
# **putcardDigitalizationsId**
> InlineResponse2008 putcardDigitalizationsId(id, status, reasonCode)

Update the status of a payment Token

Update the status of a payment Token

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardDigitalizationsApi();
let id = 789; // Number | Card digitalization internal id.
let status = "status_example"; // String | The new status for the payment Token. Possible values are :  | Status | Description | | ---- | ----------- | | unsuspend | Unsuspend | | suspend | Suspend | 
let reasonCode = "reasonCode_example"; // String | The reason code for the action. Possible values are : - For a suspension :  | Reason code | Description | | ---- | ----------- | | L | Cardholder confirmed token device lost | | S | Cardholder confirmed token device stolen | | T | Issuer or cardholder confirmed fraudulent token transactions | | Z | Other |  - For an unsuspension :  | Reason code | Description | | ---- | ----------- | | F | Cardholder reported token device found or not stolen | | T | Issuer or cardholder confirmed no fraudulent token transactions | | Z | Other | 

apiInstance.putcardDigitalizationsId(id, status, reasonCode, (error, data, response) => {
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
 **id** | **Number**| Card digitalization internal id. | 
 **status** | **String**| The new status for the payment Token. Possible values are :  | Status | Description | | ---- | ----------- | | unsuspend | Unsuspend | | suspend | Suspend |  | 
 **reasonCode** | **String**| The reason code for the action. Possible values are : - For a suspension :  | Reason code | Description | | ---- | ----------- | | L | Cardholder confirmed token device lost | | S | Cardholder confirmed token device stolen | | T | Issuer or cardholder confirmed fraudulent token transactions | | Z | Other |  - For an unsuspension :  | Reason code | Description | | ---- | ----------- | | F | Cardholder reported token device found or not stolen | | T | Issuer or cardholder confirmed no fraudulent token transactions | | Z | Other |  | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readcardDigitalizations"></a>
# **readcardDigitalizations**
> InlineResponse2008 readcardDigitalizations(opts)

search for card digitalizations

Search for card digitalizations.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardDigitalizationsApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'filter': "filter_example", // String | Filterable fields are : - id - externalId - cardId - status - detailsFromGPS - createdDate - modifiedDate  More info [here](https://agent.treezor.com/filterv2). 
  'fields': "fields_example" // String | fields to output separated by commas. Possible fields are id, externalId, cardId, detailsFromGPS, status, createdDate, modifiedDate
};
apiInstance.readcardDigitalizations(opts, (error, data, response) => {
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
 **filter** | **String**| Filterable fields are : - id - externalId - cardId - status - detailsFromGPS - createdDate - modifiedDate  More info [here](https://agent.treezor.com/filterv2).  | [optional] 
 **fields** | **String**| fields to output separated by commas. Possible fields are id, externalId, cardId, detailsFromGPS, status, createdDate, modifiedDate | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

