class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3

    }
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    
    hasValidSideLengths() {
        return (this.side1 + this.side2 ) > this.side3
    }

    validate(){
        
        if(this.hasValidSideLengths) this.isValid = true;
        else this.isValid = false
    }

}

module.exports = Triangle