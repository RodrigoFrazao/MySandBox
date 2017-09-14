function updateAccounts(accounts, logons) {

    var newAccounts = accounts.Accounts;

   $.each(logons.Logons, function(lindex,lvalue) {
        var exists = false;
        $.each(newAccounts,function (aindex,avalue) {
            if (lvalue.Id == avalue.Id) {
                newAccounts[aindex].LogonCount +=1;
                exists = true;
                if(avalue.LastLogon < lvalue.Date){
                    newAccounts[aindex].LastLogon = lvalue.Date;
                    newAccounts[aindex].Name = avalue.Name !== ""? lvalue.Name : "";
                }
            }
        });
        if (exists == false) {
            var newAccount = {};
            newAccount.Id = lvalue.Id;
            newAccount.LogonCount = 1;
            newAccount.LastLogon = new Date();
            newAccounts.push(newAccount);
        }

    })
    
    newAccounts.sort(function (a,b) {
        return a.Id -b.Id;
    });
    console.log(new Date('Sat Jan 17 1970 07:28:19 GMT+0100 (Romance Standard Time)').toJSON());
    console.log(new Date('Sat Jan 17 1970 07:28:19 GMT+0100 (Romance Standard Time)').valueOf());
   return JSON.parse(JSON.stringify({Accounts: newAccounts}));
}