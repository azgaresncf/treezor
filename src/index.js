/*
 * Treezor
 * Treezor API.  more info [here](https://www.treezor.com). 
 *
 * OpenAPI spec version: 0.1.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {AcquirerMerchantIdGroupsBody} from './model/AcquirerMerchantIdGroupsBody';
import {AcquirerMerchantIdGroupsIdBody} from './model/AcquirerMerchantIdGroupsIdBody';
import {BeneficiariesBody} from './model/BeneficiariesBody';
import {BeneficiariesIdBody} from './model/BeneficiariesIdBody';
import {BeneficiariesSddB2bWhitelist} from './model/BeneficiariesSddB2bWhitelist';
import {BusinesssearchsBusinessinformations} from './model/BusinesssearchsBusinessinformations';
import {CardReservesAddToBody} from './model/CardReservesAddToBody';
import {CardReservesCheckBody} from './model/CardReservesCheckBody';
import {CountryRestrictionGroupsBody} from './model/CountryRestrictionGroupsBody';
import {CountryRestrictionGroupsIdBody} from './model/CountryRestrictionGroupsIdBody';
import {IdDeltaUpdateBody} from './model/IdDeltaUpdateBody';
import {IdPresenceCheckBody} from './model/IdPresenceCheckBody';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse20010} from './model/InlineResponse20010';
import {InlineResponse20010Cardtransactions} from './model/InlineResponse20010Cardtransactions';
import {InlineResponse20011} from './model/InlineResponse20011';
import {InlineResponse20011CountryRestrictionGroups} from './model/InlineResponse20011CountryRestrictionGroups';
import {InlineResponse20012} from './model/InlineResponse20012';
import {InlineResponse20012Documents} from './model/InlineResponse20012Documents';
import {InlineResponse20013} from './model/InlineResponse20013';
import {InlineResponse20013IssuerInitiatedDigitizationDatas} from './model/InlineResponse20013IssuerInitiatedDigitizationDatas';
import {InlineResponse20014} from './model/InlineResponse20014';
import {InlineResponse20014Mandates} from './model/InlineResponse20014Mandates';
import {InlineResponse20015} from './model/InlineResponse20015';
import {InlineResponse20015MccRestrictionGroups} from './model/InlineResponse20015MccRestrictionGroups';
import {InlineResponse20016} from './model/InlineResponse20016';
import {InlineResponse20016MerchantIdRestrictionGroups} from './model/InlineResponse20016MerchantIdRestrictionGroups';
import {InlineResponse20017} from './model/InlineResponse20017';
import {InlineResponse20017Payins} from './model/InlineResponse20017Payins';
import {InlineResponse20018} from './model/InlineResponse20018';
import {InlineResponse20018Payinrefunds} from './model/InlineResponse20018Payinrefunds';
import {InlineResponse20019} from './model/InlineResponse20019';
import {InlineResponse20019Payouts} from './model/InlineResponse20019Payouts';
import {InlineResponse2001Balances} from './model/InlineResponse2001Balances';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse20020} from './model/InlineResponse20020';
import {InlineResponse20020PayoutRefunds} from './model/InlineResponse20020PayoutRefunds';
import {InlineResponse20021} from './model/InlineResponse20021';
import {InlineResponse20021Recallrs} from './model/InlineResponse20021Recallrs';
import {InlineResponse20022} from './model/InlineResponse20022';
import {InlineResponse20022TaxResidences} from './model/InlineResponse20022TaxResidences';
import {InlineResponse20023} from './model/InlineResponse20023';
import {InlineResponse20023Transactions} from './model/InlineResponse20023Transactions';
import {InlineResponse20024} from './model/InlineResponse20024';
import {InlineResponse20024Transfers} from './model/InlineResponse20024Transfers';
import {InlineResponse20025} from './model/InlineResponse20025';
import {InlineResponse20026} from './model/InlineResponse20026';
import {InlineResponse20026Transfers} from './model/InlineResponse20026Transfers';
import {InlineResponse20027} from './model/InlineResponse20027';
import {InlineResponse20027Users} from './model/InlineResponse20027Users';
import {InlineResponse20028} from './model/InlineResponse20028';
import {InlineResponse20028Virtualibans} from './model/InlineResponse20028Virtualibans';
import {InlineResponse20029} from './model/InlineResponse20029';
import {InlineResponse20029Wallets} from './model/InlineResponse20029Wallets';
import {InlineResponse2002Bankaccounts} from './model/InlineResponse2002Bankaccounts';
import {InlineResponse2003} from './model/InlineResponse2003';
import {InlineResponse2003Beneficiaries} from './model/InlineResponse2003Beneficiaries';
import {InlineResponse2004} from './model/InlineResponse2004';
import {InlineResponse2005} from './model/InlineResponse2005';
import {InlineResponse2005Businessinformations} from './model/InlineResponse2005Businessinformations';
import {InlineResponse2005Users} from './model/InlineResponse2005Users';
import {InlineResponse2006} from './model/InlineResponse2006';
import {InlineResponse2006Cards} from './model/InlineResponse2006Cards';
import {InlineResponse2006RestrictionGroupLimits} from './model/InlineResponse2006RestrictionGroupLimits';
import {InlineResponse2007} from './model/InlineResponse2007';
import {InlineResponse2007Cardimages} from './model/InlineResponse2007Cardimages';
import {InlineResponse2008} from './model/InlineResponse2008';
import {InlineResponse2008Cards} from './model/InlineResponse2008Cards';
import {InlineResponse2009} from './model/InlineResponse2009';
import {InlineResponse200AcquirerMerchantIdGroups} from './model/InlineResponse200AcquirerMerchantIdGroups';
import {InlineResponse201} from './model/InlineResponse201';
import {InlineResponse201Users} from './model/InlineResponse201Users';
import {InlineResponseDefault} from './model/InlineResponseDefault';
import {InlineResponseDefault1} from './model/InlineResponseDefault1';
import {IssuerInitiatedDigitizationDatasAdditionnalData} from './model/IssuerInitiatedDigitizationDatasAdditionnalData';
import {IssuerInitiatedDigitizationDatasBody} from './model/IssuerInitiatedDigitizationDatasBody';
import {MccRestrictionGroupsBody} from './model/MccRestrictionGroupsBody';
import {MccRestrictionGroupsIdBody} from './model/MccRestrictionGroupsIdBody';
import {MerchantIdRestrictionGroupsBody} from './model/MerchantIdRestrictionGroupsBody';
import {MerchantIdRestrictionGroupsIdBody} from './model/MerchantIdRestrictionGroupsIdBody';
import {RestrictionGroupLimits} from './model/RestrictionGroupLimits';
import {AcquirerMerchantIdGroupsApi} from './api/AcquirerMerchantIdGroupsApi';
import {BalanceApi} from './api/BalanceApi';
import {BankaccountApi} from './api/BankaccountApi';
import {BeneficiariesApi} from './api/BeneficiariesApi';
import {BusinessApi} from './api/BusinessApi';
import {CardApi} from './api/CardApi';
import {CardDigitalizationsApi} from './api/CardDigitalizationsApi';
import {CardReserveApi} from './api/CardReserveApi';
import {CardtransactionApi} from './api/CardtransactionApi';
import {CountryRestrictionGroupsApi} from './api/CountryRestrictionGroupsApi';
import {DocumentApi} from './api/DocumentApi';
import {HeartbeatApi} from './api/HeartbeatApi';
import {IssuerInitiatedDigitizationDataApi} from './api/IssuerInitiatedDigitizationDataApi';
import {MandateApi} from './api/MandateApi';
import {MccRestrictionGroupsApi} from './api/MccRestrictionGroupsApi';
import {MerchantIdRestrictionGroupsApi} from './api/MerchantIdRestrictionGroupsApi';
import {PayinApi} from './api/PayinApi';
import {PayinrefundApi} from './api/PayinrefundApi';
import {PayoutApi} from './api/PayoutApi';
import {PayoutRefundsApi} from './api/PayoutRefundsApi';
import {RecallRApi} from './api/RecallRApi';
import {TaxResidenceApi} from './api/TaxResidenceApi';
import {TransactionApi} from './api/TransactionApi';
import {TransferApi} from './api/TransferApi';
import {TransferrefundApi} from './api/TransferrefundApi';
import {UserApi} from './api/UserApi';
import {VirtualibansApi} from './api/VirtualibansApi';
import {WalletApi} from './api/WalletApi';

/**
* Treezor_API_more_info__here_httpswww_treezor_com_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Treezor = require('index'); // See note below*.
* var xxxSvc = new Treezor.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Treezor.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Treezor.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Treezor.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AcquirerMerchantIdGroupsBody model constructor.
     * @property {module:model/AcquirerMerchantIdGroupsBody}
     */
    AcquirerMerchantIdGroupsBody,

    /**
     * The AcquirerMerchantIdGroupsIdBody model constructor.
     * @property {module:model/AcquirerMerchantIdGroupsIdBody}
     */
    AcquirerMerchantIdGroupsIdBody,

    /**
     * The BeneficiariesBody model constructor.
     * @property {module:model/BeneficiariesBody}
     */
    BeneficiariesBody,

    /**
     * The BeneficiariesIdBody model constructor.
     * @property {module:model/BeneficiariesIdBody}
     */
    BeneficiariesIdBody,

    /**
     * The BeneficiariesSddB2bWhitelist model constructor.
     * @property {module:model/BeneficiariesSddB2bWhitelist}
     */
    BeneficiariesSddB2bWhitelist,

    /**
     * The BusinesssearchsBusinessinformations model constructor.
     * @property {module:model/BusinesssearchsBusinessinformations}
     */
    BusinesssearchsBusinessinformations,

    /**
     * The CardReservesAddToBody model constructor.
     * @property {module:model/CardReservesAddToBody}
     */
    CardReservesAddToBody,

    /**
     * The CardReservesCheckBody model constructor.
     * @property {module:model/CardReservesCheckBody}
     */
    CardReservesCheckBody,

    /**
     * The CountryRestrictionGroupsBody model constructor.
     * @property {module:model/CountryRestrictionGroupsBody}
     */
    CountryRestrictionGroupsBody,

    /**
     * The CountryRestrictionGroupsIdBody model constructor.
     * @property {module:model/CountryRestrictionGroupsIdBody}
     */
    CountryRestrictionGroupsIdBody,

    /**
     * The IdDeltaUpdateBody model constructor.
     * @property {module:model/IdDeltaUpdateBody}
     */
    IdDeltaUpdateBody,

    /**
     * The IdPresenceCheckBody model constructor.
     * @property {module:model/IdPresenceCheckBody}
     */
    IdPresenceCheckBody,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20010Cardtransactions model constructor.
     * @property {module:model/InlineResponse20010Cardtransactions}
     */
    InlineResponse20010Cardtransactions,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20011CountryRestrictionGroups model constructor.
     * @property {module:model/InlineResponse20011CountryRestrictionGroups}
     */
    InlineResponse20011CountryRestrictionGroups,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20012Documents model constructor.
     * @property {module:model/InlineResponse20012Documents}
     */
    InlineResponse20012Documents,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20013IssuerInitiatedDigitizationDatas model constructor.
     * @property {module:model/InlineResponse20013IssuerInitiatedDigitizationDatas}
     */
    InlineResponse20013IssuerInitiatedDigitizationDatas,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20014Mandates model constructor.
     * @property {module:model/InlineResponse20014Mandates}
     */
    InlineResponse20014Mandates,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20015MccRestrictionGroups model constructor.
     * @property {module:model/InlineResponse20015MccRestrictionGroups}
     */
    InlineResponse20015MccRestrictionGroups,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20016MerchantIdRestrictionGroups model constructor.
     * @property {module:model/InlineResponse20016MerchantIdRestrictionGroups}
     */
    InlineResponse20016MerchantIdRestrictionGroups,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20017Payins model constructor.
     * @property {module:model/InlineResponse20017Payins}
     */
    InlineResponse20017Payins,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20018Payinrefunds model constructor.
     * @property {module:model/InlineResponse20018Payinrefunds}
     */
    InlineResponse20018Payinrefunds,

    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019,

    /**
     * The InlineResponse20019Payouts model constructor.
     * @property {module:model/InlineResponse20019Payouts}
     */
    InlineResponse20019Payouts,

    /**
     * The InlineResponse2001Balances model constructor.
     * @property {module:model/InlineResponse2001Balances}
     */
    InlineResponse2001Balances,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020,

    /**
     * The InlineResponse20020PayoutRefunds model constructor.
     * @property {module:model/InlineResponse20020PayoutRefunds}
     */
    InlineResponse20020PayoutRefunds,

    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021,

    /**
     * The InlineResponse20021Recallrs model constructor.
     * @property {module:model/InlineResponse20021Recallrs}
     */
    InlineResponse20021Recallrs,

    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022,

    /**
     * The InlineResponse20022TaxResidences model constructor.
     * @property {module:model/InlineResponse20022TaxResidences}
     */
    InlineResponse20022TaxResidences,

    /**
     * The InlineResponse20023 model constructor.
     * @property {module:model/InlineResponse20023}
     */
    InlineResponse20023,

    /**
     * The InlineResponse20023Transactions model constructor.
     * @property {module:model/InlineResponse20023Transactions}
     */
    InlineResponse20023Transactions,

    /**
     * The InlineResponse20024 model constructor.
     * @property {module:model/InlineResponse20024}
     */
    InlineResponse20024,

    /**
     * The InlineResponse20024Transfers model constructor.
     * @property {module:model/InlineResponse20024Transfers}
     */
    InlineResponse20024Transfers,

    /**
     * The InlineResponse20025 model constructor.
     * @property {module:model/InlineResponse20025}
     */
    InlineResponse20025,

    /**
     * The InlineResponse20026 model constructor.
     * @property {module:model/InlineResponse20026}
     */
    InlineResponse20026,

    /**
     * The InlineResponse20026Transfers model constructor.
     * @property {module:model/InlineResponse20026Transfers}
     */
    InlineResponse20026Transfers,

    /**
     * The InlineResponse20027 model constructor.
     * @property {module:model/InlineResponse20027}
     */
    InlineResponse20027,

    /**
     * The InlineResponse20027Users model constructor.
     * @property {module:model/InlineResponse20027Users}
     */
    InlineResponse20027Users,

    /**
     * The InlineResponse20028 model constructor.
     * @property {module:model/InlineResponse20028}
     */
    InlineResponse20028,

    /**
     * The InlineResponse20028Virtualibans model constructor.
     * @property {module:model/InlineResponse20028Virtualibans}
     */
    InlineResponse20028Virtualibans,

    /**
     * The InlineResponse20029 model constructor.
     * @property {module:model/InlineResponse20029}
     */
    InlineResponse20029,

    /**
     * The InlineResponse20029Wallets model constructor.
     * @property {module:model/InlineResponse20029Wallets}
     */
    InlineResponse20029Wallets,

    /**
     * The InlineResponse2002Bankaccounts model constructor.
     * @property {module:model/InlineResponse2002Bankaccounts}
     */
    InlineResponse2002Bankaccounts,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2003Beneficiaries model constructor.
     * @property {module:model/InlineResponse2003Beneficiaries}
     */
    InlineResponse2003Beneficiaries,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2005Businessinformations model constructor.
     * @property {module:model/InlineResponse2005Businessinformations}
     */
    InlineResponse2005Businessinformations,

    /**
     * The InlineResponse2005Users model constructor.
     * @property {module:model/InlineResponse2005Users}
     */
    InlineResponse2005Users,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2006Cards model constructor.
     * @property {module:model/InlineResponse2006Cards}
     */
    InlineResponse2006Cards,

    /**
     * The InlineResponse2006RestrictionGroupLimits model constructor.
     * @property {module:model/InlineResponse2006RestrictionGroupLimits}
     */
    InlineResponse2006RestrictionGroupLimits,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2007Cardimages model constructor.
     * @property {module:model/InlineResponse2007Cardimages}
     */
    InlineResponse2007Cardimages,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2008Cards model constructor.
     * @property {module:model/InlineResponse2008Cards}
     */
    InlineResponse2008Cards,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The InlineResponse200AcquirerMerchantIdGroups model constructor.
     * @property {module:model/InlineResponse200AcquirerMerchantIdGroups}
     */
    InlineResponse200AcquirerMerchantIdGroups,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse201Users model constructor.
     * @property {module:model/InlineResponse201Users}
     */
    InlineResponse201Users,

    /**
     * The InlineResponseDefault model constructor.
     * @property {module:model/InlineResponseDefault}
     */
    InlineResponseDefault,

    /**
     * The InlineResponseDefault1 model constructor.
     * @property {module:model/InlineResponseDefault1}
     */
    InlineResponseDefault1,

    /**
     * The IssuerInitiatedDigitizationDatasAdditionnalData model constructor.
     * @property {module:model/IssuerInitiatedDigitizationDatasAdditionnalData}
     */
    IssuerInitiatedDigitizationDatasAdditionnalData,

    /**
     * The IssuerInitiatedDigitizationDatasBody model constructor.
     * @property {module:model/IssuerInitiatedDigitizationDatasBody}
     */
    IssuerInitiatedDigitizationDatasBody,

    /**
     * The MccRestrictionGroupsBody model constructor.
     * @property {module:model/MccRestrictionGroupsBody}
     */
    MccRestrictionGroupsBody,

    /**
     * The MccRestrictionGroupsIdBody model constructor.
     * @property {module:model/MccRestrictionGroupsIdBody}
     */
    MccRestrictionGroupsIdBody,

    /**
     * The MerchantIdRestrictionGroupsBody model constructor.
     * @property {module:model/MerchantIdRestrictionGroupsBody}
     */
    MerchantIdRestrictionGroupsBody,

    /**
     * The MerchantIdRestrictionGroupsIdBody model constructor.
     * @property {module:model/MerchantIdRestrictionGroupsIdBody}
     */
    MerchantIdRestrictionGroupsIdBody,

    /**
     * The RestrictionGroupLimits model constructor.
     * @property {module:model/RestrictionGroupLimits}
     */
    RestrictionGroupLimits,

    /**
    * The AcquirerMerchantIdGroupsApi service constructor.
    * @property {module:api/AcquirerMerchantIdGroupsApi}
    */
    AcquirerMerchantIdGroupsApi,

    /**
    * The BalanceApi service constructor.
    * @property {module:api/BalanceApi}
    */
    BalanceApi,

    /**
    * The BankaccountApi service constructor.
    * @property {module:api/BankaccountApi}
    */
    BankaccountApi,

    /**
    * The BeneficiariesApi service constructor.
    * @property {module:api/BeneficiariesApi}
    */
    BeneficiariesApi,

    /**
    * The BusinessApi service constructor.
    * @property {module:api/BusinessApi}
    */
    BusinessApi,

    /**
    * The CardApi service constructor.
    * @property {module:api/CardApi}
    */
    CardApi,

    /**
    * The CardDigitalizationsApi service constructor.
    * @property {module:api/CardDigitalizationsApi}
    */
    CardDigitalizationsApi,

    /**
    * The CardReserveApi service constructor.
    * @property {module:api/CardReserveApi}
    */
    CardReserveApi,

    /**
    * The CardtransactionApi service constructor.
    * @property {module:api/CardtransactionApi}
    */
    CardtransactionApi,

    /**
    * The CountryRestrictionGroupsApi service constructor.
    * @property {module:api/CountryRestrictionGroupsApi}
    */
    CountryRestrictionGroupsApi,

    /**
    * The DocumentApi service constructor.
    * @property {module:api/DocumentApi}
    */
    DocumentApi,

    /**
    * The HeartbeatApi service constructor.
    * @property {module:api/HeartbeatApi}
    */
    HeartbeatApi,

    /**
    * The IssuerInitiatedDigitizationDataApi service constructor.
    * @property {module:api/IssuerInitiatedDigitizationDataApi}
    */
    IssuerInitiatedDigitizationDataApi,

    /**
    * The MandateApi service constructor.
    * @property {module:api/MandateApi}
    */
    MandateApi,

    /**
    * The MccRestrictionGroupsApi service constructor.
    * @property {module:api/MccRestrictionGroupsApi}
    */
    MccRestrictionGroupsApi,

    /**
    * The MerchantIdRestrictionGroupsApi service constructor.
    * @property {module:api/MerchantIdRestrictionGroupsApi}
    */
    MerchantIdRestrictionGroupsApi,

    /**
    * The PayinApi service constructor.
    * @property {module:api/PayinApi}
    */
    PayinApi,

    /**
    * The PayinrefundApi service constructor.
    * @property {module:api/PayinrefundApi}
    */
    PayinrefundApi,

    /**
    * The PayoutApi service constructor.
    * @property {module:api/PayoutApi}
    */
    PayoutApi,

    /**
    * The PayoutRefundsApi service constructor.
    * @property {module:api/PayoutRefundsApi}
    */
    PayoutRefundsApi,

    /**
    * The RecallRApi service constructor.
    * @property {module:api/RecallRApi}
    */
    RecallRApi,

    /**
    * The TaxResidenceApi service constructor.
    * @property {module:api/TaxResidenceApi}
    */
    TaxResidenceApi,

    /**
    * The TransactionApi service constructor.
    * @property {module:api/TransactionApi}
    */
    TransactionApi,

    /**
    * The TransferApi service constructor.
    * @property {module:api/TransferApi}
    */
    TransferApi,

    /**
    * The TransferrefundApi service constructor.
    * @property {module:api/TransferrefundApi}
    */
    TransferrefundApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VirtualibansApi service constructor.
    * @property {module:api/VirtualibansApi}
    */
    VirtualibansApi,

    /**
    * The WalletApi service constructor.
    * @property {module:api/WalletApi}
    */
    WalletApi
};