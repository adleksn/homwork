const person = {
    name: "Никита",
    age: 21,
    isStudent: true,

    // Метод, который выводит приветствие в консоль
    greet: function () {
        console.log(`Привет, я ${this.name}, мне ${this.age} год.`);
        if (this.isStudent) {
            console.log("Я студент! 🎓");
        }
    },

    // Метод, который увеличивает возраст и логирует это
    celebrateBirthday: function () {
        this.age += 1;
        console.log(`Ура! Теперь мне ${this.age} года. 🎉`);
    }
};

person.greet();
person.celebrateBirthday();
// =========================================================================




const greeter = {
    greet: function (name) {
        return `Hello "${name}"`;
    }
};

console.log(greeter.greet("Alex"));


// =========================================================================


const users = [
    { name: "Алексей", isAdmin: true },
    { name: "Мария", isAdmin: false },
    { name: "Иван", isAdmin: false },
    { name: "Елена", isAdmin: true },
    { name: "Дмитрий", isAdmin: false }
];

let regularUsersCount = 0;


for (const user of users) {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
}

console.log(`Количество обычных пользователей: ${regularUsersCount}`);