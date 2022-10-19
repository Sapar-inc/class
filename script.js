// function showName(obj){ 
//     console.log(obj.fullName.split(' ')[1]); 
// } 

// function createPerson(newFullName = "default name", newAge = 1, newEmail = "asd@mail.ru"){ 
//     return {  //Не правильный конструктор, хз почему
//         fullName: newFullName, 
//         age: newAge, 
//         email: newEmail 
//     } 
// } 

// let person2 = createPerson(); 
// showName(person2);

// let user = {
//     login: "realibi",
//     password: ["asd123,qwerty"],
//     location: {
//         city: "Almaty",
//         street: "Navoi",
//     },
//     logFunc: function(){
//         console.log(`${this.login} logged in`)
//     }
// }
// console.log(user.logFunc())

// let obj1 = {x:10}
// let obj2 = {x:7}
// function func(){
//     console.log(this.x)
// }
// func.call(obj1)

// function User(name,age,email){ //Правильный конструктор, хз почему
//     this.name = name,
//     this.age = age,
//     this.email = email
// }
// let u = new User("Sapar",22,"asdsa")
// console.log(u)

// class User{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     loginFunc(){console.log(`${this.name} Logged in`)}
// }
// let u = new User("John", 20)
// console.log(u.name)
// u.loginFunc()

class CounterControl{
    constructor(startValue, plusBtn, minusBtn){
        this.counterValue = startValue
        this.plusBtn = plusBtn
        this.minusBtn = minusBtn

        plusBtn.addEventListener("click",() =>{
            this.increase()
            this.drawValue()
        })
        minusBtn.addEventListener("click",() =>{
            this.discrease()
            this.drawValue()
        })
    }
    drawValue(){
        let span = document.querySelector("#counter")
        span.innerHTML = this.counterValue
    }
    increase(){
        this.counterValue++
    }
    discrease(){
        this.counterValue--
    }
}
let cc = new CounterControl(0,
    document.querySelector("#plusBtn"),
    document.querySelector("#minusBtn")
)
