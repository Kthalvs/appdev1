let aboutMe = {
    name: "Kathline",
    age: 20,
    course: "BSIS",
    introduce: function () {
        console.log(`Hi, my name ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.hobby = "Watching, Reading, Eating";
aboutMe.introduce();
console.log(aboutMe);