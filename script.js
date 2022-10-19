// function showName(obj){ 
//     console.log(obj.fullName.split(' ')[1]); 
// } 

// function createPerson(newFullName = "default name", newAge = 1, newEmail = "asd@mail.ru"){ 
//     return { 
//         fullName: newFullName, 
//         age: newAge, 
//         email: newEmail 
//     } 
// } 

// let person2 = createPerson(); 
// showName(person2);

let user = {
    login: "realibi",
    password: ["asd123,qwerty"],
    location: {
        city: "Almaty",
        street: "Navoi",
    },
    logFunc: function(){
        console.log(`${this.login} logged in`)
    }
}
console.log(user.logFunc())