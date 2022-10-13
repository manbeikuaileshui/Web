const person = {
    firstName: 'Ben',
    lastName: 'Li',
    age: 20,
    email: "Ben@qq.com",
    hobbies: ['音乐','运动'],
    address: {
        city: "广州",
        province: "广东"
    },
    getBirthYear: function() {
        return 2022 - this.age
    }
}
let val
val = person

// 获取属性的值
val = person.firstName
val = person['firstName']
val = person.age
val = person.email
val = person.hobbies[0]
val = person.address.city
val = person.address['province']
val = person.getBirthYear()

console.log(val)


const people = [
    {name: "张学友", age: 30},
    {name: "刘德华", age: 40},
    {name: "郭富城", age: 30},
    {name: "黎明", age: 20},
]
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
    console.log(people[i].age)
}