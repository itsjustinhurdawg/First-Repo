  var deposit = prompt("deposit");
 
 var withdraw = prompt ("how much money do u want to withdraw?");
 

 var bankAccount = {};

  bankAccount["name"] = "Justin";
  bankAccount["balance"]= deposit
  bankAccount["balance"]-=withdraw;
  
  window.alert(bankAccount.balance);
