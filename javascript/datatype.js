String > Any things in qoutes
"Hiii" 'hey'  "10" '5345' 'true' `Hiii`
Number
10  3534346 234 23435.355 .35325
Boolean
true false

///////////
var
let
const


es5
Ecam Script
es6


var a = 10
var b = "hii"
var c = true

///////
var
redeclare and reassign

let 
we cannot redeclare but can reassign

const 
we cannot redeclare nor reassign

> var a = 10
undefined
> a
10
> var b = 20
undefined
> var a = 20
undefined
> a
20
> a = 30
30
> a
30
> let c = 10
undefined
> c
10
> let c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
11
> const d = 10
undefined
> d
10
> const d = 11
Uncaught SyntaxError: Identifier 'd' has already been declared
> d = 11
Uncaught TypeError: Assignment to constant variable.