# Treezor.MerchantIdRestrictionGroupsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the Merchant ID group | 
**status** | **String** | Status of the Merchant ID group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**merchants** | **[String]** | Array of Merchant ID | 
**startDate** | **String** | The date at which the Merchant ID restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)

