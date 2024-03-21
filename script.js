// переменные и вывод их в консоль
let age = 54;
let oldName = 'John';
let isStudent = true;
let money = null;
let newObj = {
    name: 'Mike',
    age: 35,
    isTeacher: false
};
let newArr = ['Kate', 22 , null, 'world'];
// let id = Symbol("id");
alert(age);
alert(oldName);
alert(isStudent);
alert(newObj['name']);
alert(money);
alert(newArr[0]);
// alert(id);
// изменение переменных
age = 60;
alert(age);
oldName = 'Alex';
alert(oldName);
// переменные и prompt
let name = prompt('Введите имя');
let address = prompt('Введите адрес');
let phone = Number(prompt('Введите номер телефона'));
alert(`Студент ${name} живет по адресу ${address}. Его номер телефона ${phone}`);