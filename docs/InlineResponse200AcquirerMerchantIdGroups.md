# Treezor.InlineResponse200AcquirerMerchantIdGroups

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Acquirer Merchant ID Group&#x27;s id | [optional] 
**name** | **String** | Acquirer Merchant ID Group&#x27;s name | [optional] 
**isWhitelist** | **Boolean** | determines whether it will be a black or a white list | [optional] 
**merchants** | **[[String]]** | Array of Acquirer ID containing Array of Merchant ID | [optional] 
**status** | **String** | status of the Acquirer Merchant ID group | [optional] 
**startDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**createdDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)
* `VALIDATED` (value: `"VALIDATED"`)

