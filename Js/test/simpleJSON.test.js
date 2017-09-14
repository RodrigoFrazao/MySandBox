

describe("normalizeData", function () {

    it("accepts golden path data", function () {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);

        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });



});