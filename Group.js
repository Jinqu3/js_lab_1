import Student from './Student.js';

export default class Group{
    // constructor(){
    //     this._number = "4345"
    //     this._size = 2
    //     this._students = new Array(2)
    //     this._students[0] = new Student("Sam","20")
    //     this._students[1] = new Student("Alex","20")
    // }


    constructor(number,size,students){
        this._number = number
        this._size = size
        this._students = students
    }


    full_info(){
        console.log(`\nНомер группы: ${this._number}`)
        console.log(`Количество людей в группе: ${this._size}`)
        console.log(`Список студентов: `)
        for(let i =0;i < this._size;i++){
            console.log(this._students[i].full_info())
        }
    }
    
    getAverageAge(){
        if(this._size == 0)throw exception("Деление на ноль!")
        let sum = 0
        for(let i =0;i < this._size;i++){
            sum += this._students[i].getAge()
        }
        return Math.floor(sum/this._size*100/100);
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


