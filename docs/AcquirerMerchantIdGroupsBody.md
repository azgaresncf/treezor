# Treezor.AcquirerMerchantIdGroupsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the Acquirer Merchant ID group | 
**status** | **String** | Status of the Acquirer Merchant ID group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**list** | **Object** | Array of Acquire ID containing Array of  Merchant ID | [optional] 
**startDate** | **String** | The date at which the Merchant ID restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)

