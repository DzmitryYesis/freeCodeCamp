function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs : 5,
    eat: function(){
        console.log('HOHOHOHHOOH')
    },
    describe: function(){
        console.log('My name is '+this.name)
    }

};