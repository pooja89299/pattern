
var n=5
var string=""
var i=1
while (i<=n){
    var j=1
    while (j<=n){
        string+=""
        j++
    }
    var k=0
    while (k<2*i-1){
        string+="*"
        k++
    }
    string+="\n"
    i++
}
console.log(string)
