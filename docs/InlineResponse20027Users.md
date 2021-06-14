# Treezor.InlineResponse20027Users

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **Number** |  | [optional] 
**userTypeId** | **Number** |  | [optional] 
**userStatus** | **String** |  | [optional] 
**userTag** | **String** |  | [optional] 
**parentUserId** | **Number** |  | [optional] 
**parentType** | **String** |  | [optional] 
**controllingPersonType** | **Number** |  | [optional] 
**employeeType** | **Number** |  | [optional] 
**specifiedUSPerson** | **Number** |  | [optional] 
**title** | **String** |  | [optional] 
**firstname** | **String** |  | [optional] 
**lastname** | **String** |  | [optional] 
**middleNames** | **String** |  | [optional] 
**birthday** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**address1** | **String** |  | [optional] 
**address2** | **String** |  | [optional] 
**address3** | **String** |  | [optional] 
**postcode** | **String** |  | [optional] 
**city** | **String** |  | [optional] 
**state** | **String** |  | [optional] 
**country** | **String** | Format ISO 3166-1 alpha-2 | [optional] 
**countryName** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**mobile** | **String** |  | [optional] 
**nationality** | **String** |  | [optional] 
**nationalityOther** | **String** |  | [optional] 
**placeOfBirth** | **String** |  | [optional] 
**birthCountry** | **String** | Format ISO 3166-1 alpha-2 | [optional] 
**occupation** | **String** |  | [optional] 
**incomeRange** | **String** |  | [optional] 
**legalName** | **String** |  | [optional] 
**legalNameEmbossed** | **String** |  | [optional] 
**legalRegistrationNumber** | **String** |  | [optional] 
**legalTvaNumber** | **String** |  | [optional] 
**legalRegistrationDate** | **String** | Date YYYY-MM-DD | [optional] 
**legalForm** | **String** |  | [optional] 
**legalShareCapital** | **Number** |  | [optional] 
**legalSector** | **String** |  | [optional] 
**legalAnnualTurnOver** | **String** |  | [optional] 
**legalNetIncomeRange** | **String** |  | [optional] 
**legalNumberOfEmployeeRange** | **String** |  | [optional] 
**effectiveBeneficiary** | **Number** |  | [optional] 
**kycLevel** | **Number** | | Value | Description | |----|----| | 0 | NONE | | 1 | LIGHT | | 2 | REGULAR | | 4 | REFUSED |  | [optional] 
**kycReview** | **Number** | | Value | Description | |----|----| | 0 | NONE | | 1 | PENDING | | 2 | VALIDATED | | 3 | REFUSED |  | [optional] 
**kycReviewComment** | **String** |  | [optional] 
**isFreezed** | **Number** | deprecated | [optional] 
**isFrozen** | **Number** |  | [optional] 
**language** | **String** |  | [optional] 
**optInMailing** | **Number** |  | [optional] 
**sepaCreditorIdentifier** | **String** | SEPA Creditor Identifier of the user,is 13 characters long, where characters | 2 | ISO Country Code (FR – France)                                         | | 4 | Check Digit                                                            | | 7 | Creditor Business Code – you (Creditor) choose this. The default is ZZZ| | [optional] 
**taxNumber** | **String** |  | [optional] 
**taxResidence** | **String** |  | [optional] 
**position** | **String** |  | [optional] 
**personalAssets** | **String** |  | [optional] 
**activityOutsideEu** | **Number** |  | [optional] 
**economicSanctions** | **Number** |  | [optional] 
**residentCountriesSanctions** | **Number** |  | [optional] 
**involvedSanctions** | **Number** |  | [optional] 
**sanctionsQuestionnaireDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**timezone** | **String** |  | [optional] 
**createdDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**modifiedDate** | **String** | Date YYYY-MM-DD HH:MM:SS | [optional] 
**walletCount** | **Number** |  | [optional] 
**payinCount** | **Number** |  | [optional] 
**totalRows** | **Number** |  | [optional] 

<a name="UserStatusEnum"></a>
## Enum: UserStatusEnum

* `PENDING` (value: `"PENDING"`)
* `CANCELED` (value: `"CANCELED"`)
* `VALIDATED` (value: `"VALIDATED"`)


<a name="ParentTypeEnum"></a>
## Enum: ParentTypeEnum

* `shareholder` (value: `"shareholder"`)
* `employee` (value: `"employee"`)
* `leader` (value: `"leader"`)


<a name="TitleEnum"></a>
## Enum: TitleEnum

* `M` (value: `"M"`)
* `MME` (value: `"MME"`)
* `MLLE` (value: `"MLLE"`)

