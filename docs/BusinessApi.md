# Treezor.BusinessApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**businessinformationsGet**](BusinessApi.md#businessinformationsGet) | **GET** /businessinformations | get business information
[**businesssearchsGet**](BusinessApi.md#businesssearchsGet) | **GET** /businesssearchs | search businesses

<a name="businessinformationsGet"></a>
# **businessinformationsGet**
> InlineResponse2005 businessinformationsGet(country, opts)

get business information

The get business information endpoint returns all already known business information. End user will have then to verify/correct it. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.BusinessApi();
let country = "country_example"; // String | In which country to search. Format [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'externalId': "externalId_example", // String | External unique business id. As given in businesssearch reponse.
  'registrationNumber': "registrationNumber_example", // String | Unique business registration number.
  'vatNumber': "vatNumber_example" // String | Unique business VAT number.
};
apiInstance.businessinformationsGet(country, opts, (error, data, response) => {
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
 **country** | **String**| In which country to search. Format [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **externalId** | **String**| External unique business id. As given in businesssearch reponse. | [optional] 
 **registrationNumber** | **String**| Unique business registration number. | [optional] 
 **vatNumber** | **String**| Unique business VAT number. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="businesssearchsGet"></a>
# **businesssearchsGet**
> [InlineResponse2004] businesssearchsGet(country, opts)

search businesses

The search endpoint returns some business information. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.BusinessApi();
let country = "country_example"; // String | In which country to search. Format [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'nameExact': "nameExact_example", // String | Business exact name. Exclusive with nameMatchBeginning and nameClosestKeywords. 
  'nameMatchBeginning': "nameMatchBeginning_example", // String | Business names begin with. Exclusive with nameExact and nameClosestKeywords. 
  'nameClosestKeywords': "nameClosestKeywords_example", // String | Business names closed to keywords. Exclusive with nameExact and nameMatchBeginning. 
  'registrationNumber': "registrationNumber_example", // String | Business registration number.
  'vatNumber': "vatNumber_example", // String | Business VAT number.
  'phoneNumber': "phoneNumber_example", // String | Business phone number.
  'addressStreet': "addressStreet_example", // String | Business' street address.
  'addressCity': "addressCity_example", // String | Business' city address.
  'addressPostalCode': "addressPostalCode_example" // String | Business' postal code address.
};
apiInstance.businesssearchsGet(country, opts, (error, data, response) => {
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
 **country** | **String**| In which country to search. Format [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **nameExact** | **String**| Business exact name. Exclusive with nameMatchBeginning and nameClosestKeywords.  | [optional] 
 **nameMatchBeginning** | **String**| Business names begin with. Exclusive with nameExact and nameClosestKeywords.  | [optional] 
 **nameClosestKeywords** | **String**| Business names closed to keywords. Exclusive with nameExact and nameMatchBeginning.  | [optional] 
 **registrationNumber** | **String**| Business registration number. | [optional] 
 **vatNumber** | **String**| Business VAT number. | [optional] 
 **phoneNumber** | **String**| Business phone number. | [optional] 
 **addressStreet** | **String**| Business&#x27; street address. | [optional] 
 **addressCity** | **String**| Business&#x27; city address. | [optional] 
 **addressPostalCode** | **String**| Business&#x27; postal code address. | [optional] 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

