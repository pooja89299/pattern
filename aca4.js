
var n=5
var string=""
var i=1
while (i<=n){
    var j=0
    while (j<n-i+1){
        string+=String.fromCharCode(j+65)
        j++
    }
    string+="\n"
    i++
}
console.log(string)