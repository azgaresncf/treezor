# Treezor.AcquirerMerchantIdGroupsIdBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the acquirer merchant ID restriction group | [optional] 
**status** | **String** | Status of the acquirer merchant ID restriction group | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] [default to true]
**list** | **Object** | Edit the merchant ID list for a restriction group in the system (delta between current merchants list and your new merchants list). | [optional] 
**startDate** | **String** | The date at which the merchant ID group will be take into account. Format YYYY-MM-DD HH:MM:SS | [optional] 
**operation** | **String** | Action to do with merchants id list, Mandatory if merchants list are setted | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `VALIDATED` (value: `"VALIDATED"`)
* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)


<a name="OperationEnum"></a>
## Enum: OperationEnum

* `add` (value: `"add"`)
* `remove` (value: `"remove"`)

