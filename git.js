
console.log("")

let user = {
    name: "vika",
    age: 20
};

for (let k in user){
    console.log(user[k])
}

console.log("")

class Ani {
    constructor(name, age, color){
        this.name = name,
        this.age = age,
        this.color = color
    };

    annn(){
        console.log(this.name);
        console.log(this.color)
    }
};


let cat = new Ani("Cat", 3, "White");
cat.annn();


console.log("")
