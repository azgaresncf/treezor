# Treezor.InlineResponse20014Mandates

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandateId** | **Number** |  | [optional] 
**title** | **String** |  | [optional] 
**legalInformations** | **String** |  | [optional] 
**uniqueMandateReference** | **String** |  | [optional] 
**mandateStatus** | **String** |  | [optional] 
**userId** | **Number** |  | [optional] 
**debtorName** | **String** |  | [optional] 
**debtorAddress** | **String** |  | [optional] 
**debtorCity** | **String** |  | [optional] 
**debtorZipCode** | **String** |  | [optional] 
**debtorCountry** | **String** |  | [optional] 
**debtorIban** | **String** |  | [optional] 
**debtorBic** | **String** |  | [optional] 
**sequenceType** | **String** |  | [optional] 
**creditorName** | **String** |  | [optional] 
**sepaCreditorIdentifier** | **String** |  | [optional] 
**creditorAddress** | **String** |  | [optional] 
**creditorCity** | **String** |  | [optional] 
**creditorZipCode** | **String** |  | [optional] 
**creditorCountry** | **String** |  | [optional] 
**signatureDate** | **String** | Date YYYY-MM-DD | [optional] 
**debtorSignatureIp** | **String** |  | [optional] 
**signed** | **Number** |  | [optional] 
**debtorIdentificationCode** | **String** |  | [optional] 
**debtorReferencePartyName** | **String** |  | [optional] 
**debtorReferenceIdentificationCode** | **String** |  | [optional] 
**creditorReferencePartyName** | **String** |  | [optional] 
**creditorReferenceIdentificationCode** | **String** |  | [optional] 
**contractIdentificationNumber** | **String** |  | [optional] 
**contractDescription** | **String** |  | [optional] 
**isPaper** | **Boolean** |  | [optional] 
**sddType** | **String** |  | [optional] 
**revocationSignatureDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**createdIp** | **String** |  | [optional] 
**createdDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**modifiedDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 

<a name="MandateStatusEnum"></a>
## Enum: MandateStatusEnum

* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)
* `VALIDATED` (value: `"VALIDATED"`)


<a name="SequenceTypeEnum"></a>
## Enum: SequenceTypeEnum

* `oneOff` (value: `"one-off"`)
* `recurrent` (value: `"recurrent"`)


<a name="SddTypeEnum"></a>
## Enum: SddTypeEnum

* `core` (value: `"core"`)
* `b2b` (value: `"b2b"`)

