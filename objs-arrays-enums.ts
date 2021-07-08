enum Role { ADMIN = 5, READ_ONLY = 10, AUTHOR = 12 };

   const person = {
    name: 'Nick',
    age: 42,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
//person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
console.log('is author');
}