
describe("The Cube problem", function () {

    it("first case", function () {
        var inputVolume = 4183059834009;
        var expected = 2022;
        var norm = findNb(inputVolume);

        expect(norm).toEqual(expected);
    });

    it("second case", function () {
        var inputVolume = 24723578342962;
        var expected = -1;
        var norm = findNb(inputVolume);

        expect(norm).toEqual(expected);
    });

    it("third case", function () {
        var inputVolume = 135440716410000;
        var expected = 4824;
        var norm = findNb(inputVolume);

        expect(norm).toEqual(expected);
    });

    it("final case", function () {
        var inputVolume = 40539911473216;
        var expected = 3568;
        var norm = findNb(inputVolume);

        expect(norm).toEqual(expected);
    });

});