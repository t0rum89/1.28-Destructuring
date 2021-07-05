/* 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) → 
{
  first: ‘a’,
  other: [‘b’, ‘c’, ‘d’]
} */

const getObj = (first, ...other) => ({ first, other });
console.log(getObj(1, "2", [3, 4, 5]));

/* 2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {  
  name: 'Google',   
  info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};
getInfo(organisation); → 
Name: Google 
Partners: Microsoft Facebook */

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo({
  name = "unknown",
  info: {
    partners: [p1, p2],
  },
} = {}) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${p1}, ${p2}`);
}

getInfo(organisation);

/* 1. Дан объект:

Используя деструктуризацию получить значения из следующих полей
1. name,  balance, email
2. из массива tags получить первый и последний элемент
3. из массива friends получить значение поле name из первого элемента массива
Если какое то из полей не имеет значения то подставить значение по умолчанию. */

let user = {
  guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
  isActive: false,
  balance: "$2,474.46",
  age: 30,
  eyeColor: "blue",
  name: "Tameka Maxwell",
  gender: "female",
  company: "ENOMEN",
  email: "tamekamaxwell@enomen.com",
  phone: "+1 (902) 557-3898",
  tags: ["aliquip", "anim", "exercitation", "non"],
  friends: [
    {
      id: 0,
      name: "Barber Hicks",
    },
    {
      id: 1,
      name: "Santana Cruz",
    },
    {
      id: 2,
      name: "Leola Cabrera",
    },
  ],
};

const { name, balance, email } = user;
console.log(name, balance, email);

const [one, two, three, four] = user.tags;
console.log(one, four);

const [
  { id: firstId, name: firstName },
  { id: secondId, name: secondName },
  { id: thirdId, name: thirdName },
] = user.friends;
console.log(firstName);
// 4. С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

const newArr = [...user.tags, ...user.friends];
console.log(newArr);
