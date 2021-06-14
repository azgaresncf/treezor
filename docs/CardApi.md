# Treezor.CardApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cardimagesGet**](CardApi.md#cardimagesGet) | **GET** /cardimages | get a card image
[**cardsCreateVirtualPost**](CardApi.md#cardsCreateVirtualPost) | **POST** /cards/CreateVirtual | create a virtual card
[**cardsGet**](CardApi.md#cardsGet) | **GET** /cards | search cards
[**cardsIdActivatePut**](CardApi.md#cardsIdActivatePut) | **PUT** /cards/{id}/Activate/ | activate a card
[**cardsIdChangePINPut**](CardApi.md#cardsIdChangePINPut) | **PUT** /cards/{id}/ChangePIN/ | change card&#x27;s PIN
[**cardsIdConvertVirtualPut**](CardApi.md#cardsIdConvertVirtualPut) | **PUT** /cards/{id}/ConvertVirtual/ | convert card to virtual
[**cardsIdGet**](CardApi.md#cardsIdGet) | **GET** /cards/{id} | get a card
[**cardsIdLimitsPut**](CardApi.md#cardsIdLimitsPut) | **PUT** /cards/{id}/Limits/ | update card&#x27;s limits
[**cardsIdLockUnlockPut**](CardApi.md#cardsIdLockUnlockPut) | **PUT** /cards/{id}/LockUnlock/ | update card&#x27;s blocking status
[**cardsIdOptionsPut**](CardApi.md#cardsIdOptionsPut) | **PUT** /cards/{id}/Options/ | update card&#x27;s options
[**cardsIdPut**](CardApi.md#cardsIdPut) | **PUT** /cards/{id} | update card informations
[**cardsIdRegeneratePut**](CardApi.md#cardsIdRegeneratePut) | **PUT** /cards/{id}/Regenerate/ | regenerate card
[**cardsIdSetPINPut**](CardApi.md#cardsIdSetPINPut) | **PUT** /cards/{id}/setPIN/ | set card&#x27;s PIN
[**cardsIdUnblockPINPut**](CardApi.md#cardsIdUnblockPINPut) | **PUT** /cards/{id}/UnblockPIN/ | unblock card&#x27;s PIN
[**cardsRegister3DSPost**](CardApi.md#cardsRegister3DSPost) | **POST** /cards/Register3DS | Register 3D secure
[**cardsRequestPhysicalPost**](CardApi.md#cardsRequestPhysicalPost) | **POST** /cards/RequestPhysical | create a physical card

<a name="cardimagesGet"></a>
# **cardimagesGet**
> InlineResponse2007 cardimagesGet(cardId, opts)

get a card image

Return virtual card&#x27;s image

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let cardId = 56; // Number | Vitual card's id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardimagesGet(cardId, opts, (error, data, response) => {
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
 **cardId** | **Number**| Vitual card&#x27;s id. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsCreateVirtualPost"></a>
# **cardsCreateVirtualPost**
> InlineResponse2006 cardsCreateVirtualPost(userId, walletId, permsGroup, cardPrint, opts)

create a virtual card

Create a new virtual card. To use a card you will need to activate it (/cards/{id}/Activate/).

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let userId = 56; // Number | User's id of cardholder
let walletId = 56; // Number | Wallet's Id in which to create the card
let permsGroup = "permsGroup_example"; // String | Permissions group of the card. There is 4 usages which create 16 possible groups:  | group | NFC | ATM | On-line | Foreign | |-----|-----|-----|-----|------| |TRZ-CU-001|KO|KO|KO|KO| |TRZ-CU-002|KO|KO|KO|OK| |TRZ-CU-003|KO|KO|OK|KO| |TRZ-CU-004|KO|KO|OK|OK| |TRZ-CU-005|KO|OK|KO|KO| |TRZ-CU-006|KO|OK|KO|OK| |TRZ-CU-007|KO|OK|OK|KO| |TRZ-CU-008|KO|OK|OK|OK| |TRZ-CU-009|OK|KO|KO|KO| |TRZ-CU-010|OK|KO|KO|OK| |TRZ-CU-011|OK|KO|OK|KO| |TRZ-CU-012|OK|KO|OK|OK| |TRZ-CU-013|OK|OK|KO|KO| |TRZ-CU-014|OK|OK|KO|OK| |TRZ-CU-015|OK|OK|OK|KO| |TRZ-CU-016|OK|OK|OK|OK| 
let cardPrint = "cardPrint_example"; // String | Card appareance code, also used to choose the program ID of the card
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'cardTag': "cardTag_example", // String | Custom field
  'batchDeliveryId': 56, // Number | Batch regroupement identifier (must be between 1 and 238327) NOT YET OPERATIONAL
  'limitAtmYear': 56, // Number | ATM operations limit for a sliding year. No default value.
  'limitAtmMonth': 56, // Number | ATM operations limit for a sliding month. No default value.
  'limitAtmWeek': 56, // Number | ATM operations limit for a sliding week. Default value 2000â‚¬.
  'limitAtmDay': 56, // Number | ATM operations limit for a single day. Default value 1000â‚¬.
  'limitAtmAll': 56, // Number | ATM operations limit from beginning. No default value.
  'limitPaymentYear': 56, // Number | POS operations limit for a sliding year. No default value.
  'limitPaymentMonth': 56, // Number | POS operations limit for a sliding month. No default value.
  'limitPaymentWeek': 56, // Number | POS operations limit for a sliding week. Default value 3000â‚¬.
  'limitPaymentDay': 56, // Number | POS operations limit for a single day. Default value 2000â‚¬.
  'limitPaymentAll': 56, // Number | POS operations limit from beginning. No default value.
  'paymentDailyLimit': 3.4, // Number | POS operations limit for a single day including cents. The decimal delimiter must be \".\". No default value.
  'pin': "pin_example", // String | Card's PIN code value.
  'anonymous': 56, // Number | Card is anonymous. If value is 1 there will be no embossed name.
  'sendToParent': 56, // Number | If you put the value 1 the delivery address will be the parent user's.
  'mccRestrictionGroupId': 56, // Number | mccRestrictionGroupId you want to apply
  'merchantRestrictionGroupId': 56, // Number | merchantRestrictionGroupId you want to apply
  'countryRestrictionGroupId': 56, // Number | countryRestrictionGroupId you want to apply
  'embossLegalName': false, // Boolean | Set true if you want emboss the legal name.
  'logoId': "logoId_example", // String | logoId for co-branding. Can't be more than 30 characters
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'packageId': null // Object | Packaging reference for card shipping. Maximum 8 characters
};
apiInstance.cardsCreateVirtualPost(userId, walletId, permsGroup, cardPrint, opts, (error, data, response) => {
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
 **userId** | **Number**| User&#x27;s id of cardholder | 
 **walletId** | **Number**| Wallet&#x27;s Id in which to create the card | 
 **permsGroup** | **String**| Permissions group of the card. There is 4 usages which create 16 possible groups:  | group | NFC | ATM | On-line | Foreign | |-----|-----|-----|-----|------| |TRZ-CU-001|KO|KO|KO|KO| |TRZ-CU-002|KO|KO|KO|OK| |TRZ-CU-003|KO|KO|OK|KO| |TRZ-CU-004|KO|KO|OK|OK| |TRZ-CU-005|KO|OK|KO|KO| |TRZ-CU-006|KO|OK|KO|OK| |TRZ-CU-007|KO|OK|OK|KO| |TRZ-CU-008|KO|OK|OK|OK| |TRZ-CU-009|OK|KO|KO|KO| |TRZ-CU-010|OK|KO|KO|OK| |TRZ-CU-011|OK|KO|OK|KO| |TRZ-CU-012|OK|KO|OK|OK| |TRZ-CU-013|OK|OK|KO|KO| |TRZ-CU-014|OK|OK|KO|OK| |TRZ-CU-015|OK|OK|OK|KO| |TRZ-CU-016|OK|OK|OK|OK|  | 
 **cardPrint** | **String**| Card appareance code, also used to choose the program ID of the card | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **cardTag** | **String**| Custom field | [optional] 
 **batchDeliveryId** | **Number**| Batch regroupement identifier (must be between 1 and 238327) NOT YET OPERATIONAL | [optional] 
 **limitAtmYear** | **Number**| ATM operations limit for a sliding year. No default value. | [optional] 
 **limitAtmMonth** | **Number**| ATM operations limit for a sliding month. No default value. | [optional] 
 **limitAtmWeek** | **Number**| ATM operations limit for a sliding week. Default value 2000â‚¬. | [optional] 
 **limitAtmDay** | **Number**| ATM operations limit for a single day. Default value 1000â‚¬. | [optional] 
 **limitAtmAll** | **Number**| ATM operations limit from beginning. No default value. | [optional] 
 **limitPaymentYear** | **Number**| POS operations limit for a sliding year. No default value. | [optional] 
 **limitPaymentMonth** | **Number**| POS operations limit for a sliding month. No default value. | [optional] 
 **limitPaymentWeek** | **Number**| POS operations limit for a sliding week. Default value 3000â‚¬. | [optional] 
 **limitPaymentDay** | **Number**| POS operations limit for a single day. Default value 2000â‚¬. | [optional] 
 **limitPaymentAll** | **Number**| POS operations limit from beginning. No default value. | [optional] 
 **paymentDailyLimit** | **Number**| POS operations limit for a single day including cents. The decimal delimiter must be \&quot;.\&quot;. No default value. | [optional] 
 **pin** | **String**| Card&#x27;s PIN code value. | [optional] 
 **anonymous** | **Number**| Card is anonymous. If value is 1 there will be no embossed name. | [optional] 
 **sendToParent** | **Number**| If you put the value 1 the delivery address will be the parent user&#x27;s. | [optional] 
 **mccRestrictionGroupId** | **Number**| mccRestrictionGroupId you want to apply | [optional] 
 **merchantRestrictionGroupId** | **Number**| merchantRestrictionGroupId you want to apply | [optional] 
 **countryRestrictionGroupId** | **Number**| countryRestrictionGroupId you want to apply | [optional] 
 **embossLegalName** | **Boolean**| Set true if you want emboss the legal name. | [optional] [default to false]
 **logoId** | **String**| logoId for co-branding. Can&#x27;t be more than 30 characters | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **packageId** | [**Object**](.md)| Packaging reference for card shipping. Maximum 8 characters | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsGet"></a>
# **cardsGet**
> InlineResponse2006 cardsGet(opts)

search cards

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'cardId': 56, // Number | Card's id
  'userId': 56, // Number | User's id of cardholder
  'embossedName': "embossedName_example", // String | Embossed name of the card
  'publicToken': "publicToken_example", // String | Public token of the card
  'permsGroup': "permsGroup_example", // String | Permissions group of the card. There is 4 usages which create 16 possible groups:  | group | NFC | ATM | On-line | Foreign | |-----|-----|-----|-----|------| |TRZ-CU-001|KO|KO|KO|KO| |TRZ-CU-002|KO|KO|KO|OK| |TRZ-CU-003|KO|KO|OK|KO| |TRZ-CU-004|KO|KO|OK|OK| |TRZ-CU-005|KO|OK|KO|KO| |TRZ-CU-006|KO|OK|KO|OK| |TRZ-CU-007|KO|OK|OK|KO| |TRZ-CU-008|KO|OK|OK|OK| |TRZ-CU-009|OK|KO|KO|KO| |TRZ-CU-010|OK|KO|KO|OK| |TRZ-CU-011|OK|KO|OK|KO| |TRZ-CU-012|OK|KO|OK|OK| |TRZ-CU-013|OK|OK|KO|KO| |TRZ-CU-014|OK|OK|KO|OK| |TRZ-CU-015|OK|OK|OK|KO| |TRZ-CU-016|OK|OK|OK|OK| 
  'isPhysical': 56, // Number | | Value | Type | | --- | --- | | 1 | Physical card| | 0 | Virtual card | 
  'isConverted': 56, // Number | | Value | Type | | --- | --- | | 1 | Physical card converted in a virtual card| | 0 | Not converted | 
  'lockStatus': 56, // Number | | Value | Type | | --- | --- | | 1 | Card blocked | | 0 | Card Unblocked | | 2 | Lost card | | 3 | Stolen card | 
  'mccRestrictionGroupId': 56, // Number | mccRestrictionGroupId of the card
  'merchantRestrictionGroupId': 56, // Number | merchantRestrictionGroupId of the card
  'countryRestrictionGroupId': 56, // Number | countryRestrictionGroupId of the card
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.cardsGet(opts, (error, data, response) => {
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
 **cardId** | **Number**| Card&#x27;s id | [optional] 
 **userId** | **Number**| User&#x27;s id of cardholder | [optional] 
 **embossedName** | **String**| Embossed name of the card | [optional] 
 **publicToken** | **String**| Public token of the card | [optional] 
 **permsGroup** | **String**| Permissions group of the card. There is 4 usages which create 16 possible groups:  | group | NFC | ATM | On-line | Foreign | |-----|-----|-----|-----|------| |TRZ-CU-001|KO|KO|KO|KO| |TRZ-CU-002|KO|KO|KO|OK| |TRZ-CU-003|KO|KO|OK|KO| |TRZ-CU-004|KO|KO|OK|OK| |TRZ-CU-005|KO|OK|KO|KO| |TRZ-CU-006|KO|OK|KO|OK| |TRZ-CU-007|KO|OK|OK|KO| |TRZ-CU-008|KO|OK|OK|OK| |TRZ-CU-009|OK|KO|KO|KO| |TRZ-CU-010|OK|KO|KO|OK| |TRZ-CU-011|OK|KO|OK|KO| |TRZ-CU-012|OK|KO|OK|OK| |TRZ-CU-013|OK|OK|KO|KO| |TRZ-CU-014|OK|OK|KO|OK| |TRZ-CU-015|OK|OK|OK|KO| |TRZ-CU-016|OK|OK|OK|OK|  | [optional] 
 **isPhysical** | **Number**| | Value | Type | | --- | --- | | 1 | Physical card| | 0 | Virtual card |  | [optional] 
 **isConverted** | **Number**| | Value | Type | | --- | --- | | 1 | Physical card converted in a virtual card| | 0 | Not converted |  | [optional] 
 **lockStatus** | **Number**| | Value | Type | | --- | --- | | 1 | Card blocked | | 0 | Card Unblocked | | 2 | Lost card | | 3 | Stolen card |  | [optional] 
 **mccRestrictionGroupId** | **Number**| mccRestrictionGroupId of the card | [optional] 
 **merchantRestrictionGroupId** | **Number**| merchantRestrictionGroupId of the card | [optional] 
 **countryRestrictionGroupId** | **Number**| countryRestrictionGroupId of the card | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdActivatePut"></a>
# **cardsIdActivatePut**
> InlineResponse2006 cardsIdActivatePut(id, opts)

activate a card

The Activate endpoint change card status to activate. An activated card can be freely used. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let opts = { 
  'accessToken': "accessToken_example", // String | Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdActivatePut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **accessToken** | **String**| Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdChangePINPut"></a>
# **cardsIdChangePINPut**
> InlineResponse2006 cardsIdChangePINPut(id, currentPIN, newPIN, confirmPIN, opts)

change card&#x27;s PIN

Change card&#x27;s PIN code knowing the current one.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let currentPIN = "currentPIN_example"; // String | Card's current PIN
let newPIN = "newPIN_example"; // String | Card's new PIN
let confirmPIN = "confirmPIN_example"; // String | Card's new PIN confirmation value
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdChangePINPut(id, currentPIN, newPIN, confirmPIN, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **currentPIN** | **String**| Card&#x27;s current PIN | 
 **newPIN** | **String**| Card&#x27;s new PIN | 
 **confirmPIN** | **String**| Card&#x27;s new PIN confirmation value | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdConvertVirtualPut"></a>
# **cardsIdConvertVirtualPut**
> InlineResponse2006 cardsIdConvertVirtualPut(id, opts)

convert card to virtual

Convert a virtual card into a physical one. The converted card will be both virtual and physical. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdConvertVirtualPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdGet"></a>
# **cardsIdGet**
> InlineResponse2006 cardsIdGet(id)

get a card

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 789; // Number | Card's id.

apiInstance.cardsIdGet(id, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdLimitsPut"></a>
# **cardsIdLimitsPut**
> InlineResponse2006 cardsIdLimitsPut(id, opts)

update card&#x27;s limits

Update of the card limits.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'limitAtmYear': 56, // Number | ATM year limit
  'limitAtmMonth': 56, // Number | ATM month limit
  'limitAtmWeek': 56, // Number | ATM week limit
  'limitAtmDay': 56, // Number | ATM day limit
  'limitAtmAll': 56, // Number | ATM from beginning limit
  'limitPaymentYear': 56, // Number | Payment year limit
  'limitPaymentMonth': 56, // Number | Payment month limit
  'limitPaymentWeek': 56, // Number | Payment week limit
  'limitPaymentDay': 56, // Number | Payment day limit
  'limitPaymentAll': 56, // Number | Payment from beginning limit
  'paymentDailyLimit': 3.4, // Number | Payment day limit including cents. The decimal delimiter must be \".\"
  'restrictionGroupLimits': [new Treezor.RestrictionGroupLimits()], // [RestrictionGroupLimits] | Group of limits based on Restriction Groups. By now, only Restaurant Payment Vouchers with paymentDailyLimit can use this field. Furthermore, one of `mccRestrictionGroups`, `countryRestrictionGroups` or `merchantIdRestrictionGroups` must be present (i.e. `paymentDailyLimit` can't be alone).
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdLimitsPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **limitAtmYear** | **Number**| ATM year limit | [optional] 
 **limitAtmMonth** | **Number**| ATM month limit | [optional] 
 **limitAtmWeek** | **Number**| ATM week limit | [optional] 
 **limitAtmDay** | **Number**| ATM day limit | [optional] 
 **limitAtmAll** | **Number**| ATM from beginning limit | [optional] 
 **limitPaymentYear** | **Number**| Payment year limit | [optional] 
 **limitPaymentMonth** | **Number**| Payment month limit | [optional] 
 **limitPaymentWeek** | **Number**| Payment week limit | [optional] 
 **limitPaymentDay** | **Number**| Payment day limit | [optional] 
 **limitPaymentAll** | **Number**| Payment from beginning limit | [optional] 
 **paymentDailyLimit** | **Number**| Payment day limit including cents. The decimal delimiter must be \&quot;.\&quot; | [optional] 
 **restrictionGroupLimits** | [**[RestrictionGroupLimits]**](RestrictionGroupLimits.md)| Group of limits based on Restriction Groups. By now, only Restaurant Payment Vouchers with paymentDailyLimit can use this field. Furthermore, one of &#x60;mccRestrictionGroups&#x60;, &#x60;countryRestrictionGroups&#x60; or &#x60;merchantIdRestrictionGroups&#x60; must be present (i.e. &#x60;paymentDailyLimit&#x60; can&#x27;t be alone). | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdLockUnlockPut"></a>
# **cardsIdLockUnlockPut**
> InlineResponse2006 cardsIdLockUnlockPut(id, lockStatus, opts)

update card&#x27;s blocking status

Block or unblock a card.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let lockStatus = 56; // Number | | Value | Type | | --- | --- | | 1 | Block the card| | 0 | Unblock the card | | 2 | Lost card | | 3 | Stolen card | 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdLockUnlockPut(id, lockStatus, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **lockStatus** | **Number**| | Value | Type | | --- | --- | | 1 | Block the card| | 0 | Unblock the card | | 2 | Lost card | | 3 | Stolen card |  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdOptionsPut"></a>
# **cardsIdOptionsPut**
> InlineResponse2006 cardsIdOptionsPut(id, foreign, online, atm, nfc, opts)

update card&#x27;s options

Allows to update card&#x27;s permission group.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let foreign = 56; // Number | Card usable abroad
let online = 56; // Number | Card usable on-line
let atm = 56; // Number | Card usable on ATM (withdrawals)
let nfc = 56; // Number | Card usable on contactless compatible POS machine machine\"
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdOptionsPut(id, foreign, online, atm, nfc, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **foreign** | **Number**| Card usable abroad | 
 **online** | **Number**| Card usable on-line | 
 **atm** | **Number**| Card usable on ATM (withdrawals) | 
 **nfc** | **Number**| Card usable on contactless compatible POS machine machine\&quot; | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdPut"></a>
# **cardsIdPut**
> InlineResponse2006 cardsIdPut(id, opts)

update card informations

Actually update mccRestrictionGroupId and merchantRestrictionGroupId of a card

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'mccRestrictionGroupId': 56, // Number | card's mccRestrictionGroupId
  'merchantRestrictionGroupId': 56, // Number | card's merchantRestrictionGroupId
  'countryRestrictionGroupId': 56, // Number | card's countryRestrictionGroupId
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **mccRestrictionGroupId** | **Number**| card&#x27;s mccRestrictionGroupId | [optional] 
 **merchantRestrictionGroupId** | **Number**| card&#x27;s merchantRestrictionGroupId | [optional] 
 **countryRestrictionGroupId** | **Number**| card&#x27;s countryRestrictionGroupId | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdRegeneratePut"></a>
# **cardsIdRegeneratePut**
> InlineResponse2006 cardsIdRegeneratePut(id, opts)

regenerate card

only recreate the card image if the card is unlocked. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdRegeneratePut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdSetPINPut"></a>
# **cardsIdSetPINPut**
> InlineResponse2006 cardsIdSetPINPut(id, newPIN, confirmPIN, opts)

set card&#x27;s PIN

Overwrite card&#x27;s PIN.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let newPIN = "newPIN_example"; // String | Card's new PIN.
let confirmPIN = "confirmPIN_example"; // String | Card's new PIN confirmation value
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdSetPINPut(id, newPIN, confirmPIN, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **newPIN** | **String**| Card&#x27;s new PIN. | 
 **confirmPIN** | **String**| Card&#x27;s new PIN confirmation value | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsIdUnblockPINPut"></a>
# **cardsIdUnblockPINPut**
> InlineResponse2006 cardsIdUnblockPINPut(id, opts)

unblock card&#x27;s PIN

Unblock card&#x27;s PIN code.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let id = 56; // Number | Card's id.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.cardsIdUnblockPINPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| Card&#x27;s id. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsRegister3DSPost"></a>
# **cardsRegister3DSPost**
> InlineResponse2006 cardsRegister3DSPost(cardId, opts)

Register 3D secure

Register a card to 3D secure service. The user&#x27;s mobile number must begin by \&quot;+\&quot;, or \&quot;00\&quot;, and the country dialing code.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let cardId = 56; // Number | Card's ID to register
let opts = { 
  'accessSignature': "accessSignature_example" // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).
};
apiInstance.cardsRegister3DSPost(cardId, opts, (error, data, response) => {
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
 **cardId** | **Number**| Card&#x27;s ID to register | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="cardsRequestPhysicalPost"></a>
# **cardsRequestPhysicalPost**
> InlineResponse2006 cardsRequestPhysicalPost(userId, walletId, permsGroup, cardTag, cardPrint, opts)

create a physical card

Create a new physical card. To use a card you will need to activate it (/cards/{id}/Activate/).

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.CardApi();
let userId = 56; // Number | User's id of cardholder
let walletId = 56; // Number | Wallet's Id in which to create the card
let permsGroup = "permsGroup_example"; // String | Permissions group of the card. There is 4 usages which create 16 possible groups:  | group | NFC | ATM | On-line | Foreign | |-----|-----|-----|-----|------| |TRZ-CU-001|KO|KO|KO|KO| |TRZ-CU-002|KO|KO|KO|OK| |TRZ-CU-003|KO|KO|OK|KO| |TRZ-CU-004|KO|KO|OK|OK| |TRZ-CU-005|KO|OK|KO|KO| |TRZ-CU-006|KO|OK|KO|OK| |TRZ-CU-007|KO|OK|OK|KO| |TRZ-CU-008|KO|OK|OK|OK| |TRZ-CU-009|OK|KO|KO|KO| |TRZ-CU-010|OK|KO|KO|OK| |TRZ-CU-011|OK|KO|OK|KO| |TRZ-CU-012|OK|KO|OK|OK| |TRZ-CU-013|OK|OK|KO|KO| |TRZ-CU-014|OK|OK|KO|OK| |TRZ-CU-015|OK|OK|OK|KO| |TRZ-CU-016|OK|OK|OK|OK| 
let cardTag = "cardTag_example"; // String | Custom field
let cardPrint = "cardPrint_example"; // String | Card appearance code, also used to choose the program ID of the card
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'batchDeliveryId': 56, // Number | Batch regroupement identifier (must be between 1 and 238327) NOT YET OPERATIONAL
  'limitAtmYear': 56, // Number | ATM operations limit for a sliding year. No default value.
  'limitAtmMonth': 56, // Number | ATM operations limit for a sliding month. No default value.
  'limitAtmWeek': 56, // Number | ATM operations limit for a sliding week. Default value 2000â‚¬.
  'limitAtmDay': 56, // Number | ATM operations limit for a single day. Default value 1000â‚¬.
  'limitAtmAll': 56, // Number | ATM operations limit from beginning. No default value.
  'limitPaymentYear': 56, // Number | POS operations limit for a sliding year. No default value.
  'limitPaymentMonth': 56, // Number | POS operations limit for a sliding month. No default value.
  'limitPaymentWeek': 56, // Number | POS operations limit for a sliding week. Default value 3000â‚¬.
  'limitPaymentDay': 56, // Number | POS operations limit for a single day. Default value 2000â‚¬.
  'limitPaymentAll': 56, // Number | POS operations limit from beginning. No default value.
  'paymentDailyLimit': 3.4, // Number | POS operations limit for a single day including cents. The decimal delimiter must be \".\". No default value.
  'pin': "pin_example", // String | Card's PIN code value. Default random PIN.
  'anonymous': 56, // Number | Card is anonymous. If value is 1 there will be no embossed name.
  'sendToParent': 56, // Number | If you put the value 1 the delivery address will be the parent user's.
  'mccRestrictionGroupId': 56, // Number | mccRestrictionGroupId you want to apply
  'merchantRestrictionGroupId': 56, // Number | merchantRestrictionGroupId you want to apply
  'countryRestrictionGroupId': 56, // Number | countryRestrictionGroupId you want to apply
  'embossLegalName': false, // Boolean | Set true if you want emboss the legal name.
  'logoId': "logoId_example", // String | logoId for co-branding. Can't be more than 30 characters
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'packageId': null // Object | Packaging reference for card shipping. Maximum 8 characters
};
apiInstance.cardsRequestPhysicalPost(userId, walletId, permsGroup, cardTag, cardPrint, opts, (error, data, response) => {
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
 **userId** | **Number**| User&#x27;s id of cardholder | 
 **walletId** | **Number**| Wallet&#x27;s Id in which to create the card | 
 **permsGroup** | **String**| Permissions group of the card. There is 4 usages which create 16 possible groups:  | group | NFC | ATM | On-line | Foreign | |-----|-----|-----|-----|------| |TRZ-CU-001|KO|KO|KO|KO| |TRZ-CU-002|KO|KO|KO|OK| |TRZ-CU-003|KO|KO|OK|KO| |TRZ-CU-004|KO|KO|OK|OK| |TRZ-CU-005|KO|OK|KO|KO| |TRZ-CU-006|KO|OK|KO|OK| |TRZ-CU-007|KO|OK|OK|KO| |TRZ-CU-008|KO|OK|OK|OK| |TRZ-CU-009|OK|KO|KO|KO| |TRZ-CU-010|OK|KO|KO|OK| |TRZ-CU-011|OK|KO|OK|KO| |TRZ-CU-012|OK|KO|OK|OK| |TRZ-CU-013|OK|OK|KO|KO| |TRZ-CU-014|OK|OK|KO|OK| |TRZ-CU-015|OK|OK|OK|KO| |TRZ-CU-016|OK|OK|OK|OK|  | 
 **cardTag** | **String**| Custom field | 
 **cardPrint** | **String**| Card appearance code, also used to choose the program ID of the card | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **batchDeliveryId** | **Number**| Batch regroupement identifier (must be between 1 and 238327) NOT YET OPERATIONAL | [optional] 
 **limitAtmYear** | **Number**| ATM operations limit for a sliding year. No default value. | [optional] 
 **limitAtmMonth** | **Number**| ATM operations limit for a sliding month. No default value. | [optional] 
 **limitAtmWeek** | **Number**| ATM operations limit for a sliding week. Default value 2000â‚¬. | [optional] 
 **limitAtmDay** | **Number**| ATM operations limit for a single day. Default value 1000â‚¬. | [optional] 
 **limitAtmAll** | **Number**| ATM operations limit from beginning. No default value. | [optional] 
 **limitPaymentYear** | **Number**| POS operations limit for a sliding year. No default value. | [optional] 
 **limitPaymentMonth** | **Number**| POS operations limit for a sliding month. No default value. | [optional] 
 **limitPaymentWeek** | **Number**| POS operations limit for a sliding week. Default value 3000â‚¬. | [optional] 
 **limitPaymentDay** | **Number**| POS operations limit for a single day. Default value 2000â‚¬. | [optional] 
 **limitPaymentAll** | **Number**| POS operations limit from beginning. No default value. | [optional] 
 **paymentDailyLimit** | **Number**| POS operations limit for a single day including cents. The decimal delimiter must be \&quot;.\&quot;. No default value. | [optional] 
 **pin** | **String**| Card&#x27;s PIN code value. Default random PIN. | [optional] 
 **anonymous** | **Number**| Card is anonymous. If value is 1 there will be no embossed name. | [optional] 
 **sendToParent** | **Number**| If you put the value 1 the delivery address will be the parent user&#x27;s. | [optional] 
 **mccRestrictionGroupId** | **Number**| mccRestrictionGroupId you want to apply | [optional] 
 **merchantRestrictionGroupId** | **Number**| merchantRestrictionGroupId you want to apply | [optional] 
 **countryRestrictionGroupId** | **Number**| countryRestrictionGroupId you want to apply | [optional] 
 **embossLegalName** | **Boolean**| Set true if you want emboss the legal name. | [optional] [default to false]
 **logoId** | **String**| logoId for co-branding. Can&#x27;t be more than 30 characters | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **packageId** | [**Object**](.md)| Packaging reference for card shipping. Maximum 8 characters | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

