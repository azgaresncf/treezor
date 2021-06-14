# Treezor.InlineResponse20024Transfers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transferId** | **Number** |  | [optional] 
**transferStatus** | **String** |  | [optional] 
**transferTag** | **String** |  | [optional] 
**walletId** | **Number** |  | [optional] 
**walletTypeId** | **Number** | | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) |  | [optional] 
**beneficiaryWalletId** | **Number** |  | [optional] 
**beneficiaryWalletTypeId** | **Number** | | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) |  | [optional] 
**transferDate** | **String** | Date YYYY-MM-DD | [optional] 
**walletEventName** | **String** |  | [optional] 
**walletAlias** | **String** |  | [optional] 
**beneficiaryWalletEventName** | **String** |  | [optional] 
**beneficiaryWalletAlias** | **String** |  | [optional] 
**amount** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**label** | **String** |  | [optional] 
**transferTypeId** | **Number** | Transfer type  | Status | Description | | ------ | -------     | | 1 | Wallet to wallet | | 2 | Card transaction | | 3 | Client fees | | 4 | Credit note |  | [optional] 
**createdDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**modifiedDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**totalRows** | **Number** |  | [optional] 

<a name="TransferStatusEnum"></a>
## Enum: TransferStatusEnum

* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)
* `VALIDATED` (value: `"VALIDATED"`)

