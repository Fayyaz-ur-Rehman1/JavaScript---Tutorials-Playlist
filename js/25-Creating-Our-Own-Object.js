function person(name , age){
    this.name = name;
    this.age = age;
}
var fayyaz = new person("fayyazurrehman",17);
var uzair = new person("uzairkhilji" , 16);

console.log(fayyaz.name)
document.write(uzair.age)

