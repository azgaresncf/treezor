# Treezor.WalletApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWallet**](WalletApi.md#deleteWallet) | **DELETE** /wallets/{id} | delete a wallet
[**getWallet**](WalletApi.md#getWallet) | **GET** /wallets/{id} | get a wallet
[**getWallets**](WalletApi.md#getWallets) | **GET** /wallets | search wallets
[**postWallets**](WalletApi.md#postWallets) | **POST** /wallets | create a wallet
[**putWallet**](WalletApi.md#putWallet) | **PUT** /wallets/{id} | update a wallet

<a name="deleteWallet"></a>
# **deleteWallet**
> InlineResponse20029 deleteWallet(id, origin, opts)

delete a wallet

Change wallet&#x27;s status to **CANCELED**.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.WalletApi();
let id = 56; // Number | Wallet's id
let origin = "origin_example"; // String | Request's origin. Possible values are: * OPERATOR * USER 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.deleteWallet(id, origin, opts, (error, data, response) => {
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
 **id** | **Number**| Wallet&#x27;s id | 
 **origin** | **String**| Request&#x27;s origin. Possible values are: * OPERATOR * USER  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWallet"></a>
# **getWallet**
> InlineResponse20029 getWallet(id, opts)

get a wallet

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.WalletApi();
let id = 789; // Number | Object internal id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.getWallet(id, opts, (error, data, response) => {
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
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWallets"></a>
# **getWallets**
> InlineResponse20029 getWallets(opts)

search wallets

Get wallets from the system that match the search criteria. The request must contains at least one of those inputs : walletId, eventAlias, userId, walletTypeId

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.WalletApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIP': 56, // Number | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'walletId': 56, // Number | Wallet's unique id.
  'walletStatus': "walletStatus_example", // String | Wallet's status:  * **validated**: Wallet is active. It is possible to deposit to or retrieve money from the wallet.  * **cancelled**: Wallet is closed. No action possible, there is no money in the wallet, it was closed by an operator or by the user.  * **pending**: Wallet being validated (e.g. suspected fraud, late submission of documents' validation ... KYC ). In this case, it is not possible to use the wallet for transactions.
  'userId': 56, // Number | Wallet owner's id.
  'parentUserId': 56, // Number | Parent user id of the wallet owner
  'walletTag': "walletTag_example", // String | Custom data.
  'walletTypeId': 56, // Number | Wallet type id. The following values are defined:  | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) | 
  'eventAlias': "eventAlias_example", // String | Short url wallet name. It's automatically generated by the system, but it could be modified and customised by the user. For example: www.domain.com/wallet=mywedding 
  'eventPayinStartDate': new Date("2013-10-20T19:20:30+01:00"), // Date |  Wallet activation date. The date from which you can deposit money on the wallet. Format : YYYY-MM-DD HH:MM:SS
  'eventPayinEndDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Deadline to money deposit on the wallet. Format : YYYY-MM-DD HH:MM:SS 
  'tariffId': 56, // Number | Wallet pricing id.
  'payinCount': 56, // Number | Number of payin done on the wallet.
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.getWallets(opts, (error, data, response) => {
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
 **walletId** | **Number**| Wallet&#x27;s unique id. | [optional] 
 **walletStatus** | **String**| Wallet&#x27;s status:  * **validated**: Wallet is active. It is possible to deposit to or retrieve money from the wallet.  * **cancelled**: Wallet is closed. No action possible, there is no money in the wallet, it was closed by an operator or by the user.  * **pending**: Wallet being validated (e.g. suspected fraud, late submission of documents&#x27; validation ... KYC ). In this case, it is not possible to use the wallet for transactions. | [optional] 
 **userId** | **Number**| Wallet owner&#x27;s id. | [optional] 
 **parentUserId** | **Number**| Parent user id of the wallet owner | [optional] 
 **walletTag** | **String**| Custom data. | [optional] 
 **walletTypeId** | **Number**| Wallet type id. The following values are defined:  | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) |  | [optional] 
 **eventAlias** | **String**| Short url wallet name. It&#x27;s automatically generated by the system, but it could be modified and customised by the user. For example: www.domain.com/wallet&#x3D;mywedding  | [optional] 
 **eventPayinStartDate** | **Date**|  Wallet activation date. The date from which you can deposit money on the wallet. Format : YYYY-MM-DD HH:MM:SS | [optional] 
 **eventPayinEndDate** | **Date**| Deadline to money deposit on the wallet. Format : YYYY-MM-DD HH:MM:SS  | [optional] 
 **tariffId** | **Number**| Wallet pricing id. | [optional] 
 **payinCount** | **Number**| Number of payin done on the wallet. | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postWallets"></a>
# **postWallets**
> InlineResponse20029 postWallets(walletTypeId, tariffId, userId, currency, eventName, opts)

create a wallet

Create a new wallet in the system..

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.WalletApi();
let walletTypeId = 56; // Number | Wallet type id. The following values are defined:  | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) | 
let tariffId = 56; // Number | Wallet pricing id.
let userId = 56; // Number | Wallet owner's id.
let currency = "currency_example"; // String | The currency that will be used for all wallet money transactions format : ISO 4217 3-letter code for each currency : Euro = EUR ; US Dollar = USD Ã¢â‚¬Â¦ Default currency will be same as the wallet 
let eventName = "eventName_example"; // String | Event name that will be used as wallet name. For example, in a wedding list: Wedding of X and Y 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIP': 56, // Number | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'jointUserId': 56, // Number | Wallet co-owner's id. This user will not be allowed to collect the money from the wallet. 
  'walletTag': "walletTag_example", // String | Custom data
  'eventAlias': "eventAlias_example", // String | Short url wallet name. It's automatically generated by the system, but it could be modified and customised by the user. For example: www.domain.com/wallet=mywedding. Please note that the eventAlias must be unique. 
  'eventDate': new Date("2013-10-20"), // Date | Wallet event date. Format : YYYY-MM-DD. Default: Created date + 7 days. 
  'eventMessage': "eventMessage_example", // String | It can be a description of the wallet.
  'eventPayinStartDate': new Date("2013-10-20"), // Date |  DEPRECATED. Wallet activation date. The date from which you can deposit money on the wallet. Format : YYYY-MM-DD. If null, the default date will be the created date of the wallet. It will be deleted soon.
  'eventPayinEndDate': new Date("2013-10-20") // Date | DEPRECATED. Deadline to money deposit on the wallet. Format : YYYY-MM-DD. If null, the money can be deposited indefinitely on the wallet. It will be deleted soon. 
};
apiInstance.postWallets(walletTypeId, tariffId, userId, currency, eventName, opts, (error, data, response) => {
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
 **walletTypeId** | **Number**| Wallet type id. The following values are defined:  | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) |  | 
 **tariffId** | **Number**| Wallet pricing id. | 
 **userId** | **Number**| Wallet owner&#x27;s id. | 
 **currency** | **String**| The currency that will be used for all wallet money transactions format : ISO 4217 3-letter code for each currency : Euro &#x3D; EUR ; US Dollar &#x3D; USD Ã¢â‚¬Â¦ Default currency will be same as the wallet  | 
 **eventName** | **String**| Event name that will be used as wallet name. For example, in a wedding list: Wedding of X and Y  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIP** | **Number**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **jointUserId** | **Number**| Wallet co-owner&#x27;s id. This user will not be allowed to collect the money from the wallet.  | [optional] 
 **walletTag** | **String**| Custom data | [optional] 
 **eventAlias** | **String**| Short url wallet name. It&#x27;s automatically generated by the system, but it could be modified and customised by the user. For example: www.domain.com/wallet&#x3D;mywedding. Please note that the eventAlias must be unique.  | [optional] 
 **eventDate** | **Date**| Wallet event date. Format : YYYY-MM-DD. Default: Created date + 7 days.  | [optional] 
 **eventMessage** | **String**| It can be a description of the wallet. | [optional] 
 **eventPayinStartDate** | **Date**|  DEPRECATED. Wallet activation date. The date from which you can deposit money on the wallet. Format : YYYY-MM-DD. If null, the default date will be the created date of the wallet. It will be deleted soon. | [optional] 
 **eventPayinEndDate** | **Date**| DEPRECATED. Deadline to money deposit on the wallet. Format : YYYY-MM-DD. If null, the money can be deposited indefinitely on the wallet. It will be deleted soon.  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putWallet"></a>
# **putWallet**
> InlineResponse20029 putWallet(id, opts)

update a wallet

Modifiy wallet information

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.WalletApi();
let id = 789; // Number | Object internal id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'walletTypeId': "walletTypeId_example", // String | Change wallet type id
  'eventName': "eventName_example", // String | Change event name
  'eventAlias': "eventAlias_example", // String | Change event alias. Please note that the eventAlias must be unique.
  'eventDate': "eventDate_example", // String | Change event date
  'eventMessage': "eventMessage_example", // String | Change event message
  'eventPayinStartDate': "eventPayinStartDate_example", // String | DEPRECATED. Change event payin starting date. It will be deleted soon.
  'eventPayinEndDate': "eventPayinEndDate_example", // String | DEPRECATED. Change event payin end date.  It will be deleted soon.
  'urlImage': "urlImage_example", // String | Change URL image
  'imageName': "imageName_example", // String | Change image name
  'tariffId': "tariffId_example" // String | Change tariff id
};
apiInstance.putWallet(id, opts, (error, data, response) => {
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
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **walletTypeId** | **String**| Change wallet type id | [optional] 
 **eventName** | **String**| Change event name | [optional] 
 **eventAlias** | **String**| Change event alias. Please note that the eventAlias must be unique. | [optional] 
 **eventDate** | **String**| Change event date | [optional] 
 **eventMessage** | **String**| Change event message | [optional] 
 **eventPayinStartDate** | **String**| DEPRECATED. Change event payin starting date. It will be deleted soon. | [optional] 
 **eventPayinEndDate** | **String**| DEPRECATED. Change event payin end date.  It will be deleted soon. | [optional] 
 **urlImage** | **String**| Change URL image | [optional] 
 **imageName** | **String**| Change image name | [optional] 
 **tariffId** | **String**| Change tariff id | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

