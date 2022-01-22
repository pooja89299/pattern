var n=5
var string=""
var i=1
while (i<=n){
    var j=0
    while (j<i){
        string+=String.fromCharCode((i-1)+65)
        j++
    }
    string+="\n"
    i++
}
console.log(string)