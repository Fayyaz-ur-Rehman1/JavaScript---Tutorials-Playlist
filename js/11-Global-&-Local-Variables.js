// Global-Variables => global variables we use out the function and we  use 
// global variable outside the function

var a = "my name if fayyaz"

function fn7(){
    document.write(a + "<br>")
}
fn7()
document.write(a + "<br>")

//Local-Variables => local variable we use onle inside we use out side the function and 
// not show out beacuse local variable use only inside the variable

function fn8(){
    var a = "dansih-chouhan"
    document.write(a + "<br>")
}
fn8()

function fn9(){
    var b = "uzair-khilji"
}
document.write(b)