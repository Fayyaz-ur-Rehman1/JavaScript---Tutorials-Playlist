var a = new Array("fayyaz","ayyaz","uzair","khilji");
var b = a.join()
document.write(b)
document.write("<br>")
document.write(typeof b + "<br>")

var a = new Array("fayyaz","ayyaz","uzair","khilji");
// var b = a.join("-")
var b = a.join("/")
document.write(b + "<br>")


var a = new Array("fayyaz","ayyaz","uzair","khilji");
var b = a.pop();
document.write(b + "<br>")
document.write(a[3])