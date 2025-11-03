type UserRole = "member" | "contributor" | "admin";

type User = {
    id: number;
    username: string;
    role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brow", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        console.log(`User with id ${id} not found`);
        return;
    }
    Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = { id: nextUserId++, ...newUser };
    users.push(user);
    return user;
}

/* updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" }); */

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);
