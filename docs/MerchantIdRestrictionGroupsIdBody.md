# Treezor.MerchantIdRestrictionGroupsIdBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the merchant ID restriction group | [optional] 
**status** | **String** | Status of the merchant ID restriction group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**merchants** | **[String]** | Array of merchant ID (Deprecated. Use PUT /merchantIdRestrictionGroups/{id}/DeltaUpdate/ to update merchants ID list) | [optional] 
**startDate** | **String** | The date at which the merchant ID group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)

