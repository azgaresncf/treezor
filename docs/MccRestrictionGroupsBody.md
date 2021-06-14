# Treezor.MccRestrictionGroupsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the MCC restriction group | 
**status** | **String** | Status of the MCC group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**mcc** | **[Number]** | Array of MCC | 
**startDate** | **String** | The date at which the MCC restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)

