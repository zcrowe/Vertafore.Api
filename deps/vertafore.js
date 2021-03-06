﻿

/*//////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated by JaySvcUtil.exe http://JayData.org for more info        /////////
//////                             oData V1.1                                    /////////
//////////////////////////////////////////////////////////////////////////////////////*/
(function(global, $data, undefined) {

    
  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Activity', {
     'Id': { 'key':true,'type':'Edm.Int64','nullable':false,'required':true },
     'Priority': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Status': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Type': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Category': { 'type':'Edm.Int32','nullable':false,'required':true },
     'CreatedDate': { 'type':'Edm.DateTime' },
     'ModifiedDate': { 'type':'Edm.DateTime' },
     'Start': { 'type':'Edm.DateTime' },
     'End': { 'type':'Edm.DateTime' },
     'Subject': { 'type':'Edm.String' },
     'Note': { 'type':'Edm.String' },
     'Phone': { 'type':'Edm.String' },
     'ContactName': { 'type':'Edm.String' },
     'Owner': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.User','inverseProperty':'$$unbound' },
     'Contact': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.Contact','inverseProperty':'$$unbound' },
     'Client': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.Client','inverseProperty':'$$unbound' },
     'Opportunity': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.Opportunity','inverseProperty':'$$unbound' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Address', {
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Type': { 'type':'Edm.Int32' },
     'Status': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Description': { 'type':'Edm.String' },
     'IsPrimary': { 'type':'Edm.Boolean','nullable':false,'required':true },
     'IsMailing': { 'type':'Edm.Boolean','nullable':false,'required':true },
     'AddressLine1': { 'type':'Edm.String' },
     'AddressLine2': { 'type':'Edm.String' },
     'City': { 'type':'Edm.String' },
     'County': { 'type':'Edm.String' },
     'CountryCode': { 'type':'Edm.String' },
     'Zip': { 'type':'Edm.String' },
     'GeoTag': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.GeoTag','nullable':false,'required':true },
     'State': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.State','inverseProperty':'$$unbound' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.GeoTag', {
     'Latitude': { 'type':'Edm.Single' },
     'Longitude': { 'type':'Edm.Single' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Claim', {
     'Id': { 'key':true,'type':'Edm.Guid','nullable':false,'required':true },
     'Number': { 'type':'Edm.String' },
     'PolicyId': { 'type':'Edm.Guid','nullable':false,'required':true },
     'PolicyNumber': { 'type':'Edm.String' },
     'LineOfBusinessCode': { 'type':'Edm.String' },
     'LossDate': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'ReportedDate': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'Status': { 'type':'Edm.String' },
     'CauseOfLoss': { 'type':'Edm.String' },
     'Description': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Carrier', {
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Code': { 'type':'Edm.String' },
     'Description': { 'type':'Edm.String' },
     'CarrierType': { 'type':'Edm.Int32','nullable':false,'required':true },
     'IsActive': { 'type':'Edm.Boolean','nullable':false,'required':true }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Client', {
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Type': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Status': { 'type':'Edm.Int32','nullable':false,'required':true },
     'AgencyClientId': { 'type':'Edm.String' },
     'ClientSince': { 'type':'Edm.Int32' },
     'IsProspect': { 'type':'Edm.Boolean','nullable':false,'required':true },
     'LastModified': { 'type':'Edm.DateTime' },
     'Note': { 'type':'Edm.String' },
     'PersonalDetail': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.ClientPersonalDetail','nullable':false,'required':true },
     'CommercialDetail': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.ClientCommercialDetail','nullable':false,'required':true },
     'Activities': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Activity','inverseProperty':'$$unbound' },
     'CommunicationDetails': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.CommunicationDetail','inverseProperty':'$$unbound' },
     'Addresses': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Address','inverseProperty':'$$unbound' },
     'Opportunities': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Opportunity','inverseProperty':'$$unbound' },
     'Contacts': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Contact','inverseProperty':'$$unbound' },
     'QuestionAnswers': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.QuestionAnswer','inverseProperty':'$$unbound' },
     'Policies': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Policy','inverseProperty':'$$unbound' },
     'Claims': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Claim','inverseProperty':'$$unbound' },
     'Source': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.LeadSource','inverseProperty':'$$unbound' },
     'CreatedByUser': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.User','inverseProperty':'$$unbound' },
     'ModifiedByUser': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.User','inverseProperty':'$$unbound' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.ClientPersonalDetail', {
     'FormalSalutation': { 'type':'Edm.String' },
     'Nickname': { 'type':'Edm.String' },
     'MaritalStatus': { 'type':'Edm.Int32' },
     'Birthdate': { 'type':'Edm.DateTime' },
     'FirstName': { 'type':'Edm.String' },
     'Gender': { 'type':'Edm.Int32' },
     'LastName': { 'type':'Edm.String' },
     'MiddleName': { 'type':'Edm.String' },
     'Prefix': { 'type':'Edm.Int32' },
     'Suffix': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.ClientCommercialDetail', {
     'CompanyNameLine1': { 'type':'Edm.String' },
     'CompanyNameLine2': { 'type':'Edm.String' },
     'SicCode': { 'type':'Edm.String' },
     'EntityType': { 'type':'Edm.Int32' },
     'BusinessDescription': { 'type':'Edm.String' },
     'InBusinessSince': { 'type':'Edm.Int32' },
     'LocationCount': { 'type':'Edm.Int32' },
     'EmployeeCount': { 'type':'Edm.Int32' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.CommunicationDetail', {
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Type': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Value': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Contact', {
     'Birthdate': { 'type':'Edm.DateTime' },
     'FirstName': { 'type':'Edm.String' },
     'Gender': { 'type':'Edm.Int32' },
     'LastName': { 'type':'Edm.String' },
     'MiddleName': { 'type':'Edm.String' },
     'Prefix': { 'type':'Edm.Int32' },
     'Suffix': { 'type':'Edm.String' },
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Type': { 'type':'Edm.Int32' },
     'Status': { 'type':'Edm.Int32','nullable':false,'required':true },
     'PersonalDetail': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.ContactPersonalDetail','nullable':false,'required':true },
     'CommercialDetail': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.ContactCommercialDetail','nullable':false,'required':true },
     'CommunicationDetails': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.CommunicationDetail','inverseProperty':'$$unbound' },
     'Addresses': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Address','inverseProperty':'$$unbound' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.ContactPersonalDetail', {
     'RelationshipToProspect': { 'type':'Edm.Int32' },
     'MaritalStatus': { 'type':'Edm.Int32' },
     'SSN': { 'type':'Edm.String' },
     'PriorLastName': { 'type':'Edm.String' },
     'Nickname': { 'type':'Edm.String' },
     'Note': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.ContactCommercialDetail', {
     'Industry': { 'type':'Edm.String' },
     'Position': { 'type':'Edm.String' },
     'Description': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.LeadSource', {
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'SourceId': { 'type':'Edm.Int32','nullable':false,'required':true },
     'SubSourceId': { 'type':'Edm.Int32' },
     'Source': { 'type':'Edm.String' },
     'SubSource': { 'type':'Edm.String' },
     'Status': { 'type':'Edm.Int32','nullable':false,'required':true }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.LineOfBusiness', {
     'Id': { 'key':true,'type':'Edm.Int32','nullable':false,'required':true },
     'Code': { 'type':'Edm.String' },
     'Description': { 'type':'Edm.String' },
     'CategoryId': { 'type':'Edm.Int32','nullable':false,'required':true },
     'CategoryCode': { 'type':'Edm.String' },
     'CategoryDescription': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.LostReason', {
     'Id': { 'key':true,'type':'Edm.Int32','nullable':false,'required':true },
     'Reason': { 'type':'Edm.String' },
     'IsActive': { 'type':'Edm.Boolean','nullable':false,'required':true }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Opportunity', {
     'Id': { 'key':true,'type':'Edm.Int64','nullable':false,'required':true },
     'CurrentPolicyStatus': { 'type':'Edm.Int32' },
     'CurrentPolicyExpirationDate': { 'type':'Edm.DateTime' },
     'CurrentPolicyPremium': { 'type':'Edm.Decimal' },
     'Status': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Premium': { 'type':'Edm.Decimal' },
     'Revenue': { 'type':'Edm.Decimal' },
     'Commission': { 'type':'Edm.Decimal' },
     'ProbabilityOfClose': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Note': { 'type':'Edm.String' },
     'CreatedDate': { 'type':'Edm.DateTime' },
     'ModifiedDate': { 'type':'Edm.DateTime' },
     'LostDetail': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.LostDetail','nullable':false,'required':true },
     'SoldDetail': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.SoldDetail','nullable':false,'required':true },
     'LineOfBusiness': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.LineOfBusiness','inverseProperty':'$$unbound' },
     'CurrentPolicyCarrier': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.Carrier','inverseProperty':'$$unbound' },
     'Source': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.LeadSource','inverseProperty':'$$unbound' },
     'QuotedCarrier': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.Carrier','inverseProperty':'$$unbound' },
     'Owner': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.User','inverseProperty':'$$unbound' },
     'Client': { 'type':'Vertafore.Services.Producer.EntityDataModel.Entities.Client','inverseProperty':'$$unbound' },
     'Activities': { 'type':'Array','elementType':'Vertafore.Services.Producer.EntityDataModel.Entities.Activity','inverseProperty':'$$unbound' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.LostDetail', {
     'ReasonId': { 'type':'Edm.Int32','nullable':false,'required':true },
     'Comment': { 'type':'Edm.String' },
     'LostDate': { 'type':'Edm.DateTime','nullable':false,'required':true }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.SoldDetail', {
     'Carrier': { 'type':'Edm.String' },
     'Premium': { 'type':'Edm.Decimal','nullable':false,'required':true },
     'Revenue': { 'type':'Edm.Decimal' },
     'Commission': { 'type':'Edm.Decimal' },
     'EffectiveDate': { 'type':'Edm.DateTime' },
     'ExpirationDate': { 'type':'Edm.DateTime' },
     'SoldDate': { 'type':'Edm.DateTime' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.Policy', {
     'Id': { 'key':true,'type':'Edm.Guid','nullable':false,'required':true },
     'Number': { 'type':'Edm.String' },
     'Type': { 'type':'Edm.String' },
     'LOBDescription': { 'type':'Edm.String' },
     'EffectiveDate': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'ExpirationDate': { 'type':'Edm.DateTime' },
     'IsContinuous': { 'type':'Edm.Boolean','nullable':false,'required':true },
     'Description': { 'type':'Edm.String' },
     'WritingCompanyName': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.QuestionAnswer', {
     'Id': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'QuestionValue': { 'type':'Edm.String' },
     'AnswerValue': { 'type':'Edm.String' },
     'IsEnabled': { 'type':'Edm.Boolean','nullable':false,'required':true }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.SicCode', {
     'Code': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Description': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.State', {
     'Code': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'Name': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.User', {
     'Id': { 'key':true,'type':'Edm.Int32','nullable':false,'required':true },
     'IsCurrent': { 'type':'Edm.Boolean','nullable':false,'required':true },
     'Title': { 'type':'Edm.String' },
     'Memo': { 'type':'Edm.String' },
     'FullName': { 'type':'Edm.String' },
     'UserName': { 'type':'Edm.String' },
     'BranchId': { 'type':'Edm.Int32','nullable':false,'required':true },
     'TimeZone': { 'type':'Edm.String' },
     'HasAcceptedEULA': { 'type':'Edm.Boolean','nullable':false,'required':true },
     'EULAAcceptedDate': { 'type':'Edm.DateTime' },
     'AMS360WebServiceUserName': { 'type':'Edm.String' },
     'AMS360WebServicePassword': { 'type':'Edm.String' },
     'AMS360AgencyId': { 'type':'Edm.String' }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.ServerStatus', {
     'Status': { 'type':'Edm.String' },
     'Build': { 'type':'Edm.String' },
     'BuildDateTime': { 'type':'Edm.DateTime','nullable':false,'required':true }
  });

  $data.Entity.extend('Vertafore.Services.Producer.EntityDataModel.Entities.UserPerformance', {
     'Id': { 'type':'Edm.Int64','nullable':false,'required':true },
     'SalesPercentage': { 'type':'Edm.Decimal' },
     'Qualified': { 'type':'Edm.Decimal' },
     'Quote': { 'type':'Edm.Decimal' },
     'Proposal': { 'type':'Edm.Decimal' },
     'Sold': { 'type':'Edm.Decimal' },
     'Open': { 'type':'Edm.Decimal' },
     'YearlyGoalAmount': { 'type':'Edm.Decimal' },
     'YearlyGoalCount': { 'type':'Edm.Int32','nullable':false,'required':true },
     'CurrentMonth': { 'type':'Edm.Int32','nullable':false,'required':true },
     'CloseIn30Days': { 'type':'Edm.Decimal' },
     'CloseIn31to60Days': { 'type':'Edm.Decimal' },
     'CloseIn61to90Days': { 'type':'Edm.Decimal' },
     'CloseIn91to120Days': { 'type':'Edm.Decimal' },
     'Rank': { 'type':'Edm.Int32','nullable':false,'required':true },
     'UserCount': { 'type':'Edm.Int32','nullable':false,'required':true },
     'MonthlyAmount1': { 'type':'Edm.Decimal' },
     'MonthlyAmount2': { 'type':'Edm.Decimal' },
     'MonthlyAmount3': { 'type':'Edm.Decimal' },
     'MonthlyAmount4': { 'type':'Edm.Decimal' },
     'MonthlyAmount5': { 'type':'Edm.Decimal' },
     'MonthlyAmount6': { 'type':'Edm.Decimal' },
     'MonthlyAmount7': { 'type':'Edm.Decimal' },
     'MonthlyAmount8': { 'type':'Edm.Decimal' },
     'MonthlyAmount9': { 'type':'Edm.Decimal' },
     'MonthlyAmount10': { 'type':'Edm.Decimal' },
     'MonthlyAmount11': { 'type':'Edm.Decimal' },
     'MonthlyAmount12': { 'type':'Edm.Decimal' },
     'MonthlyCount1': { 'type':'Edm.Int32' },
     'MonthlyCount2': { 'type':'Edm.Int32' },
     'MonthlyCount3': { 'type':'Edm.Int32' },
     'MonthlyCount4': { 'type':'Edm.Int32' },
     'MonthlyCount5': { 'type':'Edm.Int32' },
     'MonthlyCount6': { 'type':'Edm.Int32' },
     'MonthlyCount7': { 'type':'Edm.Int32' },
     'MonthlyCount8': { 'type':'Edm.Int32' },
     'MonthlyCount9': { 'type':'Edm.Int32' },
     'MonthlyCount10': { 'type':'Edm.Int32' },
     'MonthlyCount11': { 'type':'Edm.Int32' },
     'MonthlyCount12': { 'type':'Edm.Int32' }
  });

  $data.EntityContext.extend('Vertafore.Services.Producer.ProducerDataSourceContainer', {
     'Activities': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Activity},
     'Addresses': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Address},
     'Claims': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Claim},
     'Carriers': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Carrier},
     'Clients': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Client},
     'CommunicationDetails': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.CommunicationDetail},
     'Contacts': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Contact},
     'LeadSources': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.LeadSource},
     'LineOfBusinesses': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.LineOfBusiness},
     'LostReasons': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.LostReason},
     'Opportunities': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Opportunity},
     'Policies': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.Policy},
     'QuestionAnswers': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.QuestionAnswer},
     'SicCodes': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.SicCode},
     'States': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.State},
     'Users': { type: $data.EntitySet, elementType: Vertafore.Services.Producer.EntityDataModel.Entities.User},
     'GetServerStatus': { type: $data.ServiceOperation, returnType: 'Vertafore.Services.Producer.EntityDataModel.Entities.ServerStatus', method: 'GET', params: [] },
     'GetPerformanceMetrics': { type: $data.ServiceOperation, returnType: 'Vertafore.Services.Producer.EntityDataModel.Entities.UserPerformance', method: 'GET', params: [{ name: 'amountType', type: 'Edm.Int32' }, { name: 'duration', type: 'Edm.Int32' }] }
  });

  $data.generatedContexts = $data.generatedContexts || [];
  $data.generatedContexts.push(Vertafore.Services.Producer.ProducerDataSourceContainer);
  
      
})(window, $data);
      
    