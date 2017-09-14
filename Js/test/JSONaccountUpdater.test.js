describe("The account updater", function () {
    it("returns the list of accounts", function () {
        var logons = {
            "Logons" : []
        };
        var accounts = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount" : 13,
                    "LastLogon" : new Date(2017, 1, 14, 16, 15, 6, 111)
                },
                {
                    "Id": 12,
                    "Name": "Frank Matthews",
                    "LogonCount": 1,
                    "LastLogon": new Date(2017, 1, 15, 14, 26, 31, 821)
                }
            ]
        };
        var expected = {
            "Accounts": [
                {
                    "Id": 12,
                    "Name": "Frank Matthews",
                    "LogonCount": 1,
                    "LastLogon": new Date(2017, 1, 15, 14, 26, 31, 821)
                },
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount" : 13,
                    "LastLogon" : new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        expect(updateAccounts(accounts,logons)).toEqual(expected);
    });
    it("returns the list of updated accounts", function () {
        var logons = {
            "Logons": [
                {
                    "Id": 21,
                    "Name": "John F. Shepherd",
                    "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
                }
            ]
        };
        var accounts = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 13,
                    "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        var expected = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John F. Shepherd",
                    "LogonCount": 14,
                    "LastLogon": new Date(2017, 1, 24, 22, 13, 16, 241)
                }
            ]
        };
        expect(updateAccounts(accounts,logons)).toEqual(expected);
    });
    it("does not update a name when empty", function () {
        var logons = {
            "Logons": [
                {
                    "Id": 21,
                    "Name": "",
                    "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
                }
            ]
        };
        var accounts = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 13,
                    "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        var expected = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 14,
                    "LastLogon": new Date(2017, 1, 24, 22, 13, 16, 241)
                }
            ]
        };
        expect(updateAccounts(accounts,logons)).toEqual(expected);
    });
    it("only updates last logon date and name when a logon is later", function () {
        var logons = {
            "Logons": [
                {
                    "Id": 21,
                    "Name": "John F. Shepherd",
                    "Date": new Date(2016, 9, 23, 11, 13, 16, 541)
                }
            ]
        };
        var accounts = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 13,
                    "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        var expected = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 14,
                    "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        expect(updateAccounts(accounts,logons)).toEqual(expected);
    });
    it("adds a new account to the list", function () {
        var logons = {
            "Logons": [
                {
                    "Id": 5,
                    "Name": "Sarah Miller",
                    "Date": new Date(2017, 1, 23, 10, 12, 4, 545)
                },
                {
                    "Id": 5,
                    "Name": "",
                    "Date": new Date(2017, 1, 25, 10, 12, 4, 545)
                },
                {
                    "Id": 5,
                    "Name": "Sarah Parker-Miller",
                    "Date": new Date(2017, 1, 24, 10, 12, 4, 545)
                }
            ]
        };
        var accounts = {
            "Accounts": [
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 13,
                    "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        var expected = {
            "Accounts": [
                {
                    "Id": 5,
                    "Name": "Sarah Parker-Miller",
                    "LogonCount": 3,
                    "LastLogon": new Date(2017, 1, 25, 10, 12, 4, 545)
                },
                {
                    "Id": 21,
                    "Name": "John Shepherd",
                    "LogonCount": 13,
                    "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
                }
            ]
        };
        expect(updateAccounts(accounts,logons)).toEqual(expected);
    });
});



