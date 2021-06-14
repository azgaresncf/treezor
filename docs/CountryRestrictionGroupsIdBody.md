# Treezor.CountryRestrictionGroupsIdBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the country restriction group | [optional] 
**status** | **String** | Status of the country group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**countries** | **[Number]** | Array of countries | [optional] 
**startDate** | **String** | The date at which the country restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 
**fields** | **[String]** | List of the object&#x27;s properties you want to pick up. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)

