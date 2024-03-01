export default class Student{

    constructor(){
        this._name = "Безымянный"
        this._age = "999"
    }

    // constructor(name,age){
    //     this._name = name
    //     this._age = age
    // }
    
    full_info(){
        return `Имя: ${this._name}, Возраст: ${this._age}`
    }

    getName(){
        return this._name
    }

    setName(name){
       this._name = name
    }
    
    getAge(){
        return this._age
    }

    setAge(age){
        this._age = age
    }
    
}