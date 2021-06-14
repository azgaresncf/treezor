# Treezor.DocumentApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocuments**](DocumentApi.md#createDocuments) | **POST** /documents | create a document
[**deleteDocument**](DocumentApi.md#deleteDocument) | **DELETE** /documents/{id} | delete document
[**getDocument**](DocumentApi.md#getDocument) | **GET** /documents/{id} | get a document
[**getDocuments**](DocumentApi.md#getDocuments) | **GET** /documents | search documents
[**putDocument**](DocumentApi.md#putDocument) | **PUT** /documents/{id} | update a document

<a name="createDocuments"></a>
# **createDocuments**
> InlineResponse20012 createDocuments(userId, documentTypeId, name, fileContentBase64, opts)

create a document

Search for documents.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.DocumentApi();
let userId = "userId_example"; // String | Document user's id.
let documentTypeId = 56; // Number | Type of document.  | documentTypeId | Description | | --- | --- | | 2 | Police record | | 4 | Company Registration | | 6 | CV | | 7 | Sworn statement | | 8 | Turnover | | 9 | Identity card | | 11 | Bank Identity Statement | | 12 | Proof of address| | 13 | Mobile phone invoice| | 14 | Invoice, other than Mobile phone invoice| | 15 | A residence permit| | 16 | A driving licence| | 17 | A passport| | 18 | A proxy granting an employee| | 19 | A company registration official paper| | 20 | Official tax certificate| | 21 | Employee payment notice| | 22 | User bank statement| | 23 | Business legal status| | 24 | Tax Statement| | 25 | Exemption Statement| | 26 | Liveness result| | 27 | Health insurance card| 
let name = "name_example"; // String | Document's name.
let fileContentBase64 = "QmFzZTY0IGV4YW1wbGU="; // Blob | Document file content. base64 encoded.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'documentTag': 56, // Number | Custom data.
  'residenceId': 789 // Number | Document residence Id. The field is mandatory when the document is of type id 24 or 25. Otherwise it should not be provided.
};
apiInstance.createDocuments(userId, documentTypeId, name, fileContentBase64, opts, (error, data, response) => {
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
 **userId** | **String**| Document user&#x27;s id. | 
 **documentTypeId** | **Number**| Type of document.  | documentTypeId | Description | | --- | --- | | 2 | Police record | | 4 | Company Registration | | 6 | CV | | 7 | Sworn statement | | 8 | Turnover | | 9 | Identity card | | 11 | Bank Identity Statement | | 12 | Proof of address| | 13 | Mobile phone invoice| | 14 | Invoice, other than Mobile phone invoice| | 15 | A residence permit| | 16 | A driving licence| | 17 | A passport| | 18 | A proxy granting an employee| | 19 | A company registration official paper| | 20 | Official tax certificate| | 21 | Employee payment notice| | 22 | User bank statement| | 23 | Business legal status| | 24 | Tax Statement| | 25 | Exemption Statement| | 26 | Liveness result| | 27 | Health insurance card|  | 
 **name** | **String**| Document&#x27;s name. | 
 **fileContentBase64** | **Blob**| Document file content. base64 encoded. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **documentTag** | **Number**| Custom data. | [optional] 
 **residenceId** | **Number**| Document residence Id. The field is mandatory when the document is of type id 24 or 25. Otherwise it should not be provided. | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDocument"></a>
# **deleteDocument**
> InlineResponse20012 deleteDocument(id)

delete document

Remove a document from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.DocumentApi();
let id = 789; // Number | Document's internal id.

apiInstance.deleteDocument(id, (error, data, response) => {
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
 **id** | **Number**| Document&#x27;s internal id. | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> InlineResponse20012 getDocument(id)

get a document

get a document

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.DocumentApi();
let id = 789; // Number | Document's internal id.

apiInstance.getDocument(id, (error, data, response) => {
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
 **id** | **Number**| Document&#x27;s internal id. | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocuments"></a>
# **getDocuments**
> InlineResponse20012 getDocuments(opts)

search documents

Search for documents.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.DocumentApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'documentId': 56, // Number | Document's unique id.
  'documentTag': "documentTag_example", // String | Custom data.
  'documentStatus': "documentStatus_example", // String | The status of the document. Possible values: * PENDING * CANCELED * VALIDATED 
  'documentTypeId': 56, // Number | Document type id.
  'documentType': "documentType_example", // String | Document's type.
  'userId': 56, // Number | Document user's id.
  'userName': "userName_example", // String | Document user's name.
  'userEmail': "userEmail_example", // String | Document user's email.
  'fileName': "fileName_example", // String | Document's name.
  'fileSize': 56, // Number | Document's size.
  'fileType': 56, // Number | Document's type.
  'isAgent': "isAgent_example", // String | is agent field.
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.getDocuments(opts, (error, data, response) => {
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
 **documentId** | **Number**| Document&#x27;s unique id. | [optional] 
 **documentTag** | **String**| Custom data. | [optional] 
 **documentStatus** | **String**| The status of the document. Possible values: * PENDING * CANCELED * VALIDATED  | [optional] 
 **documentTypeId** | **Number**| Document type id. | [optional] 
 **documentType** | **String**| Document&#x27;s type. | [optional] 
 **userId** | **Number**| Document user&#x27;s id. | [optional] 
 **userName** | **String**| Document user&#x27;s name. | [optional] 
 **userEmail** | **String**| Document user&#x27;s email. | [optional] 
 **fileName** | **String**| Document&#x27;s name. | [optional] 
 **fileSize** | **Number**| Document&#x27;s size. | [optional] 
 **fileType** | **Number**| Document&#x27;s type. | [optional] 
 **isAgent** | **String**| is agent field. | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putDocument"></a>
# **putDocument**
> InlineResponse20012 putDocument(id)

update a document

Update a document.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.DocumentApi();
let id = 789; // Number | Document's internal id.

apiInstance.putDocument(id, (error, data, response) => {
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
 **id** | **Number**| Document&#x27;s internal id. | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

