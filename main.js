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


import Class from './Class.js';
import Group from './Group.js';
import Student from './Student.js';


function getRandomInt(max) {
    return +Math.floor(Math.random() * max);
}


function Creator(size,min,max){
    let students = new Array(size);
    for(let i = 0;i <= size;i++){
        students[i] = new Student(i,getRandomInt(max-min)+min);
    }
    return students;
}


let size = 10;
let Group_Class = new Array(size);
let Union_Class = new Map();
    


for(let i = 0;i < size;i++){
    if(getRandomInt(2)){
        let size_g = getRandomInt(26)+14;
        Group_Class[i]=  new Group(getRandomInt(5555)+1111,size_g,Creator(size_g,18,25));
    }
    else{
        let size_c = getRandomInt(10)+20;
        Group_Class[i]=  new Class(getRandomInt(11)+1,String.fromCharCode(getRandomInt(4)),size_c,Creator(size_c,7,18));
    }
}


for(let i=0;i < size;i++){
    Group_Class[i].full_info();
}


for(let i=0;i < size;i++){
    let method = Group_Class[i].getAverageAge();
    if(Union_Class.has(method)){
        Union_Class.get(method).push(Group_Class[i]);
    }
    else {
        Union_Class.set(method,new Array(Group_Class[i]));
    }
}


for(let key of Union_Class){
    console.log(key);
}