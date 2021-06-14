# Treezor.PayinApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePayin**](PayinApi.md#deletePayin) | **DELETE** /payins/{id} | delete a pay in
[**getPayin**](PayinApi.md#getPayin) | **GET** /payins/{id} | get a pay in
[**getPayins**](PayinApi.md#getPayins) | **GET** /payins | search pay ins
[**postPayin**](PayinApi.md#postPayin) | **POST** /payins | create a pay in

<a name="deletePayin"></a>
# **deletePayin**
> InlineResponse20017 deletePayin(id)

delete a pay in

Deactivate a payin in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayinApi();
let id = 789; // Number | Payin's id.

apiInstance.deletePayin(id, (error, data, response) => {
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
 **id** | **Number**| Payin&#x27;s id. | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayin"></a>
# **getPayin**
> InlineResponse20017 getPayin(id)

get a pay in

Get a payin from the system by its id.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayinApi();
let id = 789; // Number | Payin's id.

apiInstance.getPayin(id, (error, data, response) => {
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
 **id** | **Number**| Payin&#x27;s id. | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayins"></a>
# **getPayins**
> InlineResponse20017 getPayins(opts)

search pay ins

Get payins that match search criteria.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayinApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIP': 56, // Number | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'payinId': 56, // Number | Payin's id.
  'walletId': 56, // Number | Payin's wallet id.
  'payinTag': "payinTag_example", // String | Client custom data.
  'payinStatus': "payinStatus_example", // String | Payins's status.
  'userId': 56, // Number | User's id who performed the operation (debited).
  'userName': "userName_example", // String | User's name who performed the operation (debited).
  'userEmail': "userEmail_example", // String | User's email who performed the operation (debited).
  'beneficiaryUserId': 56, // Number | User's id who received the operation (credited).
  'eventAlias': "eventAlias_example", // String | Wallet eventAlias of the payin (credited wallet).
  'walletTypeId': 56, // Number | Payin's wallet type id.
  'paymentMethodId': "paymentMethodId_example", // String | Payin's payment method id.
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : createdDate. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example" // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
};
apiInstance.getPayins(opts, (error, data, response) => {
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
 **accessUserIP** | **Number**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **payinId** | **Number**| Payin&#x27;s id. | [optional] 
 **walletId** | **Number**| Payin&#x27;s wallet id. | [optional] 
 **payinTag** | **String**| Client custom data. | [optional] 
 **payinStatus** | **String**| Payins&#x27;s status. | [optional] 
 **userId** | **Number**| User&#x27;s id who performed the operation (debited). | [optional] 
 **userName** | **String**| User&#x27;s name who performed the operation (debited). | [optional] 
 **userEmail** | **String**| User&#x27;s email who performed the operation (debited). | [optional] 
 **beneficiaryUserId** | **Number**| User&#x27;s id who received the operation (credited). | [optional] 
 **eventAlias** | **String**| Wallet eventAlias of the payin (credited wallet). | [optional] 
 **walletTypeId** | **Number**| Payin&#x27;s wallet type id. | [optional] 
 **paymentMethodId** | **String**| Payin&#x27;s payment method id. | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : createdDate. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postPayin"></a>
# **postPayin**
> InlineResponse20017 postPayin(walletId, userId, paymentMethodId, amount, currency, opts)

create a pay in

Create a new pay in in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayinApi();
let walletId = 56; // Number | Credited wallet's ID
let userId = 56; // Number | User's id who makes the pay in. NB : this parameter should should not be transmitted in the case of payin of method Sepa Direct Debit Core (21)   OR Cheque (26). It will be set automatically by the system. 
let paymentMethodId = 56; // Number | | Id | Payment by | | ---| --- | | 11 | Card | | 14 | Oneclick card (without payment form) | | 21 | Sepa Direct Debit Core | | 23 | Full Hosted HTML Payment Form. Please note that if you use this paymentMethodId the flieds paymentAcceptedUrl, paymentRefusedUrl, paymentWaitingUrl, paymentCanceledUrl and paymentExceptionUrl are mandatory. CSS of the payment page can be customized | | 24 | IFrame Payment Form. Please note that if you use this paymentMethodId the flieds paymentAcceptedUrl, paymentRefusedUrl, paymentWaitingUrl, paymentCanceledUrl and paymentExceptionUrl are mandatory. CSS of the payment page can be customized| | 25 | Payment made through an SDK - You cannot directly create a payin directly with this method id. The payin will be automatically created by the system. | | 26 | Cheque | 
let amount = 3.4; // Number | Pay in amount.
let currency = "currency_example"; // String | Payin currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). Must be the same as the wallet's. 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'payinTag': "payinTag_example", // String | Client custom data.
  'oneclickcardId': 56, // Number | Oneclick card's id. Mandatory if payment method is 14. Useless otherwise.
  'paymentAcceptedUrl': "paymentAcceptedUrl_example", // String | Url where cardholder is redirected if payment is successful. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
  'paymentWaitingUrl': "paymentWaitingUrl_example", // String | Url where cardholder is redirected to wait payment processing. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
  'paymentRefusedUrl': "paymentRefusedUrl_example", // String | Url where cardholder is redirected if payment is refused. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
  'paymentCanceledUrl': "paymentCanceledUrl_example", // String | Url where cardholder is redirected if payment is canceled. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
  'paymentExceptionUrl': "paymentExceptionUrl_example", // String | Url where cardholder is redirected if the payment process raised an exception. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
  'distributorFee': 3.4, // Number | Distributor fee
  'messageToUser': "messageToUser_example", // String | Message to send to wallet's user. In the case of a Sepa Direct Debit Core payment method this parameter will be the reconciliation information transmitted to the Debtor (ie. Invoice number ...). In this case it cannot be more than 140 characters.
  'language': "language_example", // String | Language for the third party interface.
  'createdIp': "createdIp_example", // String | User's IP address
  'payinDate': "payinDate_example", // String | The date at which the SDD should be presented. This parameter is mandatory when performing a payin of method SDD Core. Format is YYYY-MM-DD The date should follow some requirements (Traget 2 working day) :    - Be a weekday (Monday to Friday)   - January 1st is excluded   - May 1st is excluded   - December 25 is excluded   - December 26th is excluded   - Easter day is excluded   - Easter Monday is excluded   - Good Friday is excluded 
  'mandateId': 56 // Number | The id of the mandate. This parameter is mandatory when performing a payin with method SDD Core.
};
apiInstance.postPayin(walletId, userId, paymentMethodId, amount, currency, opts, (error, data, response) => {
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
 **walletId** | **Number**| Credited wallet&#x27;s ID | 
 **userId** | **Number**| User&#x27;s id who makes the pay in. NB : this parameter should should not be transmitted in the case of payin of method Sepa Direct Debit Core (21)   OR Cheque (26). It will be set automatically by the system.  | 
 **paymentMethodId** | **Number**| | Id | Payment by | | ---| --- | | 11 | Card | | 14 | Oneclick card (without payment form) | | 21 | Sepa Direct Debit Core | | 23 | Full Hosted HTML Payment Form. Please note that if you use this paymentMethodId the flieds paymentAcceptedUrl, paymentRefusedUrl, paymentWaitingUrl, paymentCanceledUrl and paymentExceptionUrl are mandatory. CSS of the payment page can be customized | | 24 | IFrame Payment Form. Please note that if you use this paymentMethodId the flieds paymentAcceptedUrl, paymentRefusedUrl, paymentWaitingUrl, paymentCanceledUrl and paymentExceptionUrl are mandatory. CSS of the payment page can be customized| | 25 | Payment made through an SDK - You cannot directly create a payin directly with this method id. The payin will be automatically created by the system. | | 26 | Cheque |  | 
 **amount** | **Number**| Pay in amount. | 
 **currency** | **String**| Payin currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). Must be the same as the wallet&#x27;s.  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **payinTag** | **String**| Client custom data. | [optional] 
 **oneclickcardId** | **Number**| Oneclick card&#x27;s id. Mandatory if payment method is 14. Useless otherwise. | [optional] 
 **paymentAcceptedUrl** | **String**| Url where cardholder is redirected if payment is successful. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory. | [optional] 
 **paymentWaitingUrl** | **String**| Url where cardholder is redirected to wait payment processing. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory. | [optional] 
 **paymentRefusedUrl** | **String**| Url where cardholder is redirected if payment is refused. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory. | [optional] 
 **paymentCanceledUrl** | **String**| Url where cardholder is redirected if payment is canceled. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory. | [optional] 
 **paymentExceptionUrl** | **String**| Url where cardholder is redirected if the payment process raised an exception. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory. | [optional] 
 **distributorFee** | **Number**| Distributor fee | [optional] 
 **messageToUser** | **String**| Message to send to wallet&#x27;s user. In the case of a Sepa Direct Debit Core payment method this parameter will be the reconciliation information transmitted to the Debtor (ie. Invoice number ...). In this case it cannot be more than 140 characters. | [optional] 
 **language** | **String**| Language for the third party interface. | [optional] 
 **createdIp** | **String**| User&#x27;s IP address | [optional] 
 **payinDate** | **String**| The date at which the SDD should be presented. This parameter is mandatory when performing a payin of method SDD Core. Format is YYYY-MM-DD The date should follow some requirements (Traget 2 working day) :    - Be a weekday (Monday to Friday)   - January 1st is excluded   - May 1st is excluded   - December 25 is excluded   - December 26th is excluded   - Easter day is excluded   - Easter Monday is excluded   - Good Friday is excluded  | [optional] 
 **mandateId** | **Number**| The id of the mandate. This parameter is mandatory when performing a payin with method SDD Core. | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

