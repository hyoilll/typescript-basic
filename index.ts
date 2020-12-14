let hello :string = 'hello';
console.log(hello);

// data type
let hasValue: boolean = true;
let conut: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "world";
let back: string= `hyoil`; 
let every: any = 'hi';
every = 2;
every = true;

// object
// type화 부분은 ;
// 정의 부분은 ,
const person:{
    name: {
        first:string;
        last:string;
    };
    age: number;
} = {
    name: {
        first:'Lee',
        last:'Hyoil',
    },
    age: 28,
}

console.log(person)

// array
const fruits:string[] = ['Apple', "Banana", "Grape"];
//fruits.push(12) error
fruits.push('hi');
console.log(fruits)

const arr = [1,2,3,'4',{},[]]; //union
console.log(arr)