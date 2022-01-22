
const n=5
var string=""
var count=0
var i=1
while (i<=n){
    var j=0
    while (j<i){
        string+= String.fromCharCode(count +65)
        count++
        j++
    }
    string+="\n"
    i++
}
console.log(string)
