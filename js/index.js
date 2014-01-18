// Get Element By Id Function - Thanks Brett Tackaberry.
function elById(arg){ return document.getElementById(arg); }

// Return Value and Display to HTML Elements Round to nearest 0.00x
function returnValue(arg,arg2){
  return document.getElementById(arg).innerHTML = Math.round(arg2 * 1000) / 1000
}

function DoEverythingSlaveFunction(){

  // Form Fields
  var paycheck = elById("paycheck").value;
  // Pays per year radio buttons
  var paysPerYear = document.getElementsByName('paysPerYear');
  for (var i = 0, length = paysPerYear.length; i < length; i++) {
      if (paysPerYear[i].checked) {
          break;
      }
  }
  var paysPerYear = paysPerYear[i].value;
  var monthlyRentInput = elById("rent").value;
  var monthlyBillsInput = elById("monthlyBills").value;
  var savings = "0." +elById("savings").value;
  //-- Form Fields
  

  // Display Information

  // Salary Information
  //----------------------
  //Annual Income
  var annualIncome = paycheck * paysPerYear;
  returnValue('annualIncome-view',annualIncome);

  //Monthly Income
  var monthlyIncome = annualIncome / 12;
  returnValue('monthlyIncome-view',monthlyIncome);

  //Weekly Income
  var weeklyIncome = annualIncome / 52.1775;
  returnValue('weeklyIncome-view',weeklyIncome);

  //Daily Income
  var dailyIncome = annualIncome / 223;
  returnValue('dailyIncome-view',dailyIncome);

  //Hourly Income
  var hourlyIncome = dailyIncome / 7.5;
  returnValue('hourlyIncome-view',hourlyIncome);

  //Minute Income
  var minutesIncome = hourlyIncome / 60;
  returnValue('minutesIncome-view',minutesIncome);

  //Minute Income
  var secondsIncome = minutesIncome / 60;
  returnValue('secondsIncome-view',secondsIncome);

  //-- 24 Hour Time
  // Daily Income 24 Hour time
  var dailyIncome24Hour = annualIncome / 365;
  returnValue('dailyIncome24Hour-view',dailyIncome24Hour);

  //Hourly Income 24 Hour time
  var hourlyIncome24Hour = dailyIncome24Hour / 24;
  returnValue('hourlyIncome24Hour-view',hourlyIncome24Hour);

  //Minute Income 24 Hour time
  var minutesIncome24Hour = hourlyIncome24Hour / 60;
  returnValue('minutesIncome24Hour-view',minutesIncome24Hour);

  //Minute Income 24 Hour time
  var secondsIncome24Hour = minutesIncome24Hour / 60;
  returnValue('secondsIncome24Hour-view',secondsIncome24Hour);
  // -- 24 hour Time
  // -- Salary Information
  //----------------------
  
  // Total Bills Paid :(
  //----------------------
  //Monthly Rent Cost
  var monthlyRent = parseInt(monthlyRentInput);
  returnValue('monthlyRentCost-view',monthlyRent);

  // Annual Rent Cost
  var annualRent = monthlyRentInput * 12;
  returnValue('annualRentCost-view',annualRent);
  
  // Monthly Bills
  var monthlyBills = parseInt(monthlyBillsInput);
  returnValue('monthlyBills-view',monthlyBills);

  // Annual Bills
  var annualBills = monthlyBillsInput * 12;
  returnValue('annualBills-view',annualBills);
  
  //Total Bills Caluclated
  // Total Bills Paid Monthly
  var monthlyTotalBills = (monthlyBills + monthlyRent);
  returnValue('monthlyTotalBills-view',monthlyTotalBills);

  // Total Bills Paid Annually
  var annualTotalBills = annualBills + annualRent;
  returnValue('annualTotalBills-view',annualTotalBills);
  // -- Total Bills Paid :(
  //----------------------
  
  
  // What you've got left to Spend
  //----------------------
  //Annual Remaining Income
  var remainingAnnualIncome = annualIncome - annualRent - annualBills;
  returnValue('remainingAnnualIncome-view',remainingAnnualIncome);
  
  //Monthly Remaining Income
  var remainingMonthlyIncome = remainingAnnualIncome / 12;
  returnValue('remainingMonthlyIncome-view',remainingMonthlyIncome);
  
  //Monthly Remaining Income
  var remainingWeeklyIncome = remainingAnnualIncome / 52;
  returnValue('remainingWeeklyIncome-view',remainingWeeklyIncome);
  
  //Daily Remaining Income
  var remainingDailyIncome = remainingAnnualIncome / 365;
  returnValue('remainingDailyIncome-view',remainingDailyIncome);
  //-- What you've got left to Spend
  //----------------------

  // Possible Savings
  //----------------------
  var annualRemainingSavings = remainingAnnualIncome * savings;
  returnValue('annualRemainingSavings-view',annualRemainingSavings);

  var monthlyRemainingSavings = remainingMonthlyIncome * savings;
  returnValue('monthlyRemainingSavings-view',monthlyRemainingSavings);

  var weeklyRemainingSavings = remainingWeeklyIncome * savings;
  returnValue('weeklyRemainingSavings-view',weeklyRemainingSavings);

  var dailyRemainingSavings = remainingDailyIncome * savings;
  returnValue('dailyRemainingSavings-view',dailyRemainingSavings);

  // Remaining Income After Savings -- AfterSavings
  var annualRemainingSavingsAfterSavings = remainingAnnualIncome - annualRemainingSavings;
  returnValue('annualRemainingIncomeAfterSavings-view',annualRemainingSavingsAfterSavings);

  var monthlyRemainingSavingsAfterSavings = remainingMonthlyIncome - monthlyRemainingSavings;
  returnValue('monthlyRemainingIncomeAfterSavings-view',monthlyRemainingSavingsAfterSavings);

  var weeklyRemainingSavingsAfterSavings = remainingWeeklyIncome - weeklyRemainingSavings;
  returnValue('weeklyRemainingIncomeAfterSavings-view',weeklyRemainingSavingsAfterSavings);

  var dailyRemainingSavingsAfterSavings = remainingDailyIncome - dailyRemainingSavings;
  returnValue('dailyRemainingIncomeAfterSavings-view',dailyRemainingSavingsAfterSavings);
  //-- Possible Savings
  //----------------------
  
}

elById("submit").onclick = function () { 
  DoEverythingSlaveFunction();
};