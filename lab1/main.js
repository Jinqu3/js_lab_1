/* К первому практическому занятию необходимо выполнить следующее задание (на основании уже изученного материала по JavaScript) :

1) Описать объект, содержащий:
а) поле – массив, поле строкового типа, поле целого типа, возможно добавление других необходимых полей;
б) конструктор, позволяющий полностью инициализировать объект;
в) методы доступа к элементам массивов и к полям;
г) функциональный метод, реализующий некоторую функцию от элементов массива и полей объектов классов (арифметическую, логическую, конкатенацию и т.п.).

2) Организовать массив объектов, заполненный описанными выше объектами. Выполнить следующие действия:
а) вывести полную информацию обо всех объектах массива;
б) найти в массиве объекты, функциональный метод которых возвращают одинаковый результат, поместить такие объекты в другой массив 
Так как аналогичное задание было выполнено в рамках изучения Java, то безусловно можно использовать те идеи, которые были придуманы и реализованы там.*/
class Student{

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

class Group{
    constructor(){
        this._number = "4345"
        this._size = 2
        this._students = new Array(2)
        this._students[0] = new Student("Sam","20")
        this._students[1] = new Student("Alex","20")
    }

    // constructor(number,size,students){
    //     this._name = number
    //     this._size = size
    //     this._students = students
    // }

    full_info(){
        console.log(`\nНомер класса: ${this._number}`)
        console.log(`Количество людей в классе: ${this._size}`)
        console.log(`Список учеников: `)
        for(let i =0;i < this._size;i++){
            console.log(this._students[i].full_info())
        }
    }
    
    getAverageAge(){
        if(this._size = 0)throw exception("Деление на ноль!")
        var sum = 0
        for(let i =0;i < this._size;i++){
            sum += this._students[i].getAge()
        }
        return sum/this._size
    }

    getNumber(){
        return this._number
    }
    
    setNumber(number){
        this._number = number
    }

    getSize(){
        return this._size
    }

    setSize(size){
        this._size = size
        this._students = this._students.slice(0,size)
    }

    getStudents(){
        return this._students
    }

    setStudents(students){
        this._students = students
    }
}

class Class{
    
    constructor(){
        this._number = "11"
        this._symbol = "а"
        this._size = 2
        this._students = new Array(2)
        this._students[0] = new Student("Sam","17")
        this._students[1] = new Student("Alex","17")
    }
    
    // constructor(number,symbol,size,students){
    //     this._name = number
    //     this._symbol = symbol
    //     this._size = size
    //     this._students = students
    // }

    full_info(){
        console.log(`\nНомер класса: ${this._number} ${this._symbol}`)
        console.log(`Количество учеников в классе: ${this._size}`)
        console.log(`Список учеников: `)
        for(let i =0;i < this._size;i++){
            console.log(this._students[i].full_info())
        }
    }
    
    getAverageAge(){
        if(this._size = 0)throw exception("Деление на ноль!")
        var sum = 0
        for(let i =0;i < this._size;i++){
            sum += this._students[i].getAge()
        }
        return sum/this._size
    }

    getNumber(){
        return this._number
    }
    
    setNumber(number){
        this._number = number
    }

    getSymbol(){
        return this._symbol
    }

    setSymbol(symbol){
        this._symbol = symbol
    }

    getSize(){
        return this._size
    }

    setSize(size){
        this._size = size
        this._students = this._students.slice(0,size)
    }

    getStudents(){
        return this._students
    }

    setStudents(students){
        this._students = students
    }
}

// import Class from './Class.js';
// import Group from './Group.js';
if (typeof document !== 'undefined') {
    let inputIn = document.querySelector('.input_size'); 
    let button = document.querySelector('.size');
    let button2 = document.querySelector('.full_info');


let Group_Class = new Array();
let size = inputIn.value;

button.onclick = function(){
    
    for(let i = 0;i < inputIn.value;i++){
        Group_Class[i]= Math.random ? new Group() : new Class();
    }
}

button2.onclick = function(){
    for(let i=0;i < size;i++){
        Group_Class[i].full_info();
    }
}

}