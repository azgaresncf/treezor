# Treezor.MccRestrictionGroupsIdBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the MCC restriction group | [optional] 
**status** | **String** | Status of the MCC group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**mcc** | **[Number]** | Array of MCC | [optional] 
**startDate** | **String** | The date at which the MCC restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 
**fields** | **[String]** | List of the object&#x27;s properties you want to pick up. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)

