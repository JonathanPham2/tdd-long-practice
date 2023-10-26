const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const {returnsThree, reciprocal} = require ("../problems/number-fun")
describe ("Return three function", function () {
    it ("Should return three", function () {
        expect(returnsThree()).to.equal(3)
    })
} 

)
describe("Should return reciprocal", function () {
    it ("Should return reciprocal", function () {
        expect(reciprocal(2)).to.equal(0.5)
        expect(reciprocal(4)).to.equal(0.25)
    })
})