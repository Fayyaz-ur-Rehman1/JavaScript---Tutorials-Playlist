function fay1() {
    document.write("fayyaz")
}
function fay2() {
    document.write("khilji")
}
function fay3() {
    fay1()
    fay2()
}
fay3()



function uz(a, b) {
    return a + b
}
function uz1(c, d) {
    return c - d
}
function uz2() {
    document.write("<br>")
    document.write(uz(4, 5))
    document.write("<br>")
    document.write(6 - 2)
}
uz2()


function dofirst() {
    document.write(" first! ")
    dosecond();
}
function dosecond() {
    document.write(" second! ")
    dofirst()
}
dofirst()