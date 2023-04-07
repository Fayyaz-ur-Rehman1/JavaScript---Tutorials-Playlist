function fn10(){
    return new Date();
}
document.write(fn10())

function fn11(){
    document.write("fayyazurrehman" + "<br>")
}
setInterval("fn11()", 1000)

function fn12(){
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var seconds = now.getSeconds();
    document.write(hours + " : " + mins + " : "+ seconds + "<br>")
}

setInterval("fn12()" , 1000 )