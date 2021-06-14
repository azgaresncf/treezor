# Treezor.BusinesssearchsBusinessinformations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legalName** | **String** | Business commercial name. | [optional] 
**phone** | **String** | Business phone number. | [optional] 
**legalTvaNumber** | **String** | Business VAT number. | [optional] 
**legalRegistrationNumber** | **String** | Business registration number. | [optional] 
**status** | **String** | | Code | Description | | ---- | ----------- | |  D   | Deleted     | |  N   | Company non diffusible (Insee) | |  I   | Inactive (Insee) | |  A   | Economically active | |  C   | Closed | |  T   | Transfered | |  S   | Economically stopped (Insee) | |  L   | Liquidation | |  O   | Dormant company |  | [optional] 
**officeType** | **Number** | | Code | Description | | ---- | ----        | |  0   | Secondary establishment | |  1   | Headquarter |  | [optional] 
**safeNumber** | **String** | Business SAFE number. | [optional] 
**activityType** | **String** | Business sector. Code NAF in France. | [optional] 
**externalId** | **String** | Business external id. | [optional] 
**address1** | **String** | Business&#x27; street. | [optional] 
**postcode** | **String** | Business&#x27; postal code. | [optional] 
**city** | **String** | Business&#x27; city. | [optional] 
**state** | **String** | Business&#x27; province. | [optional] 
**country** | **String** | Business&#x27; country. | [optional] 
**tradename** | **String** | Business trade name | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `D` (value: `"D"`)
* `N` (value: `"N"`)
* `I` (value: `"I"`)
* `A` (value: `"A"`)
* `C` (value: `"C"`)
* `T` (value: `"T"`)
* `S` (value: `"S"`)
* `L` (value: `"L"`)
* `O` (value: `"O"`)

