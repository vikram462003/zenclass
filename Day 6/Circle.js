class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.getColor;
    }
    setColor(setColor){
        this.setColor=setColor;
    }
    toString(){
        return this;
    }
    getArea(){
        return 3.14*this.radius**2;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }
}