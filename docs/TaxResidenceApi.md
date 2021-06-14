# Treezor.TaxResidenceApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxResidencesGet**](TaxResidenceApi.md#taxResidencesGet) | **GET** /taxResidences | search a residence
[**taxResidencesIdDelete**](TaxResidenceApi.md#taxResidencesIdDelete) | **DELETE** /taxResidences/{id} | delete a residence
[**taxResidencesIdGet**](TaxResidenceApi.md#taxResidencesIdGet) | **GET** /taxResidences/{id} | read the informations of a residence
[**taxResidencesIdPut**](TaxResidenceApi.md#taxResidencesIdPut) | **PUT** /taxResidences/{id} | update the residence
[**taxResidencesPost**](TaxResidenceApi.md#taxResidencesPost) | **POST** /taxResidences | create a residence

<a name="taxResidencesGet"></a>
# **taxResidencesGet**
> InlineResponse20022 taxResidencesGet(opts)

search a residence

Search a residence that match search criteria

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TaxResidenceApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication).
  'id': 56, // Number | id of the residence
  'userId': 56 // Number | User's id residence
};
apiInstance.taxResidencesGet(opts, (error, data, response) => {
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
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication). | [optional] 
 **id** | **Number**| id of the residence | [optional] 
 **userId** | **Number**| User&#x27;s id residence | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="taxResidencesIdDelete"></a>
# **taxResidencesIdDelete**
> InlineResponse20022 taxResidencesIdDelete(id, opts)

delete a residence

Delete a residence that match id

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TaxResidenceApi();
let id = 56; // Number | id of the residence
let opts = { 
  'accessSignature': "accessSignature_example" // String | Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication).
};
apiInstance.taxResidencesIdDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| id of the residence | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication). | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="taxResidencesIdGet"></a>
# **taxResidencesIdGet**
> InlineResponse20022 taxResidencesIdGet(id, opts)

read the informations of a residence

Read the informations of a residence that match with id

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TaxResidenceApi();
let id = 56; // Number | id of the residence
let opts = { 
  'accessSignature': "accessSignature_example" // String | Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication).
};
apiInstance.taxResidencesIdGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| id of the residence | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication). | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="taxResidencesIdPut"></a>
# **taxResidencesIdPut**
> InlineResponse20022 taxResidencesIdPut(id, opts)

update the residence

Update a residence already created.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TaxResidenceApi();
let id = 56; // Number | residence id
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication).
  'userId': 56, // Number | User's id residence
  'country': "country_example", // String | country of the resident
  'taxPayerId': "taxPayerId_example", // String | Tax payer's id
  'liabilityWaiver': true // Boolean | Tax declaration
};
apiInstance.taxResidencesIdPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| residence id | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication). | [optional] 
 **userId** | **Number**| User&#x27;s id residence | [optional] 
 **country** | **String**| country of the resident | [optional] 
 **taxPayerId** | **String**| Tax payer&#x27;s id | [optional] 
 **liabilityWaiver** | **Boolean**| Tax declaration | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="taxResidencesPost"></a>
# **taxResidencesPost**
> InlineResponse20022 taxResidencesPost(userId, country, opts)

create a residence

Create a new tax residence.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TaxResidenceApi();
let userId = 56; // Number | User's id residence
let country = "country_example"; // String | country of the resident
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication).
  'taxPayerId': "taxPayerId_example", // String | Tax payer's id
  'liabilityWaiver': true // Boolean | When there is no taxPayerId for a residence, this field shall be set to true.
};
apiInstance.taxResidencesPost(userId, country, opts, (error, data, response) => {
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
 **userId** | **Number**| User&#x27;s id residence | 
 **country** | **String**| country of the resident | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will  contact you if so. More info  [here](https://agent.treezor.com/security-authentication). | [optional] 
 **taxPayerId** | **String**| Tax payer&#x27;s id | [optional] 
 **liabilityWaiver** | **Boolean**| When there is no taxPayerId for a residence, this field shall be set to true. | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

