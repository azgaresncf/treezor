# Treezor.PayoutApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePayout**](PayoutApi.md#deletePayout) | **DELETE** /payouts/{id} | cancel a payout
[**getPayout**](PayoutApi.md#getPayout) | **GET** /payouts/{id} | get a payout
[**getPayouts**](PayoutApi.md#getPayouts) | **GET** /payouts | search payout(s)
[**postPayout**](PayoutApi.md#postPayout) | **POST** /payouts | create a pay out

<a name="deletePayout"></a>
# **deletePayout**
> InlineResponse20019 deletePayout(id)

cancel a payout

Change pay out status to CANCELED. A VALIDATED pay out can&#x27;t be canceled.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayoutApi();
let id = 789; // Number | Payouts internal id.

apiInstance.deletePayout(id, (error, data, response) => {
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
 **id** | **Number**| Payouts internal id. | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayout"></a>
# **getPayout**
> InlineResponse20019 getPayout(id)

get a payout

Get a pay out from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayoutApi();
let id = 789; // Number | Payouts internal id.

apiInstance.getPayout(id, (error, data, response) => {
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
 **id** | **Number**| Payouts internal id. | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayouts"></a>
# **getPayouts**
> InlineResponse20019 getPayouts(opts)

search payout(s)

Get payout(s) that match search criteria. The request must contains at least one of those inputs  payoutId, bankaccountId, beneficiaryId, payoutTag

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayoutApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'payoutId': 56, // Number | Payout's Id
  'payoutTag': "payoutTag_example", // String | Custom data.
  'payoutStatus': "payoutStatus_example", // String | pay out status; Possible values: * CANCELED * PENDING * VALIDATED 
  'payoutTypeId': 56, // Number | Pay out type's id :  | ID | Description | |-----|-----| | 1 | Credit Transfer | | 2 | Direct Debit | 
  'walletId': 56, // Number | Pay out wallet's id.
  'userId': 56, // Number | Pay out user's id.
  'payoutDate': new Date("2013-10-20T19:20:30+01:00"), // Date | pay out execution date. Format: YYYY-MM-DD HH:MM:SS' 
  'bankaccountId': 56, // Number | Pay out bank account id.
  'beneficiaryId': 56, // Number | Pay out beneficiary id.
  'amount': "amount_example", // String | Pay out amount.
  'currency': "currency_example", // String | Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). 
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.getPayouts(opts, (error, data, response) => {
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
 **payoutId** | **Number**| Payout&#x27;s Id | [optional] 
 **payoutTag** | **String**| Custom data. | [optional] 
 **payoutStatus** | **String**| pay out status; Possible values: * CANCELED * PENDING * VALIDATED  | [optional] 
 **payoutTypeId** | **Number**| Pay out type&#x27;s id :  | ID | Description | |-----|-----| | 1 | Credit Transfer | | 2 | Direct Debit |  | [optional] 
 **walletId** | **Number**| Pay out wallet&#x27;s id. | [optional] 
 **userId** | **Number**| Pay out user&#x27;s id. | [optional] 
 **payoutDate** | **Date**| pay out execution date. Format: YYYY-MM-DD HH:MM:SS&#x27;  | [optional] 
 **bankaccountId** | **Number**| Pay out bank account id. | [optional] 
 **beneficiaryId** | **Number**| Pay out beneficiary id. | [optional] 
 **amount** | **String**| Pay out amount. | [optional] 
 **currency** | **String**| Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217).  | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postPayout"></a>
# **postPayout**
> InlineResponse20019 postPayout(walletId, amount, currency, opts)

create a pay out

Create a new pay out in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.PayoutApi();
let walletId = 56; // Number | Pay out wallet id.
let amount = 3.4; // Number | Pay out amount.
let currency = "currency_example"; // String | Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'payoutTag': "payoutTag_example", // String | Custom data.
  'bankaccountId': 56, // Number | Pay out bank account's id. Mandatory id beneficiaryId is not provided. If bankaccountId and beneficiaryId are both provided, the beneficiaryId will be used.
  'beneficiaryId': 56, // Number | Pay out beneficiary's id. Mandatory id bankaccountId is not provided. If bankaccountId and beneficiaryId are both provided, the beneficiaryId will be used.
  'label': "label_example", // String | Pay out label that will be displayed in the receiver's account (140 chars max).
  'supportingFileLink': "supportingFileLink_example" // String | Support file link
};
apiInstance.postPayout(walletId, amount, currency, opts, (error, data, response) => {
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
 **walletId** | **Number**| Pay out wallet id. | 
 **amount** | **Number**| Pay out amount. | 
 **currency** | **String**| Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217).  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **payoutTag** | **String**| Custom data. | [optional] 
 **bankaccountId** | **Number**| Pay out bank account&#x27;s id. Mandatory id beneficiaryId is not provided. If bankaccountId and beneficiaryId are both provided, the beneficiaryId will be used. | [optional] 
 **beneficiaryId** | **Number**| Pay out beneficiary&#x27;s id. Mandatory id bankaccountId is not provided. If bankaccountId and beneficiaryId are both provided, the beneficiaryId will be used. | [optional] 
 **label** | **String**| Pay out label that will be displayed in the receiver&#x27;s account (140 chars max). | [optional] 
 **supportingFileLink** | **String**| Support file link | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

