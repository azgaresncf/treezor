# Treezor.UserApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{id} | delete a user
[**getUser**](UserApi.md#getUser) | **GET** /users/{id} | get an user
[**getUsers**](UserApi.md#getUsers) | **GET** /users | search users
[**putUser**](UserApi.md#putUser) | **PUT** /users/{id} | update a user
[**putUsers**](UserApi.md#putUsers) | **POST** /users | create user
[**usersIdKyclivenessPost**](UserApi.md#usersIdKyclivenessPost) | **POST** /users/{id}/kycliveness | 
[**usersIdKyclivenessPut**](UserApi.md#usersIdKyclivenessPut) | **PUT** /users/{id}/kycliveness | 
[**usersIdKycreviewPut**](UserApi.md#usersIdKycreviewPut) | **PUT** /users/{id}/Kycreview/ | review user information

<a name="deleteUser"></a>
# **deleteUser**
> InlineResponse20027 deleteUser(id, origin, opts)

delete a user

Change user&#x27;s status to **CANCELED**.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's ID
let origin = "origin_example"; // String | Origin of the request.  Possible values: * OPERATOR * USER 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.deleteUser(id, origin, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s ID | 
 **origin** | **String**| Origin of the request.  Possible values: * OPERATOR * USER  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> InlineResponse20027 getUser(id, opts)

get an user

Get user&#x27;s information for given user&#x27;s id.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's ID
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.getUser(id, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s ID | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> InlineResponse20027 getUsers(opts)

search users

Get users from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'userId': 56, // Number | User's unique ID
  'userTypeId': 56, // Number | User's type.
  'userStatus': "userStatus_example", // String | User's status.
  'userTag': "userTag_example", // String | Custom data that you can add to this item.
  'specifiedUSPerson': 56, // Number | Est considéré comme ayant la nationalité ou la citoyenneté américaine : Tout citoyen des États-Unis : une personne est présumée citoyen des Etats-Unis dès lors qu’elle possède un passeport américain ou qu’elle est née sur le territoire des Etats-Unis, même lorsqu’un tel lieu de naissance figure sur un passeport d’un autre pays, ou que la personne possède également une autre nationalité ou a sa résidence dans un autre pays. Une condition néanmoins : la personne ne doit pas avoir renoncé à la citoyenneté américaine ; • Tout résident légal des États-Unis, quelle que soit sa nationalité : (i) quiconque est considéré comme résident fiscal aux Etats-Unis aux termes de la loi fédérale américaine, (ii) quiconque demande à être traité comme résident fiscal aux Etats-Unis, ou (iii) quiconque est considéré comme résident fiscal aux termes de la loi de cet Etat américain. • Toute personne titulaire d’une carte de séjour permanent (green card) aux Etats-Unis ou résidant de façon permanente aux Etats-Unis ou y ayant passé une période suffisamment longue au cours des trois dernières années. 
  'controllingPersonType': 56, // Number | Type of relationship
  'employeeType': 56, // Number | Type of user's role
  'email': "email_example", // String | User's email address (must be valid).
  'name': "name_example", // String | User's Name.
  'legalName': "legalName_example", // String | Business name
  'parentUserId': "parentUserId_example", // String | User id of user's parent
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value: createdDate. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **userId** | **Number**| User&#x27;s unique ID | [optional] 
 **userTypeId** | **Number**| User&#x27;s type. | [optional] 
 **userStatus** | **String**| User&#x27;s status. | [optional] 
 **userTag** | **String**| Custom data that you can add to this item. | [optional] 
 **specifiedUSPerson** | **Number**| Est considéré comme ayant la nationalité ou la citoyenneté américaine : Tout citoyen des États-Unis : une personne est présumée citoyen des Etats-Unis dès lors qu’elle possède un passeport américain ou qu’elle est née sur le territoire des Etats-Unis, même lorsqu’un tel lieu de naissance figure sur un passeport d’un autre pays, ou que la personne possède également une autre nationalité ou a sa résidence dans un autre pays. Une condition néanmoins : la personne ne doit pas avoir renoncé à la citoyenneté américaine ; • Tout résident légal des États-Unis, quelle que soit sa nationalité : (i) quiconque est considéré comme résident fiscal aux Etats-Unis aux termes de la loi fédérale américaine, (ii) quiconque demande à être traité comme résident fiscal aux Etats-Unis, ou (iii) quiconque est considéré comme résident fiscal aux termes de la loi de cet Etat américain. • Toute personne titulaire d’une carte de séjour permanent (green card) aux Etats-Unis ou résidant de façon permanente aux Etats-Unis ou y ayant passé une période suffisamment longue au cours des trois dernières années.  | [optional] 
 **controllingPersonType** | **Number**| Type of relationship | [optional] 
 **employeeType** | **Number**| Type of user&#x27;s role | [optional] 
 **email** | **String**| User&#x27;s email address (must be valid). | [optional] 
 **name** | **String**| User&#x27;s Name. | [optional] 
 **legalName** | **String**| Business name | [optional] 
 **parentUserId** | **String**| User id of user&#x27;s parent | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value: createdDate. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> InlineResponse20027 putUser(id, opts)

update a user

Update user&#x27;s information.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's ID
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'userTag': "userTag_example", // String | Custom data.
  'specifiedUSPerson': 56, // Number | Est considéré comme ayant la nationalité ou la citoyenneté américaine : Tout citoyen des États-Unis : une personne est présumée citoyen des Etats-Unis dès lors qu’elle possède un passeport américain ou qu’elle est née sur le territoire des Etats-Unis, même lorsqu’un tel lieu de naissance figure sur un passeport d’un autre pays, ou que la personne possède également une autre nationalité ou a sa résidence dans un autre pays. Une condition néanmoins : la personne ne doit pas avoir renoncé à la citoyenneté américaine ; • Tout résident légal des États-Unis, quelle que soit sa nationalité : (i) quiconque est considéré comme résident fiscal aux Etats-Unis aux termes de la loi fédérale américaine, (ii) quiconque demande à être traité comme résident fiscal aux Etats-Unis, ou (iii) quiconque est considéré comme résident fiscal aux termes de la loi de cet Etat américain. • Toute personne titulaire d’une carte de séjour permanent (green card) aux Etats-Unis ou résidant de façon permanente aux Etats-Unis ou y ayant passé une période suffisamment longue au cours des trois dernières années.  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'controllingPersonType': 56, // Number | Type of relationship  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director | 
  'employeeType': 56, // Number | Type of relationship. Possible values:  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee | 
  'title': "title_example", // String | User's title. Possible values: * M * MME * MLLE 
  'firstname': "firstname_example", // String | User's first name
  'lastname': "lastname_example", // String | User's last name
  'middleNames': "middleNames_example", // String | User's middle names
  'birthday': "birthday_example", // String | User's birth date. Format YYYY-MM-DD
  'email': "email_example", // String | User's email address (must be valid).
  'address1': "address1_example", // String | User's postal address (main)
  'address2': "address2_example", // String | User's postal address (complement)
  'address3': "address3_example", // String | User's postal address (complement2)
  'postcode': "postcode_example", // String | User's postcode
  'city': "city_example", // String | User's city
  'state': "state_example", // String | User's state
  'country': "country_example", // String | User's country (Format ISO 3166-1 alpha-2)
  'phone': "phone_example", // String | User's phone number
  'mobile': "mobile_example", // String | User's mobile phone number
  'nationality': "nationality_example", // String | User's nationality
  'nationalityOther': "nationalityOther_example", // String | User's other nationality
  'placeOfBirth': "placeOfBirth_example", // String | User's place of birth
  'birthCountry': "birthCountry_example", // String | User's country of birth (Format ISO 3166-1 alpha-2)
  'occupation': "occupation_example", // String | User's occupation
  'incomeRange': "incomeRange_example", // String | Customer income range
  'legalName': "legalName_example", // String | Business name
  'legalRegistrationNumber': "legalRegistrationNumber_example", // String | Business registration number
  'legalTvaNumber': "legalTvaNumber_example", // String | Business VAT number
  'legalRegistrationDate': new Date("2013-10-20"), // Date | Business registration date
  'legalForm': "legalForm_example", // String | | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilité Limitée (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Société créée de fait entre personnes physiques | | 2220 | Indivision and others | Société créée de fait avec personne morale | | 2310 | Indivision and others | Société en participation entre personnes physiques | | 2320 | Indivision and others | Société en participation avec personne morale | | 2385 | Indivision and others | Société en participation de professions libérales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit privé non doté de la personnalité morale | | 3110 | Foreign company | Représentation ou agence commerciale d'état ou organisme public étranger  immatriculé au RCS | | 3120 | Foreign company | Société étrangère immatriculée au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivité ou établissement public étranger | | 3220 | Foreign company | Société étrangère non immatriculée au RCS | | 3290 | Foreign company | (Autre) personne morale de droit étranger | | 4110 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial doté d'un comptable public | | 4120 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial non doté d'un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local à caractère industriel ou commercial | | 4150 | Administrations, Instituions | Régie d'une collectivité locale à caractère industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Société de caution mutuelle | | 5192 | Diverse | Société coopérative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de crédit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (fédérale) de crédit mutuel | | 5195 | Association fondation | Association coopérative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d'épargne et de prévoyance à forme coopérative | | 5202 | General partnership | Société en nom collectif | | 5203 | General partnership | Société en nom collectif coopérative | | 5306 | Limited company | Société en commandite simple | | 5307 | Limited company | Société en commandite simple coopérative | | 5308 | Limited company | Société en commandite par actions | | 5309 | Limited company | Société en commandite par actions coopérative | | 5385 | Limited company | Société d'exercice libéral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d'économie mixte | | 5422 | Limited Liability Company  | SARL immobilière pour le commerce et l'industrie (SICOMI) | | 5426 | Limited Liability Company  | Société immobilière de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d'intérêt agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d'intérêt collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d'attribution | | 5443 | Limited Liability Company  | SARL coopérative de construction | | 5451 | Limited Liability Company  | SARL coopérative de consommation | | 5453 | Limited Liability Company  | SARL coopérative artisanale | | 5454 | Limited Liability Company  | SARL coopérative d'intérêt maritime | | 5455 | Limited Liability Company  | SARL coopérative de transports | | 5458 | Limited Liability Company  | SARL coopérative ouvrière de production et de crédit (SCOP) | | 5459 | Limited Liability Company  | SARL union de sociétés coopératives | | 5460 | Limited Liability Company  | SARL coopérative | | 5485 | Limited Liability Company  | Société d'exercice libéral à responsabilité limitée | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA à participation ouvrière à conseil d'administration | | 5510 | Limited company | SA nationale à conseil d'administration | | 5515 | Limited company | SA d'économie mixte à conseil d'administration | | 5520 | Limited company | Société d'investissement à capital variable (SICAV) à conseil d'administration | | 5522 | Limited company | Société anonyme immobilière pour le commerce et l'industrie (SICOMI)  à conseil d'administration | | 5525 | Limited company | Société anonyme immobilière d'investissement à conseil d'administration | | 5530 | Limited company | Safer anonyme à conseil d'administration | | 5531 | Limited company | Société anonyme mixte d'intérêt agricole (SMIA) à conseil d'administration | | 5532 | Limited company | Société anonyme mixte d'intérêt collectif agricole (SICA) à conseil d'administration | | 5542 | Limited company | Société anonyme d'attribution à conseil d'administration | | 5543 | Limited company | Société anonyme coopérative de construction à conseil d'administration | | 5546 | Limited company | SA de HLM à conseil d'administration | | 5547 | Limited company | SA coopérative de production de HLM à conseil d'administration | | 5548 | Limited company | SA de crédit immobilier à conseil d'administration | | 5551 | Limited company | SA coopérative de consommation à conseil d'administration | | 5552 | Limited company | SA coopérative de commerçants détaillants à conseil d'administration | | 5553 | Limited company | SA coopérative artisanale à conseil d'administration | | 5554 | Limited company | SA coopérative (d'intérêt) maritime à conseil d'administration | | 5555 | Limited company | SA coopérative de transports à conseil d'administration | | 5558 | Limited company | SCOP à conseil d'administration | | 5559 | Limited company | SA union de sociétés coopératives à conseil d'administration | | 5560 | Limited company | SA coopérative à conseil d'administration | | 5585 | Limited company | Société d'exercice libéral à forme anonyme à conseil d'administration | | 5599 | Limited company | SA à conseil d'administration | | 5605 | Limited company | SA à participation ouvrière à directoire | | 5610 | Limited company | SA nationale à directoire | | 5615 | Limited company | SA d'économie mixte à directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Société immobilière d'investissement anonyme à directoire | | 5630 | Limited company | Safer anonyme à directoire | | 5631 | Limited company | Société anonyme mixte d'intérêt agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Société anonyme d'attribution à directoire | | 5643 | Limited company | Société anonyme coopérative de construction à directoire | | 5646 | Limited company | S.A. HLM à directoire | | 5647 | Limited company | Société coopérative de production de HLM anonyme à directoire | | 5648 | Limited company | SA de crédit immobilier à directoire | | 5651 | Limited company | SA coopérative de consommation à directoire | | 5652 | Limited company | SA coopérative de commerçants détaillants à directoire | | 5653 | Limited company | SA coopérative artisanale à directoire | | 5654 | Limited company | SA coopérative (d'intérêt) maritime à directoire | | 5655 | Limited company | SA coopérative de transport à directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de sociétés coopératives à directoire | | 5660 | Limited company | SA coopérative à directoire | | 5685 | Limited company | Société d'exercice libéral à forme anonyme à directoire | | 5699 | Limited company | (Autre) SA à directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Société d'exercice libéral par action simplifiée | | 5800 | Diverse | Société européenne | | 6100 | De facto undivided ownership company | Caisse d'épargne et de prévoyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Société coopérative agricole | | 6318 | Diverse | Union de sociétés coopératives agricoles | | 6411 | De facto undivided ownership company | Société d'assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Société civile foncière | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Société civile d'attribution | | 6543 | Civils companies (without SCI) | Société civile coopérative de construction | | 6544 | Civils companies | Société civile d'accession progressive à la propriété | | 6551 | Civils companies (without SCI) | Société civile coopérative de consommation | | 6554 | Civils companies (without SCI) | Société civile coopérative (d'intérêt) maritime | | 6558 | Civils companies (without SCI) | Société civile coopérative entre médecins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d'avocats | | 6562 | Civils companies (without SCI) | SCP d'avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d'avoués d'appel | | 6564 | Civils companies (without SCI) | SCP d'huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de médecins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d'infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kinésithérapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d'analyse médicale | | 6576 | Civils companies (without SCI) | SCP de vétérinaires | | 6577 | Civils companies (without SCI) | SCP de géomètres-experts | | 6578 | Civils companies (without SCI) | SCP d'architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Société civile laitière | | 6589 | Civils companies (without SCI) | Société civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de crédit mutuel | | 6596 | Civils companies (without SCI) | Caisse de crédit agricole mutuel | | 6597 | Civils companies (without SCI) | Société civile d'exploitation agricole | | 6598 | Farm operator  | Exploitation agricole à responsabilité limitée | | 6599 | Civils companies (without SCI) | Autre société civile | | 6901 | Diverse | Autres personnes de droit privé inscrites au registre du commerce et des sociétés | | 7111 | Administrations, Instituions | Autorité constitutionnelle | | 7112 | Administrations, Instituions | Autorité administrative indépendante | | 7113 | Administrations, Instituions | Ministère | | 7120 | Administrations, Instituions | Service central d'un ministère | | 7150 | Administrations, Instituions | Service du ministère de la Défense | | 7160 | Administrations, Instituions | Service déconcentré à compétence nation . D'un ministère (hors Défense) | | 7171 | Administrations, Instituions | Service déconcentré de l'Etat à compétence (inter) régionale | | 7172 | Administrations, Instituions | Service déconcentré de l'Etat à compétence (inter) départementale | | 7179 | Administrations, Instituions | (Autre) Service déconcentré de l'Etat à compétence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dotée de la personnalité morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | Département | | 7225 | Administrations, Instituions | Territoire d'Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivité territoriale | | 7230 | Administrations, Instituions | Région | | 7312 | Administrations, Instituions | Commune associée | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autorisée | | 7322 | Administrations, Instituions | Association foncière urbaine | | 7323 | Administrations, Instituions | Association foncière de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d'enseignement | | 7340 | Administrations, Instituions | Pôle métropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communauté urbaine | | 7344 | Administrations, Instituions | Métropole | | 7345 | Administrations, Instituions | Syndicat intercommunal à vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communauté de commune | | 7347 | Administrations, Instituions | Communauté de villes | | 7348 | Administrations, Instituions | Communauté d'agglomération | | 7349 | Administrations, Instituions | Autre établissement public local de coopération non spécialisé ou entente | | 7351 | Administrations, Instituions | Institution interdépartementale ou entente | | 7352 | Administrations, Instituions | Institution interrégionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal à vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d'action sociale | | 7362 | Administrations, Instituions | Caisse des écoles | | 7363 | Administrations, Instituions | Caisse de crédit municipal | | 7364 | Administrations, Instituions | Etablissement d'hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et médico-social | | 7371 | Administrations, Instituions | Office public d'habitation à loyer modéré (OPHLM) | | 7372 | Administrations, Instituions | Service départemental d'incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | Régie d'une collectivité locale à caractère administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d'administration centrale | | 7383 | Administrations, Instituions | Etablissement public national à caractère scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre établissement public national d'enseignement | | 7385 | Administrations, Instituions | Autre établissement public national administratif à compétence territoriale limitée | | 7389 | Administrations, Instituions | Etablissement public national à caractère administratif | | 7410 | Administrations, Instituions | Groupement d'intérêt public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d'Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les armées | | 7470 | Administrations, Instituions | Groupement de coopération sanitaire à gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | Régime général de la sécurité sociale | | 8120 | Administrations, Instituions | Régime spécial de sécurité sociale | | 8130 | Administrations, Instituions | Institution de retraite complémentaire | | 8140 | Administrations, Instituions | Mutualité sociale agricole | | 8150 | Administrations, Instituions | Régime maladie des non-salariés non agricoles | | 8160 | Administrations, Instituions | Régime vieillesse ne dépendant pas du régime général de la sécurité sociale | | 8170 | Administrations, Instituions | Régime d'assurance chômage | | 8190 | Administrations, Instituions | Autre régime de prévoyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comité central d'entreprise | | 8311 | Association fondation | Comité d'établissement | | 8410 | Association fondation | Syndicat de salariés | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimilé | | 8470 | Association fondation | Centre technique industriel ou comité professionnel du développement économique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de prévoyance | | 8520 | Administrations, Instituions | Institution de retraite supplémentaire | | 9110 | Condominium syndicate | Syndicat de copropriété | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non déclarée | | 9220 | Association fondation | Association déclarée | | 9221 | Association fondation | Association déclarée \"entreprises d'insertion par l'économique\" | | 9222 | Association fondation | Association intermédiaire | | 9223 | Association fondation | Groupement d'employeurs | | 9224 | Association fondation | Association d'avocats à responsabilité professionnelle individuelle | | 9230 | Association fondation | Association déclarée  reconnue d'utilité publique | | 9240 | Association fondation | Congrégation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit privé | | 9970 | Diverse | Groupement de coopération sanitaire à gestion privée | 
  'legalShareCapital': 56, // Number | Business share capital
  'legalSector': "legalSector_example", // String | Business sector. NAF code in France
  'legalAnnualTurnOver': "legalAnnualTurnOver_example", // String | Business annual turnover (in k€)
  'legalNetIncomeRange': "legalNetIncomeRange_example", // String | Business net income range (in k€)
  'legalNumberOfEmployeeRange': "legalNumberOfEmployeeRange_example", // String | Business number of employees range
  'effectiveBeneficiary': 56, // Number | Business effective beneficiary
  'language': "language_example", // String | User's prefered language (ISO 639-1)
  'taxNumber': "taxNumber_example", // String | User's tax identification number. If the taxResidence is not set to FR, the field is mandatory.
  'taxResidence': "taxResidence_example", // String | User's tax residence country code (2 char code following ISO 3166 norm).
  'position': "position_example", // String | User's position.
  'personalAssets': "personalAssets_example", // String | User's personal assets range exprimed in K€.
  'activityOutsideEu': 56, // Number | Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'economicSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'residentCountriesSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'involvedSanctions': 56, // Number | Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'timezone': "timezone_example" // String | User's timezone (Format tz database) The time zones have unique names in the form \"Area/Location\", e.g. \"America/New_York\", \"Europe/Paris\" More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). 
};
apiInstance.putUser(id, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s ID | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **userTag** | **String**| Custom data. | [optional] 
 **specifiedUSPerson** | **Number**| Est considéré comme ayant la nationalité ou la citoyenneté américaine : Tout citoyen des États-Unis : une personne est présumée citoyen des Etats-Unis dès lors qu’elle possède un passeport américain ou qu’elle est née sur le territoire des Etats-Unis, même lorsqu’un tel lieu de naissance figure sur un passeport d’un autre pays, ou que la personne possède également une autre nationalité ou a sa résidence dans un autre pays. Une condition néanmoins : la personne ne doit pas avoir renoncé à la citoyenneté américaine ; • Tout résident légal des États-Unis, quelle que soit sa nationalité : (i) quiconque est considéré comme résident fiscal aux Etats-Unis aux termes de la loi fédérale américaine, (ii) quiconque demande à être traité comme résident fiscal aux Etats-Unis, ou (iii) quiconque est considéré comme résident fiscal aux termes de la loi de cet Etat américain. • Toute personne titulaire d’une carte de séjour permanent (green card) aux Etats-Unis ou résidant de façon permanente aux Etats-Unis ou y ayant passé une période suffisamment longue au cours des trois dernières années.  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **controllingPersonType** | **Number**| Type of relationship  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director |  | [optional] 
 **employeeType** | **Number**| Type of relationship. Possible values:  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee |  | [optional] 
 **title** | **String**| User&#x27;s title. Possible values: * M * MME * MLLE  | [optional] 
 **firstname** | **String**| User&#x27;s first name | [optional] 
 **lastname** | **String**| User&#x27;s last name | [optional] 
 **middleNames** | **String**| User&#x27;s middle names | [optional] 
 **birthday** | **String**| User&#x27;s birth date. Format YYYY-MM-DD | [optional] 
 **email** | **String**| User&#x27;s email address (must be valid). | [optional] 
 **address1** | **String**| User&#x27;s postal address (main) | [optional] 
 **address2** | **String**| User&#x27;s postal address (complement) | [optional] 
 **address3** | **String**| User&#x27;s postal address (complement2) | [optional] 
 **postcode** | **String**| User&#x27;s postcode | [optional] 
 **city** | **String**| User&#x27;s city | [optional] 
 **state** | **String**| User&#x27;s state | [optional] 
 **country** | **String**| User&#x27;s country (Format ISO 3166-1 alpha-2) | [optional] 
 **phone** | **String**| User&#x27;s phone number | [optional] 
 **mobile** | **String**| User&#x27;s mobile phone number | [optional] 
 **nationality** | **String**| User&#x27;s nationality | [optional] 
 **nationalityOther** | **String**| User&#x27;s other nationality | [optional] 
 **placeOfBirth** | **String**| User&#x27;s place of birth | [optional] 
 **birthCountry** | **String**| User&#x27;s country of birth (Format ISO 3166-1 alpha-2) | [optional] 
 **occupation** | **String**| User&#x27;s occupation | [optional] 
 **incomeRange** | **String**| Customer income range | [optional] 
 **legalName** | **String**| Business name | [optional] 
 **legalRegistrationNumber** | **String**| Business registration number | [optional] 
 **legalTvaNumber** | **String**| Business VAT number | [optional] 
 **legalRegistrationDate** | **Date**| Business registration date | [optional] 
 **legalForm** | **String**| | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilité Limitée (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Société créée de fait entre personnes physiques | | 2220 | Indivision and others | Société créée de fait avec personne morale | | 2310 | Indivision and others | Société en participation entre personnes physiques | | 2320 | Indivision and others | Société en participation avec personne morale | | 2385 | Indivision and others | Société en participation de professions libérales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit privé non doté de la personnalité morale | | 3110 | Foreign company | Représentation ou agence commerciale d&#x27;état ou organisme public étranger  immatriculé au RCS | | 3120 | Foreign company | Société étrangère immatriculée au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivité ou établissement public étranger | | 3220 | Foreign company | Société étrangère non immatriculée au RCS | | 3290 | Foreign company | (Autre) personne morale de droit étranger | | 4110 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial doté d&#x27;un comptable public | | 4120 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial non doté d&#x27;un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local à caractère industriel ou commercial | | 4150 | Administrations, Instituions | Régie d&#x27;une collectivité locale à caractère industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Société de caution mutuelle | | 5192 | Diverse | Société coopérative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de crédit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (fédérale) de crédit mutuel | | 5195 | Association fondation | Association coopérative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d&#x27;épargne et de prévoyance à forme coopérative | | 5202 | General partnership | Société en nom collectif | | 5203 | General partnership | Société en nom collectif coopérative | | 5306 | Limited company | Société en commandite simple | | 5307 | Limited company | Société en commandite simple coopérative | | 5308 | Limited company | Société en commandite par actions | | 5309 | Limited company | Société en commandite par actions coopérative | | 5385 | Limited company | Société d&#x27;exercice libéral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d&#x27;économie mixte | | 5422 | Limited Liability Company  | SARL immobilière pour le commerce et l&#x27;industrie (SICOMI) | | 5426 | Limited Liability Company  | Société immobilière de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d&#x27;intérêt agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d&#x27;intérêt collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d&#x27;attribution | | 5443 | Limited Liability Company  | SARL coopérative de construction | | 5451 | Limited Liability Company  | SARL coopérative de consommation | | 5453 | Limited Liability Company  | SARL coopérative artisanale | | 5454 | Limited Liability Company  | SARL coopérative d&#x27;intérêt maritime | | 5455 | Limited Liability Company  | SARL coopérative de transports | | 5458 | Limited Liability Company  | SARL coopérative ouvrière de production et de crédit (SCOP) | | 5459 | Limited Liability Company  | SARL union de sociétés coopératives | | 5460 | Limited Liability Company  | SARL coopérative | | 5485 | Limited Liability Company  | Société d&#x27;exercice libéral à responsabilité limitée | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA à participation ouvrière à conseil d&#x27;administration | | 5510 | Limited company | SA nationale à conseil d&#x27;administration | | 5515 | Limited company | SA d&#x27;économie mixte à conseil d&#x27;administration | | 5520 | Limited company | Société d&#x27;investissement à capital variable (SICAV) à conseil d&#x27;administration | | 5522 | Limited company | Société anonyme immobilière pour le commerce et l&#x27;industrie (SICOMI)  à conseil d&#x27;administration | | 5525 | Limited company | Société anonyme immobilière d&#x27;investissement à conseil d&#x27;administration | | 5530 | Limited company | Safer anonyme à conseil d&#x27;administration | | 5531 | Limited company | Société anonyme mixte d&#x27;intérêt agricole (SMIA) à conseil d&#x27;administration | | 5532 | Limited company | Société anonyme mixte d&#x27;intérêt collectif agricole (SICA) à conseil d&#x27;administration | | 5542 | Limited company | Société anonyme d&#x27;attribution à conseil d&#x27;administration | | 5543 | Limited company | Société anonyme coopérative de construction à conseil d&#x27;administration | | 5546 | Limited company | SA de HLM à conseil d&#x27;administration | | 5547 | Limited company | SA coopérative de production de HLM à conseil d&#x27;administration | | 5548 | Limited company | SA de crédit immobilier à conseil d&#x27;administration | | 5551 | Limited company | SA coopérative de consommation à conseil d&#x27;administration | | 5552 | Limited company | SA coopérative de commerçants détaillants à conseil d&#x27;administration | | 5553 | Limited company | SA coopérative artisanale à conseil d&#x27;administration | | 5554 | Limited company | SA coopérative (d&#x27;intérêt) maritime à conseil d&#x27;administration | | 5555 | Limited company | SA coopérative de transports à conseil d&#x27;administration | | 5558 | Limited company | SCOP à conseil d&#x27;administration | | 5559 | Limited company | SA union de sociétés coopératives à conseil d&#x27;administration | | 5560 | Limited company | SA coopérative à conseil d&#x27;administration | | 5585 | Limited company | Société d&#x27;exercice libéral à forme anonyme à conseil d&#x27;administration | | 5599 | Limited company | SA à conseil d&#x27;administration | | 5605 | Limited company | SA à participation ouvrière à directoire | | 5610 | Limited company | SA nationale à directoire | | 5615 | Limited company | SA d&#x27;économie mixte à directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Société immobilière d&#x27;investissement anonyme à directoire | | 5630 | Limited company | Safer anonyme à directoire | | 5631 | Limited company | Société anonyme mixte d&#x27;intérêt agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Société anonyme d&#x27;attribution à directoire | | 5643 | Limited company | Société anonyme coopérative de construction à directoire | | 5646 | Limited company | S.A. HLM à directoire | | 5647 | Limited company | Société coopérative de production de HLM anonyme à directoire | | 5648 | Limited company | SA de crédit immobilier à directoire | | 5651 | Limited company | SA coopérative de consommation à directoire | | 5652 | Limited company | SA coopérative de commerçants détaillants à directoire | | 5653 | Limited company | SA coopérative artisanale à directoire | | 5654 | Limited company | SA coopérative (d&#x27;intérêt) maritime à directoire | | 5655 | Limited company | SA coopérative de transport à directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de sociétés coopératives à directoire | | 5660 | Limited company | SA coopérative à directoire | | 5685 | Limited company | Société d&#x27;exercice libéral à forme anonyme à directoire | | 5699 | Limited company | (Autre) SA à directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Société d&#x27;exercice libéral par action simplifiée | | 5800 | Diverse | Société européenne | | 6100 | De facto undivided ownership company | Caisse d&#x27;épargne et de prévoyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Société coopérative agricole | | 6318 | Diverse | Union de sociétés coopératives agricoles | | 6411 | De facto undivided ownership company | Société d&#x27;assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Société civile foncière | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Société civile d&#x27;attribution | | 6543 | Civils companies (without SCI) | Société civile coopérative de construction | | 6544 | Civils companies | Société civile d&#x27;accession progressive à la propriété | | 6551 | Civils companies (without SCI) | Société civile coopérative de consommation | | 6554 | Civils companies (without SCI) | Société civile coopérative (d&#x27;intérêt) maritime | | 6558 | Civils companies (without SCI) | Société civile coopérative entre médecins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d&#x27;avocats | | 6562 | Civils companies (without SCI) | SCP d&#x27;avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d&#x27;avoués d&#x27;appel | | 6564 | Civils companies (without SCI) | SCP d&#x27;huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de médecins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d&#x27;infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kinésithérapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d&#x27;analyse médicale | | 6576 | Civils companies (without SCI) | SCP de vétérinaires | | 6577 | Civils companies (without SCI) | SCP de géomètres-experts | | 6578 | Civils companies (without SCI) | SCP d&#x27;architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Société civile laitière | | 6589 | Civils companies (without SCI) | Société civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de crédit mutuel | | 6596 | Civils companies (without SCI) | Caisse de crédit agricole mutuel | | 6597 | Civils companies (without SCI) | Société civile d&#x27;exploitation agricole | | 6598 | Farm operator  | Exploitation agricole à responsabilité limitée | | 6599 | Civils companies (without SCI) | Autre société civile | | 6901 | Diverse | Autres personnes de droit privé inscrites au registre du commerce et des sociétés | | 7111 | Administrations, Instituions | Autorité constitutionnelle | | 7112 | Administrations, Instituions | Autorité administrative indépendante | | 7113 | Administrations, Instituions | Ministère | | 7120 | Administrations, Instituions | Service central d&#x27;un ministère | | 7150 | Administrations, Instituions | Service du ministère de la Défense | | 7160 | Administrations, Instituions | Service déconcentré à compétence nation . D&#x27;un ministère (hors Défense) | | 7171 | Administrations, Instituions | Service déconcentré de l&#x27;Etat à compétence (inter) régionale | | 7172 | Administrations, Instituions | Service déconcentré de l&#x27;Etat à compétence (inter) départementale | | 7179 | Administrations, Instituions | (Autre) Service déconcentré de l&#x27;Etat à compétence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dotée de la personnalité morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | Département | | 7225 | Administrations, Instituions | Territoire d&#x27;Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivité territoriale | | 7230 | Administrations, Instituions | Région | | 7312 | Administrations, Instituions | Commune associée | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autorisée | | 7322 | Administrations, Instituions | Association foncière urbaine | | 7323 | Administrations, Instituions | Association foncière de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d&#x27;enseignement | | 7340 | Administrations, Instituions | Pôle métropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communauté urbaine | | 7344 | Administrations, Instituions | Métropole | | 7345 | Administrations, Instituions | Syndicat intercommunal à vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communauté de commune | | 7347 | Administrations, Instituions | Communauté de villes | | 7348 | Administrations, Instituions | Communauté d&#x27;agglomération | | 7349 | Administrations, Instituions | Autre établissement public local de coopération non spécialisé ou entente | | 7351 | Administrations, Instituions | Institution interdépartementale ou entente | | 7352 | Administrations, Instituions | Institution interrégionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal à vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d&#x27;action sociale | | 7362 | Administrations, Instituions | Caisse des écoles | | 7363 | Administrations, Instituions | Caisse de crédit municipal | | 7364 | Administrations, Instituions | Etablissement d&#x27;hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et médico-social | | 7371 | Administrations, Instituions | Office public d&#x27;habitation à loyer modéré (OPHLM) | | 7372 | Administrations, Instituions | Service départemental d&#x27;incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | Régie d&#x27;une collectivité locale à caractère administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d&#x27;administration centrale | | 7383 | Administrations, Instituions | Etablissement public national à caractère scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre établissement public national d&#x27;enseignement | | 7385 | Administrations, Instituions | Autre établissement public national administratif à compétence territoriale limitée | | 7389 | Administrations, Instituions | Etablissement public national à caractère administratif | | 7410 | Administrations, Instituions | Groupement d&#x27;intérêt public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d&#x27;Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les armées | | 7470 | Administrations, Instituions | Groupement de coopération sanitaire à gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | Régime général de la sécurité sociale | | 8120 | Administrations, Instituions | Régime spécial de sécurité sociale | | 8130 | Administrations, Instituions | Institution de retraite complémentaire | | 8140 | Administrations, Instituions | Mutualité sociale agricole | | 8150 | Administrations, Instituions | Régime maladie des non-salariés non agricoles | | 8160 | Administrations, Instituions | Régime vieillesse ne dépendant pas du régime général de la sécurité sociale | | 8170 | Administrations, Instituions | Régime d&#x27;assurance chômage | | 8190 | Administrations, Instituions | Autre régime de prévoyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comité central d&#x27;entreprise | | 8311 | Association fondation | Comité d&#x27;établissement | | 8410 | Association fondation | Syndicat de salariés | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimilé | | 8470 | Association fondation | Centre technique industriel ou comité professionnel du développement économique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de prévoyance | | 8520 | Administrations, Instituions | Institution de retraite supplémentaire | | 9110 | Condominium syndicate | Syndicat de copropriété | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non déclarée | | 9220 | Association fondation | Association déclarée | | 9221 | Association fondation | Association déclarée \&quot;entreprises d&#x27;insertion par l&#x27;économique\&quot; | | 9222 | Association fondation | Association intermédiaire | | 9223 | Association fondation | Groupement d&#x27;employeurs | | 9224 | Association fondation | Association d&#x27;avocats à responsabilité professionnelle individuelle | | 9230 | Association fondation | Association déclarée  reconnue d&#x27;utilité publique | | 9240 | Association fondation | Congrégation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit privé | | 9970 | Diverse | Groupement de coopération sanitaire à gestion privée |  | [optional] 
 **legalShareCapital** | **Number**| Business share capital | [optional] 
 **legalSector** | **String**| Business sector. NAF code in France | [optional] 
 **legalAnnualTurnOver** | **String**| Business annual turnover (in k€) | [optional] 
 **legalNetIncomeRange** | **String**| Business net income range (in k€) | [optional] 
 **legalNumberOfEmployeeRange** | **String**| Business number of employees range | [optional] 
 **effectiveBeneficiary** | **Number**| Business effective beneficiary | [optional] 
 **language** | **String**| User&#x27;s prefered language (ISO 639-1) | [optional] 
 **taxNumber** | **String**| User&#x27;s tax identification number. If the taxResidence is not set to FR, the field is mandatory. | [optional] 
 **taxResidence** | **String**| User&#x27;s tax residence country code (2 char code following ISO 3166 norm). | [optional] 
 **position** | **String**| User&#x27;s position. | [optional] 
 **personalAssets** | **String**| User&#x27;s personal assets range exprimed in K€. | [optional] 
 **activityOutsideEu** | **Number**| Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **economicSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **residentCountriesSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **involvedSanctions** | **Number**| Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **timezone** | **String**| User&#x27;s timezone (Format tz database) The time zones have unique names in the form \&quot;Area/Location\&quot;, e.g. \&quot;America/New_York\&quot;, \&quot;Europe/Paris\&quot; More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUsers"></a>
# **putUsers**
> InlineResponse20027 putUsers(specifiedUSPerson, email, opts)

create user

Create a new user in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let specifiedUSPerson = 56; // Number | Est considéré comme ayant la nationalité ou la citoyenneté américaine : Tout citoyen des États-Unis : une personne est présumée citoyen des Etats-Unis dès lors qu’elle possède un passeport américain ou qu’elle est née sur le territoire des Etats-Unis, même lorsqu’un tel lieu de naissance figure sur un passeport d’un autre pays, ou que la personne possède également une autre nationalité ou a sa résidence dans un autre pays. Une condition néanmoins : la personne ne doit pas avoir renoncé à la citoyenneté américaine ; • Tout résident légal des États-Unis, quelle que soit sa nationalité : (i) quiconque est considéré comme résident fiscal aux Etats-Unis aux termes de la loi fédérale américaine, (ii) quiconque demande à être traité comme résident fiscal aux Etats-Unis, ou (iii) quiconque est considéré comme résident fiscal aux termes de la loi de cet Etat américain. • Toute personne titulaire d’une carte de séjour permanent (green card) aux Etats-Unis ou résidant de façon permanente aux Etats-Unis ou y ayant passé une période suffisamment longue au cours des trois dernières années :  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
let email = "email_example"; // String | User's email address (must be valid).
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'userTypeId': 56, // Number | User's type. Possible values:  | Value | Type | | --- | --- | | 1 | Natural person (default)| | 2 | Business entity | | 3 | Non - governmental organization | | 4 | Governmental organization | 
  'userTag': "userTag_example", // String | Custom data.
  'parentUserId': 56, // Number | User id of user's parent if any.
  'parentType': "parentType_example", // String | Type of bound between parent and current user : * shareholder * employee * leader 
  'controllingPersonType': 56, // Number | Type of relationship :  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director | 
  'employeeType': 56, // Number | Type of user's role :  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee | 
  'entityType': 56, // Number | Type of user's entity type :    | Value | Type |   | --- | --- |   | 1 | Reporting Financial Institution |   | 2 | Non-Reporting Financial Institution |   | 3 | Active Non-Financial Entity - Governmental entities, Int. organizations |   | 4 | Active Non-Financial Entity - Other |   | 5 | Passive Non-Financial Entity - Investment entity that is not Participating Jurisdiction FI | 
  'title': "title_example", // String | User's title. Possible values: * M * MME * MLLE 
  'firstname': "firstname_example", // String | User's first name
  'lastname': "lastname_example", // String | User's last name
  'middleNames': "middleNames_example", // String | User's middle names
  'birthday': "birthday_example", // String | User's birth date. Format YYYY-MM-DD
  'address1': "address1_example", // String | User's postal address (main). Can not contain carriage return.
  'address2': "address2_example", // String | User's postal address (complement). Can not contain carriage return.
  'address3': "address3_example", // String | User's postal address (complement2). Can not contain carriage return.
  'postcode': "postcode_example", // String | User's postcode
  'city': "city_example", // String | User's city
  'state': "state_example", // String | User's state
  'country': "country_example", // String | User's country (Format ISO 3166-1 alpha-2)
  'phone': "phone_example", // String | User's phone number (Format E.164). If you use Url please replace + with %2B.
  'mobile': "mobile_example", // String | User's mobile phone number (Format E.164). If you use Url please replace + with %2B.
  'nationality': "nationality_example", // String | User's nationality
  'nationalityOther': "nationalityOther_example", // String | User's other nationality
  'placeOfBirth': "placeOfBirth_example", // String | User's place of birth
  'birthCountry': "birthCountry_example", // String | User's country of birth (Format ISO 3166-1 alpha-2)
  'occupation': "occupation_example", // String | User's occupation
  'incomeRange': "incomeRange_example", // String | Customer income range
  'legalName': "legalName_example", // String | Business name
  'legalRegistrationNumber': "legalRegistrationNumber_example", // String | Business registration number
  'legalTvaNumber': "legalTvaNumber_example", // String | Business VAT number
  'legalRegistrationDate': new Date("2013-10-20"), // Date | Business registration date
  'legalForm': "legalForm_example", // String | | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilité Limitée (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Société créée de fait entre personnes physiques | | 2220 | Indivision and others | Société créée de fait avec personne morale | | 2310 | Indivision and others | Société en participation entre personnes physiques | | 2320 | Indivision and others | Société en participation avec personne morale | | 2385 | Indivision and others | Société en participation de professions libérales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit privé non doté de la personnalité morale | | 3110 | Foreign company | Représentation ou agence commerciale d'état ou organisme public étranger  immatriculé au RCS | | 3120 | Foreign company | Société étrangère immatriculée au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivité ou établissement public étranger | | 3220 | Foreign company | Société étrangère non immatriculée au RCS | | 3290 | Foreign company | (Autre) personne morale de droit étranger | | 4110 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial doté d'un comptable public | | 4120 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial non doté d'un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local à caractère industriel ou commercial | | 4150 | Administrations, Instituions | Régie d'une collectivité locale à caractère industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Société de caution mutuelle | | 5192 | Diverse | Société coopérative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de crédit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (fédérale) de crédit mutuel | | 5195 | Association fondation | Association coopérative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d'épargne et de prévoyance à forme coopérative | | 5202 | General partnership | Société en nom collectif | | 5203 | General partnership | Société en nom collectif coopérative | | 5306 | Limited company | Société en commandite simple | | 5307 | Limited company | Société en commandite simple coopérative | | 5308 | Limited company | Société en commandite par actions | | 5309 | Limited company | Société en commandite par actions coopérative | | 5385 | Limited company | Société d'exercice libéral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d'économie mixte | | 5422 | Limited Liability Company  | SARL immobilière pour le commerce et l'industrie (SICOMI) | | 5426 | Limited Liability Company  | Société immobilière de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d'intérêt agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d'intérêt collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d'attribution | | 5443 | Limited Liability Company  | SARL coopérative de construction | | 5451 | Limited Liability Company  | SARL coopérative de consommation | | 5453 | Limited Liability Company  | SARL coopérative artisanale | | 5454 | Limited Liability Company  | SARL coopérative d'intérêt maritime | | 5455 | Limited Liability Company  | SARL coopérative de transports | | 5458 | Limited Liability Company  | SARL coopérative ouvrière de production et de crédit (SCOP) | | 5459 | Limited Liability Company  | SARL union de sociétés coopératives | | 5460 | Limited Liability Company  | SARL coopérative | | 5485 | Limited Liability Company  | Société d'exercice libéral à responsabilité limitée | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA à participation ouvrière à conseil d'administration | | 5510 | Limited company | SA nationale à conseil d'administration | | 5515 | Limited company | SA d'économie mixte à conseil d'administration | | 5520 | Limited company | Société d'investissement à capital variable (SICAV) à conseil d'administration | | 5522 | Limited company | Société anonyme immobilière pour le commerce et l'industrie (SICOMI)  à conseil d'administration | | 5525 | Limited company | Société anonyme immobilière d'investissement à conseil d'administration | | 5530 | Limited company | Safer anonyme à conseil d'administration | | 5531 | Limited company | Société anonyme mixte d'intérêt agricole (SMIA) à conseil d'administration | | 5532 | Limited company | Société anonyme mixte d'intérêt collectif agricole (SICA) à conseil d'administration | | 5542 | Limited company | Société anonyme d'attribution à conseil d'administration | | 5543 | Limited company | Société anonyme coopérative de construction à conseil d'administration | | 5546 | Limited company | SA de HLM à conseil d'administration | | 5547 | Limited company | SA coopérative de production de HLM à conseil d'administration | | 5548 | Limited company | SA de crédit immobilier à conseil d'administration | | 5551 | Limited company | SA coopérative de consommation à conseil d'administration | | 5552 | Limited company | SA coopérative de commerçants détaillants à conseil d'administration | | 5553 | Limited company | SA coopérative artisanale à conseil d'administration | | 5554 | Limited company | SA coopérative (d'intérêt) maritime à conseil d'administration | | 5555 | Limited company | SA coopérative de transports à conseil d'administration | | 5558 | Limited company | SCOP à conseil d'administration | | 5559 | Limited company | SA union de sociétés coopératives à conseil d'administration | | 5560 | Limited company | SA coopérative à conseil d'administration | | 5585 | Limited company | Société d'exercice libéral à forme anonyme à conseil d'administration | | 5599 | Limited company | SA à conseil d'administration | | 5605 | Limited company | SA à participation ouvrière à directoire | | 5610 | Limited company | SA nationale à directoire | | 5615 | Limited company | SA d'économie mixte à directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Société immobilière d'investissement anonyme à directoire | | 5630 | Limited company | Safer anonyme à directoire | | 5631 | Limited company | Société anonyme mixte d'intérêt agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Société anonyme d'attribution à directoire | | 5643 | Limited company | Société anonyme coopérative de construction à directoire | | 5646 | Limited company | S.A. HLM à directoire | | 5647 | Limited company | Société coopérative de production de HLM anonyme à directoire | | 5648 | Limited company | SA de crédit immobilier à directoire | | 5651 | Limited company | SA coopérative de consommation à directoire | | 5652 | Limited company | SA coopérative de commerçants détaillants à directoire | | 5653 | Limited company | SA coopérative artisanale à directoire | | 5654 | Limited company | SA coopérative (d'intérêt) maritime à directoire | | 5655 | Limited company | SA coopérative de transport à directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de sociétés coopératives à directoire | | 5660 | Limited company | SA coopérative à directoire | | 5685 | Limited company | Société d'exercice libéral à forme anonyme à directoire | | 5699 | Limited company | (Autre) SA à directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Société d'exercice libéral par action simplifiée | | 5800 | Diverse | Société européenne | | 6100 | De facto undivided ownership company | Caisse d'épargne et de prévoyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Société coopérative agricole | | 6318 | Diverse | Union de sociétés coopératives agricoles | | 6411 | De facto undivided ownership company | Société d'assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Société civile foncière | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Société civile d'attribution | | 6543 | Civils companies (without SCI) | Société civile coopérative de construction | | 6544 | Civils companies | Société civile d'accession progressive à la propriété | | 6551 | Civils companies (without SCI) | Société civile coopérative de consommation | | 6554 | Civils companies (without SCI) | Société civile coopérative (d'intérêt) maritime | | 6558 | Civils companies (without SCI) | Société civile coopérative entre médecins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d'avocats | | 6562 | Civils companies (without SCI) | SCP d'avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d'avoués d'appel | | 6564 | Civils companies (without SCI) | SCP d'huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de médecins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d'infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kinésithérapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d'analyse médicale | | 6576 | Civils companies (without SCI) | SCP de vétérinaires | | 6577 | Civils companies (without SCI) | SCP de géomètres-experts | | 6578 | Civils companies (without SCI) | SCP d'architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Société civile laitière | | 6589 | Civils companies (without SCI) | Société civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de crédit mutuel | | 6596 | Civils companies (without SCI) | Caisse de crédit agricole mutuel | | 6597 | Civils companies (without SCI) | Société civile d'exploitation agricole | | 6598 | Farm operator  | Exploitation agricole à responsabilité limitée | | 6599 | Civils companies (without SCI) | Autre société civile | | 6901 | Diverse | Autres personnes de droit privé inscrites au registre du commerce et des sociétés | | 7111 | Administrations, Instituions | Autorité constitutionnelle | | 7112 | Administrations, Instituions | Autorité administrative indépendante | | 7113 | Administrations, Instituions | Ministère | | 7120 | Administrations, Instituions | Service central d'un ministère | | 7150 | Administrations, Instituions | Service du ministère de la Défense | | 7160 | Administrations, Instituions | Service déconcentré à compétence nation . D'un ministère (hors Défense) | | 7171 | Administrations, Instituions | Service déconcentré de l'Etat à compétence (inter) régionale | | 7172 | Administrations, Instituions | Service déconcentré de l'Etat à compétence (inter) départementale | | 7179 | Administrations, Instituions | (Autre) Service déconcentré de l'Etat à compétence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dotée de la personnalité morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | Département | | 7225 | Administrations, Instituions | Territoire d'Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivité territoriale | | 7230 | Administrations, Instituions | Région | | 7312 | Administrations, Instituions | Commune associée | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autorisée | | 7322 | Administrations, Instituions | Association foncière urbaine | | 7323 | Administrations, Instituions | Association foncière de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d'enseignement | | 7340 | Administrations, Instituions | Pôle métropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communauté urbaine | | 7344 | Administrations, Instituions | Métropole | | 7345 | Administrations, Instituions | Syndicat intercommunal à vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communauté de commune | | 7347 | Administrations, Instituions | Communauté de villes | | 7348 | Administrations, Instituions | Communauté d'agglomération | | 7349 | Administrations, Instituions | Autre établissement public local de coopération non spécialisé ou entente | | 7351 | Administrations, Instituions | Institution interdépartementale ou entente | | 7352 | Administrations, Instituions | Institution interrégionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal à vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d'action sociale | | 7362 | Administrations, Instituions | Caisse des écoles | | 7363 | Administrations, Instituions | Caisse de crédit municipal | | 7364 | Administrations, Instituions | Etablissement d'hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et médico-social | | 7371 | Administrations, Instituions | Office public d'habitation à loyer modéré (OPHLM) | | 7372 | Administrations, Instituions | Service départemental d'incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | Régie d'une collectivité locale à caractère administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d'administration centrale | | 7383 | Administrations, Instituions | Etablissement public national à caractère scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre établissement public national d'enseignement | | 7385 | Administrations, Instituions | Autre établissement public national administratif à compétence territoriale limitée | | 7389 | Administrations, Instituions | Etablissement public national à caractère administratif | | 7410 | Administrations, Instituions | Groupement d'intérêt public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d'Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les armées | | 7470 | Administrations, Instituions | Groupement de coopération sanitaire à gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | Régime général de la sécurité sociale | | 8120 | Administrations, Instituions | Régime spécial de sécurité sociale | | 8130 | Administrations, Instituions | Institution de retraite complémentaire | | 8140 | Administrations, Instituions | Mutualité sociale agricole | | 8150 | Administrations, Instituions | Régime maladie des non-salariés non agricoles | | 8160 | Administrations, Instituions | Régime vieillesse ne dépendant pas du régime général de la sécurité sociale | | 8170 | Administrations, Instituions | Régime d'assurance chômage | | 8190 | Administrations, Instituions | Autre régime de prévoyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comité central d'entreprise | | 8311 | Association fondation | Comité d'établissement | | 8410 | Association fondation | Syndicat de salariés | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimilé | | 8470 | Association fondation | Centre technique industriel ou comité professionnel du développement économique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de prévoyance | | 8520 | Administrations, Instituions | Institution de retraite supplémentaire | | 9110 | Condominium syndicate | Syndicat de copropriété | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non déclarée | | 9220 | Association fondation | Association déclarée | | 9221 | Association fondation | Association déclarée \"entreprises d'insertion par l'économique\" | | 9222 | Association fondation | Association intermédiaire | | 9223 | Association fondation | Groupement d'employeurs | | 9224 | Association fondation | Association d'avocats à responsabilité professionnelle individuelle | | 9230 | Association fondation | Association déclarée  reconnue d'utilité publique | | 9240 | Association fondation | Congrégation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit privé | | 9970 | Diverse | Groupement de coopération sanitaire à gestion privée | 
  'legalShareCapital': 56, // Number | Business share capital
  'legalSector': "legalSector_example", // String | Business sector. NAF code in France
  'legalAnnualTurnOver': "legalAnnualTurnOver_example", // String | Business annual turnover (in k€)
  'legalNetIncomeRange': "legalNetIncomeRange_example", // String | Business net income range (in k€)
  'legalNumberOfEmployeeRange': "legalNumberOfEmployeeRange_example", // String | Business number of employees range
  'effectiveBeneficiary': 56, // Number | Business effective beneficiary
  'language': "language_example", // String | User's prefered language (ISO 639-1)
  'taxNumber': "taxNumber_example", // String | User's tax identification number. If the taxResidence is set to another country than France, the field is mandatory. (deprecated, you must use the TaxResidence endpoint) 
  'taxResidence': "taxResidence_example", // String | User's tax residence country code (2 char code following ISO 3166 norm). (deprecated, you must use the TaxResidence endpoint) 
  'position': "position_example", // String | User's position.
  'personalAssets': "personalAssets_example", // String | User's personal assets range exprimed in K€.
  'activityOutsideEu': 56, // Number | Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'economicSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'residentCountriesSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'involvedSanctions': 56, // Number | Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'timezone': "timezone_example" // String | User's timezone (Format tz database) The time zones have unique names in the form \"Area/Location\", e.g. \"America/New_York\", \"Europe/Paris\" More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). 
};
apiInstance.putUsers(specifiedUSPerson, email, opts, (error, data, response) => {
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
 **specifiedUSPerson** | **Number**| Est considéré comme ayant la nationalité ou la citoyenneté américaine : Tout citoyen des États-Unis : une personne est présumée citoyen des Etats-Unis dès lors qu’elle possède un passeport américain ou qu’elle est née sur le territoire des Etats-Unis, même lorsqu’un tel lieu de naissance figure sur un passeport d’un autre pays, ou que la personne possède également une autre nationalité ou a sa résidence dans un autre pays. Une condition néanmoins : la personne ne doit pas avoir renoncé à la citoyenneté américaine ; • Tout résident légal des États-Unis, quelle que soit sa nationalité : (i) quiconque est considéré comme résident fiscal aux Etats-Unis aux termes de la loi fédérale américaine, (ii) quiconque demande à être traité comme résident fiscal aux Etats-Unis, ou (iii) quiconque est considéré comme résident fiscal aux termes de la loi de cet Etat américain. • Toute personne titulaire d’une carte de séjour permanent (green card) aux Etats-Unis ou résidant de façon permanente aux Etats-Unis ou y ayant passé une période suffisamment longue au cours des trois dernières années :  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | 
 **email** | **String**| User&#x27;s email address (must be valid). | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **userTypeId** | **Number**| User&#x27;s type. Possible values:  | Value | Type | | --- | --- | | 1 | Natural person (default)| | 2 | Business entity | | 3 | Non - governmental organization | | 4 | Governmental organization |  | [optional] 
 **userTag** | **String**| Custom data. | [optional] 
 **parentUserId** | **Number**| User id of user&#x27;s parent if any. | [optional] 
 **parentType** | **String**| Type of bound between parent and current user : * shareholder * employee * leader  | [optional] 
 **controllingPersonType** | **Number**| Type of relationship :  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director |  | [optional] 
 **employeeType** | **Number**| Type of user&#x27;s role :  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee |  | [optional] 
 **entityType** | **Number**| Type of user&#x27;s entity type :    | Value | Type |   | --- | --- |   | 1 | Reporting Financial Institution |   | 2 | Non-Reporting Financial Institution |   | 3 | Active Non-Financial Entity - Governmental entities, Int. organizations |   | 4 | Active Non-Financial Entity - Other |   | 5 | Passive Non-Financial Entity - Investment entity that is not Participating Jurisdiction FI |  | [optional] 
 **title** | **String**| User&#x27;s title. Possible values: * M * MME * MLLE  | [optional] 
 **firstname** | **String**| User&#x27;s first name | [optional] 
 **lastname** | **String**| User&#x27;s last name | [optional] 
 **middleNames** | **String**| User&#x27;s middle names | [optional] 
 **birthday** | **String**| User&#x27;s birth date. Format YYYY-MM-DD | [optional] 
 **address1** | **String**| User&#x27;s postal address (main). Can not contain carriage return. | [optional] 
 **address2** | **String**| User&#x27;s postal address (complement). Can not contain carriage return. | [optional] 
 **address3** | **String**| User&#x27;s postal address (complement2). Can not contain carriage return. | [optional] 
 **postcode** | **String**| User&#x27;s postcode | [optional] 
 **city** | **String**| User&#x27;s city | [optional] 
 **state** | **String**| User&#x27;s state | [optional] 
 **country** | **String**| User&#x27;s country (Format ISO 3166-1 alpha-2) | [optional] 
 **phone** | **String**| User&#x27;s phone number (Format E.164). If you use Url please replace + with %2B. | [optional] 
 **mobile** | **String**| User&#x27;s mobile phone number (Format E.164). If you use Url please replace + with %2B. | [optional] 
 **nationality** | **String**| User&#x27;s nationality | [optional] 
 **nationalityOther** | **String**| User&#x27;s other nationality | [optional] 
 **placeOfBirth** | **String**| User&#x27;s place of birth | [optional] 
 **birthCountry** | **String**| User&#x27;s country of birth (Format ISO 3166-1 alpha-2) | [optional] 
 **occupation** | **String**| User&#x27;s occupation | [optional] 
 **incomeRange** | **String**| Customer income range | [optional] 
 **legalName** | **String**| Business name | [optional] 
 **legalRegistrationNumber** | **String**| Business registration number | [optional] 
 **legalTvaNumber** | **String**| Business VAT number | [optional] 
 **legalRegistrationDate** | **Date**| Business registration date | [optional] 
 **legalForm** | **String**| | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilité Limitée (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Société créée de fait entre personnes physiques | | 2220 | Indivision and others | Société créée de fait avec personne morale | | 2310 | Indivision and others | Société en participation entre personnes physiques | | 2320 | Indivision and others | Société en participation avec personne morale | | 2385 | Indivision and others | Société en participation de professions libérales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit privé non doté de la personnalité morale | | 3110 | Foreign company | Représentation ou agence commerciale d&#x27;état ou organisme public étranger  immatriculé au RCS | | 3120 | Foreign company | Société étrangère immatriculée au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivité ou établissement public étranger | | 3220 | Foreign company | Société étrangère non immatriculée au RCS | | 3290 | Foreign company | (Autre) personne morale de droit étranger | | 4110 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial doté d&#x27;un comptable public | | 4120 | Administrations, Instituions | Etablissement public national à caractère industriel ou commercial non doté d&#x27;un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local à caractère industriel ou commercial | | 4150 | Administrations, Instituions | Régie d&#x27;une collectivité locale à caractère industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Société de caution mutuelle | | 5192 | Diverse | Société coopérative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de crédit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (fédérale) de crédit mutuel | | 5195 | Association fondation | Association coopérative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d&#x27;épargne et de prévoyance à forme coopérative | | 5202 | General partnership | Société en nom collectif | | 5203 | General partnership | Société en nom collectif coopérative | | 5306 | Limited company | Société en commandite simple | | 5307 | Limited company | Société en commandite simple coopérative | | 5308 | Limited company | Société en commandite par actions | | 5309 | Limited company | Société en commandite par actions coopérative | | 5385 | Limited company | Société d&#x27;exercice libéral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d&#x27;économie mixte | | 5422 | Limited Liability Company  | SARL immobilière pour le commerce et l&#x27;industrie (SICOMI) | | 5426 | Limited Liability Company  | Société immobilière de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d&#x27;intérêt agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d&#x27;intérêt collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d&#x27;attribution | | 5443 | Limited Liability Company  | SARL coopérative de construction | | 5451 | Limited Liability Company  | SARL coopérative de consommation | | 5453 | Limited Liability Company  | SARL coopérative artisanale | | 5454 | Limited Liability Company  | SARL coopérative d&#x27;intérêt maritime | | 5455 | Limited Liability Company  | SARL coopérative de transports | | 5458 | Limited Liability Company  | SARL coopérative ouvrière de production et de crédit (SCOP) | | 5459 | Limited Liability Company  | SARL union de sociétés coopératives | | 5460 | Limited Liability Company  | SARL coopérative | | 5485 | Limited Liability Company  | Société d&#x27;exercice libéral à responsabilité limitée | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA à participation ouvrière à conseil d&#x27;administration | | 5510 | Limited company | SA nationale à conseil d&#x27;administration | | 5515 | Limited company | SA d&#x27;économie mixte à conseil d&#x27;administration | | 5520 | Limited company | Société d&#x27;investissement à capital variable (SICAV) à conseil d&#x27;administration | | 5522 | Limited company | Société anonyme immobilière pour le commerce et l&#x27;industrie (SICOMI)  à conseil d&#x27;administration | | 5525 | Limited company | Société anonyme immobilière d&#x27;investissement à conseil d&#x27;administration | | 5530 | Limited company | Safer anonyme à conseil d&#x27;administration | | 5531 | Limited company | Société anonyme mixte d&#x27;intérêt agricole (SMIA) à conseil d&#x27;administration | | 5532 | Limited company | Société anonyme mixte d&#x27;intérêt collectif agricole (SICA) à conseil d&#x27;administration | | 5542 | Limited company | Société anonyme d&#x27;attribution à conseil d&#x27;administration | | 5543 | Limited company | Société anonyme coopérative de construction à conseil d&#x27;administration | | 5546 | Limited company | SA de HLM à conseil d&#x27;administration | | 5547 | Limited company | SA coopérative de production de HLM à conseil d&#x27;administration | | 5548 | Limited company | SA de crédit immobilier à conseil d&#x27;administration | | 5551 | Limited company | SA coopérative de consommation à conseil d&#x27;administration | | 5552 | Limited company | SA coopérative de commerçants détaillants à conseil d&#x27;administration | | 5553 | Limited company | SA coopérative artisanale à conseil d&#x27;administration | | 5554 | Limited company | SA coopérative (d&#x27;intérêt) maritime à conseil d&#x27;administration | | 5555 | Limited company | SA coopérative de transports à conseil d&#x27;administration | | 5558 | Limited company | SCOP à conseil d&#x27;administration | | 5559 | Limited company | SA union de sociétés coopératives à conseil d&#x27;administration | | 5560 | Limited company | SA coopérative à conseil d&#x27;administration | | 5585 | Limited company | Société d&#x27;exercice libéral à forme anonyme à conseil d&#x27;administration | | 5599 | Limited company | SA à conseil d&#x27;administration | | 5605 | Limited company | SA à participation ouvrière à directoire | | 5610 | Limited company | SA nationale à directoire | | 5615 | Limited company | SA d&#x27;économie mixte à directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Société immobilière d&#x27;investissement anonyme à directoire | | 5630 | Limited company | Safer anonyme à directoire | | 5631 | Limited company | Société anonyme mixte d&#x27;intérêt agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Société anonyme d&#x27;attribution à directoire | | 5643 | Limited company | Société anonyme coopérative de construction à directoire | | 5646 | Limited company | S.A. HLM à directoire | | 5647 | Limited company | Société coopérative de production de HLM anonyme à directoire | | 5648 | Limited company | SA de crédit immobilier à directoire | | 5651 | Limited company | SA coopérative de consommation à directoire | | 5652 | Limited company | SA coopérative de commerçants détaillants à directoire | | 5653 | Limited company | SA coopérative artisanale à directoire | | 5654 | Limited company | SA coopérative (d&#x27;intérêt) maritime à directoire | | 5655 | Limited company | SA coopérative de transport à directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de sociétés coopératives à directoire | | 5660 | Limited company | SA coopérative à directoire | | 5685 | Limited company | Société d&#x27;exercice libéral à forme anonyme à directoire | | 5699 | Limited company | (Autre) SA à directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Société d&#x27;exercice libéral par action simplifiée | | 5800 | Diverse | Société européenne | | 6100 | De facto undivided ownership company | Caisse d&#x27;épargne et de prévoyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Société coopérative agricole | | 6318 | Diverse | Union de sociétés coopératives agricoles | | 6411 | De facto undivided ownership company | Société d&#x27;assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Société civile foncière | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Société civile d&#x27;attribution | | 6543 | Civils companies (without SCI) | Société civile coopérative de construction | | 6544 | Civils companies | Société civile d&#x27;accession progressive à la propriété | | 6551 | Civils companies (without SCI) | Société civile coopérative de consommation | | 6554 | Civils companies (without SCI) | Société civile coopérative (d&#x27;intérêt) maritime | | 6558 | Civils companies (without SCI) | Société civile coopérative entre médecins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d&#x27;avocats | | 6562 | Civils companies (without SCI) | SCP d&#x27;avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d&#x27;avoués d&#x27;appel | | 6564 | Civils companies (without SCI) | SCP d&#x27;huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de médecins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d&#x27;infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kinésithérapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d&#x27;analyse médicale | | 6576 | Civils companies (without SCI) | SCP de vétérinaires | | 6577 | Civils companies (without SCI) | SCP de géomètres-experts | | 6578 | Civils companies (without SCI) | SCP d&#x27;architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Société civile laitière | | 6589 | Civils companies (without SCI) | Société civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de crédit mutuel | | 6596 | Civils companies (without SCI) | Caisse de crédit agricole mutuel | | 6597 | Civils companies (without SCI) | Société civile d&#x27;exploitation agricole | | 6598 | Farm operator  | Exploitation agricole à responsabilité limitée | | 6599 | Civils companies (without SCI) | Autre société civile | | 6901 | Diverse | Autres personnes de droit privé inscrites au registre du commerce et des sociétés | | 7111 | Administrations, Instituions | Autorité constitutionnelle | | 7112 | Administrations, Instituions | Autorité administrative indépendante | | 7113 | Administrations, Instituions | Ministère | | 7120 | Administrations, Instituions | Service central d&#x27;un ministère | | 7150 | Administrations, Instituions | Service du ministère de la Défense | | 7160 | Administrations, Instituions | Service déconcentré à compétence nation . D&#x27;un ministère (hors Défense) | | 7171 | Administrations, Instituions | Service déconcentré de l&#x27;Etat à compétence (inter) régionale | | 7172 | Administrations, Instituions | Service déconcentré de l&#x27;Etat à compétence (inter) départementale | | 7179 | Administrations, Instituions | (Autre) Service déconcentré de l&#x27;Etat à compétence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dotée de la personnalité morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | Département | | 7225 | Administrations, Instituions | Territoire d&#x27;Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivité territoriale | | 7230 | Administrations, Instituions | Région | | 7312 | Administrations, Instituions | Commune associée | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autorisée | | 7322 | Administrations, Instituions | Association foncière urbaine | | 7323 | Administrations, Instituions | Association foncière de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d&#x27;enseignement | | 7340 | Administrations, Instituions | Pôle métropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communauté urbaine | | 7344 | Administrations, Instituions | Métropole | | 7345 | Administrations, Instituions | Syndicat intercommunal à vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communauté de commune | | 7347 | Administrations, Instituions | Communauté de villes | | 7348 | Administrations, Instituions | Communauté d&#x27;agglomération | | 7349 | Administrations, Instituions | Autre établissement public local de coopération non spécialisé ou entente | | 7351 | Administrations, Instituions | Institution interdépartementale ou entente | | 7352 | Administrations, Instituions | Institution interrégionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal à vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d&#x27;action sociale | | 7362 | Administrations, Instituions | Caisse des écoles | | 7363 | Administrations, Instituions | Caisse de crédit municipal | | 7364 | Administrations, Instituions | Etablissement d&#x27;hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et médico-social | | 7371 | Administrations, Instituions | Office public d&#x27;habitation à loyer modéré (OPHLM) | | 7372 | Administrations, Instituions | Service départemental d&#x27;incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | Régie d&#x27;une collectivité locale à caractère administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d&#x27;administration centrale | | 7383 | Administrations, Instituions | Etablissement public national à caractère scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre établissement public national d&#x27;enseignement | | 7385 | Administrations, Instituions | Autre établissement public national administratif à compétence territoriale limitée | | 7389 | Administrations, Instituions | Etablissement public national à caractère administratif | | 7410 | Administrations, Instituions | Groupement d&#x27;intérêt public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d&#x27;Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les armées | | 7470 | Administrations, Instituions | Groupement de coopération sanitaire à gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | Régime général de la sécurité sociale | | 8120 | Administrations, Instituions | Régime spécial de sécurité sociale | | 8130 | Administrations, Instituions | Institution de retraite complémentaire | | 8140 | Administrations, Instituions | Mutualité sociale agricole | | 8150 | Administrations, Instituions | Régime maladie des non-salariés non agricoles | | 8160 | Administrations, Instituions | Régime vieillesse ne dépendant pas du régime général de la sécurité sociale | | 8170 | Administrations, Instituions | Régime d&#x27;assurance chômage | | 8190 | Administrations, Instituions | Autre régime de prévoyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comité central d&#x27;entreprise | | 8311 | Association fondation | Comité d&#x27;établissement | | 8410 | Association fondation | Syndicat de salariés | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimilé | | 8470 | Association fondation | Centre technique industriel ou comité professionnel du développement économique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de prévoyance | | 8520 | Administrations, Instituions | Institution de retraite supplémentaire | | 9110 | Condominium syndicate | Syndicat de copropriété | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non déclarée | | 9220 | Association fondation | Association déclarée | | 9221 | Association fondation | Association déclarée \&quot;entreprises d&#x27;insertion par l&#x27;économique\&quot; | | 9222 | Association fondation | Association intermédiaire | | 9223 | Association fondation | Groupement d&#x27;employeurs | | 9224 | Association fondation | Association d&#x27;avocats à responsabilité professionnelle individuelle | | 9230 | Association fondation | Association déclarée  reconnue d&#x27;utilité publique | | 9240 | Association fondation | Congrégation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit privé | | 9970 | Diverse | Groupement de coopération sanitaire à gestion privée |  | [optional] 
 **legalShareCapital** | **Number**| Business share capital | [optional] 
 **legalSector** | **String**| Business sector. NAF code in France | [optional] 
 **legalAnnualTurnOver** | **String**| Business annual turnover (in k€) | [optional] 
 **legalNetIncomeRange** | **String**| Business net income range (in k€) | [optional] 
 **legalNumberOfEmployeeRange** | **String**| Business number of employees range | [optional] 
 **effectiveBeneficiary** | **Number**| Business effective beneficiary | [optional] 
 **language** | **String**| User&#x27;s prefered language (ISO 639-1) | [optional] 
 **taxNumber** | **String**| User&#x27;s tax identification number. If the taxResidence is set to another country than France, the field is mandatory. (deprecated, you must use the TaxResidence endpoint)  | [optional] 
 **taxResidence** | **String**| User&#x27;s tax residence country code (2 char code following ISO 3166 norm). (deprecated, you must use the TaxResidence endpoint)  | [optional] 
 **position** | **String**| User&#x27;s position. | [optional] 
 **personalAssets** | **String**| User&#x27;s personal assets range exprimed in K€. | [optional] 
 **activityOutsideEu** | **Number**| Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **economicSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **residentCountriesSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **involvedSanctions** | **Number**| Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **timezone** | **String**| User&#x27;s timezone (Format tz database) The time zones have unique names in the form \&quot;Area/Location\&quot;, e.g. \&quot;America/New_York\&quot;, \&quot;Europe/Paris\&quot; More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersIdKyclivenessPost"></a>
# **usersIdKyclivenessPost**
> InlineResponse201 usersIdKyclivenessPost(userId, opts)



POST KYC Liveness.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let userId = 56; // Number | The user ID
let opts = { 
  'body': "body_example" // String | URL user will be redirect to after process that will override default configured value.
};
apiInstance.usersIdKyclivenessPost(userId, opts, (error, data, response) => {
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
 **userId** | **Number**| The user ID | 
 **body** | [**String**](String.md)| URL user will be redirect to after process that will override default configured value. | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*, application/json

<a name="usersIdKyclivenessPut"></a>
# **usersIdKyclivenessPut**
> Object usersIdKyclivenessPut(userId)



PUT KYC Liveness.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let userId = 56; // Number | The user ID

apiInstance.usersIdKyclivenessPut(userId, (error, data, response) => {
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
 **userId** | **Number**| The user ID | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="usersIdKycreviewPut"></a>
# **usersIdKycreviewPut**
> InlineResponse20027 usersIdKycreviewPut(id, opts)

review user information

Perform a KYC review for given user.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's id.
let opts = { 
  'accessToken': "accessToken_example", // String | Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.usersIdKycreviewPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s id. | 
 **accessToken** | **String**| Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

