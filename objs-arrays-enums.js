"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 10] = "READ_ONLY";
    Role[Role["AUTHOR"] = 12] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Nick',
    age: 42,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
//person.role = [0, 'admin'];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is author');
}
