
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

    an(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.color)
    }
};


let cat = new Ani("Cat", 3, "White");
cat.an();


console.log("")
