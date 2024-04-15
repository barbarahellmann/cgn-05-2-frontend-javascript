//Variablen

var variable1:number = 42 //veraltet
const variable2:string = "Hello" //Variable kann nicht mehr verändert werden
let variable 3: boolean = true   //Variable kann verändert werden


// Datentypen
const number:number = 42
const string:string = "Hello World"
const boolean:boolean =true
const object:{key:string} = {key : "value"}
const nullExample:null = null
let undefinedExample // undefined, kann später mit undefiniedExample = "string" deklariert werden
const listen:string[] = ["hello", "world"] //Listen

// Arithmetische Operatoren
const addition:number = 5+3
const substraktion:number = 10-4
const multi:number = 3*3
const div:number = 20/4

// Vergleichsoperatoren
const isEqual:boolean = 5 == "5" // true (loose equality), obwohl "5" ein string ist. daher lieber Vergleiche mit ===
const isEqual2:boolean = 5 === "5" // false (strickt)
const isLessThan:boolean = 10 < 20 // true
const isGreaterThan:boolean = 15 > 5 // true

//Logische Operatoren
const andOperator:boolean = true &&  false // false, And-Operator, beide Werte müssen gleich sein
const orOperator:boolean = true || false // true, Or-Operator, wenn eines der Werte true ist
const notOperator:boolean = !true // false, Not-Operator

// Zuweisungsoperatoren
let x:number = 10
x += 5  // bedeutet x = x + 5

// Kontroll

// if & else

let condition:boolean= true

if(condition) {
    console.log("Bedingung ist wahr")
} else {
    console.log("Bedingung ist falsch")
}


// switch

let option:string = "B"

switch(option) {
    case "A":
        console.log("option A ausgewählt")
        break
    case "B":
        console.log("option B ausgewählt")
        break
    default:
        console.log("Keine Option ausgewählt")
}


// for-Schleife

for(let i:number = 0; i < 5; i++) {
    console.log("Schleifendurchgang #" + i)
}

// while

let j:number = 0;
while (j > 3) {
    console.log(Schleifendurgang #" + j)
        j++
}


// truthy/falsy
const false:boolean = false // falsy =  alles was zu false wird= false, 0, null, undefined, NaN

