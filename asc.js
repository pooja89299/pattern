const a=require("readline-sync")
var num=a.questionInt("enter a number::")
var string=""
var i=1
while (i<=num){
    var j=0
    while (j<i){
        string += String.fromCharCode(j+65)
        j++
    }
    string+="\n"
    i++
}
console.log(string)