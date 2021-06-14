# Treezor.TransactionApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](TransactionApi.md#getTransaction) | **GET** /transactions/{id} | get a transaction
[**getTransactions**](TransactionApi.md#getTransactions) | **GET** /transactions | search transactions

<a name="getTransaction"></a>
# **getTransaction**
> InlineResponse20023 getTransaction(id)

get a transaction

Get a transaction from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TransactionApi();
let id = 789; // Number | Transaction's internal id.

apiInstance.getTransaction(id, (error, data, response) => {
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
 **id** | **Number**| Transaction&#x27;s internal id. | 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactions"></a>
# **getTransactions**
> InlineResponse20023 getTransactions(opts)

search transactions

Get transactions that match search criteria. The request must contains at least one of those inputs walletId, transactionId,  executionDate, valueDate, createdDateFrom , createdDateTo

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.TransactionApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'transactionId': 56, // Number | Transaction's Id
  'transactionType': "transactionType_example", // String | Transaction types. Possible values: * Payin * Payout * Transfer * Transfer Refund * Payin Refund * Discount * Bill 
  'walletId': 56, // Number | Transactions' wallet id.
  'userId': 56, // Number | Transactions' user id.
  'name': "name_example", // String | Transactions' name.
  'description': "description_example", // String | transactions' description.
  'amount': "amount_example", // String | Transactions' amount.
  'currency': "currency_example", // String | Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). 
  'valueDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The value date of the transaction (date applied for the payment) Format : YYYY-MM-DD HH:MM:SS
  'executionDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Date of the execution of the transaction Format : YYYY-MM-DD HH:MM:SS
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.getTransactions(opts, (error, data, response) => {
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
 **transactionId** | **Number**| Transaction&#x27;s Id | [optional] 
 **transactionType** | **String**| Transaction types. Possible values: * Payin * Payout * Transfer * Transfer Refund * Payin Refund * Discount * Bill  | [optional] 
 **walletId** | **Number**| Transactions&#x27; wallet id. | [optional] 
 **userId** | **Number**| Transactions&#x27; user id. | [optional] 
 **name** | **String**| Transactions&#x27; name. | [optional] 
 **description** | **String**| transactions&#x27; description. | [optional] 
 **amount** | **String**| Transactions&#x27; amount. | [optional] 
 **currency** | **String**| Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217).  | [optional] 
 **valueDate** | **Date**| The value date of the transaction (date applied for the payment) Format : YYYY-MM-DD HH:MM:SS | [optional] 
 **executionDate** | **Date**| Date of the execution of the transaction Format : YYYY-MM-DD HH:MM:SS | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

