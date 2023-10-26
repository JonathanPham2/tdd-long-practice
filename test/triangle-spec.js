const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const Triangle = require("../problems/triangle")
let newTriangle = new Triangle (3, 4, 5)


describe("Constructor requirement",  () => {
    it ("Should have side1, side2, side3", () => {
        expect(newTriangle.side1).to.equal(3)
        expect(newTriangle.side2).to.equal(4)
        expect(newTriangle.side3).to.equal(5)
    } )
})
describe("Get perimeter", () => {
    it("Should get the perimeter", () => {
        expect(newTriangle.getPerimeter()).to.equal(12)
    })
    
})
describe("Should have valid side length", () => {
    it("Has valid side", () => {
        expect(newTriangle.hasValidSideLengths()).to.be.true
       
    })})

    describe("Validate", () => {
        it("Valid triangle has valid property", () => {
            expect(newTriangle.isValid).to.be.true
        })

    } )
