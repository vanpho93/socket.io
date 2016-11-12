function Person(name1, age1){
  this.name = name1;
  this.age = age1;
}

var person1 = new Person('KhoaPham', 30);

person1.diaChi = "90 Le Thi Rieng";

person1.getInfo = function(){
  return `Thong tin nhan vien: \${this.name} ${this.age}`
}

var des = ` " " ' 'asdnbbfahdjkfka
dnafjjs`

console.log(person1.getInfo());
