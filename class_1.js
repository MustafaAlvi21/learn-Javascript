/* --------------------------- */
/*         Print Method        */
/* --------------------------- */
console.log('\n--------------- Print Method --------------')

console.log('Hello beautiful')     // String main hay value
console.log('32')                  // String main hay value
console.log(123)                   // Number main hay value


/* --------------------------- */
/*     Scope Of Variables      */
/* --------------------------- */
console.log('\n--------------- Scope Of Variables --------------')

var name_V = 'Mustafa'              //  var ki value bar bar update hosakti hay or aik hi naam k variables bar bar bhi banai jasaktay hain
console.log('name 1 => ' + name_V)
var name_V = 'Ali'
console.log('name 2 => ' + name_V)

let name_L = 'Mustafa'              //  let ki value bar bar update hosakti hay but aik hi naam k variables bar bar nahi banai jasaktay hain
console.log('name 1 => ' + name_L)
// let name_L = 'Ali'               // isko un-comment kerne k baad error aai ga
// console.log('name 2 => ' + name_L)

const name_C = 'Mustafa'           //  const variable ki aik bar value set hoti hay or aik bar hi banta hay phir us naam ka variable same scope main nahi bansakta hay
console.log('const name 1 =>' + name_C)
// name_C = 'ali'                 // isko un-comment kerne k baad error aai ga
// console.log('const name 2 =>' + name_C)

//  scope of variable ki aik example "IF/ELSE" k sath deni hay yaad dilana mujhay

/* --------------------------- */
/*     Creating Marksheet      */
/* --------------------------- */

console.log('\n------------  Mark Sheet ---------------\n')

name = 'Mustafa'
sec = 'B'
roll_no = 216
eng_marks = 90
urduMarks = 80
mathmarks = 60
total_Marks = 100 + 100 + 100
total_obtained = eng_marks + urduMarks + mathmarks
percentage = (total_obtained * 100) /total_Marks 


console.log('name : ' + name)
console.log('sec : ' + sec)
console.log('roll_no : ' + roll_no)
console.log('eng_marks : ' + eng_marks)
console.log('urduMarks : ' + urduMarks)
console.log('mathmarks : ' + mathmarks)
console.log('total_obtained : ' + total_obtained)
console.log('percentage : ' + percentage)



/* --------------------------- */
/*         Caluclator          */
/* --------------------------- */
console.log('\n--------------- Caluclator --------------')

num1 = 5
num2 = 10
num3 = 20

add = num1 + num2
sub = num2 - num3
mul = num2 * num1
div = num3 / num1

div = div + num3
console.log('add => ' + add)
console.log('sub => ' + sub)
console.log('mul => ' + mul)
console.log('div => ' + div)


