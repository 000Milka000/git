
console.log("")

let user = {
    name: "vika",
    age: 20
};

for (let k in user){
    console.log(user[k])
}

console.log("")

class Animal {
    constructor(name, age, color){
        this.name = name,
        this.age = age,
        this.color = color
    };

    an(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.color)
    }
};


let cat = new Animal("Cat", 3.5, "Black");
cat.an();


console.log("")
