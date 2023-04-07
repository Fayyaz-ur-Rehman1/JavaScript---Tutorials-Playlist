function fn13(name , age){
    this.name = name,
    this.age = age,
    this.expair = fn14
}
function fn14(){
    var a = 100 - this.age
    return a
}

var c = new fn13('fayyazurrehman' , 17);
var d = new fn13("danish" , 17);
document.write(c.expair());