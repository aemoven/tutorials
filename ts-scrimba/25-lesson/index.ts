type UserRole = "member" | "contributor" | "admin";

type User = {
    id: number;
    username: string;
    role: UserRole;
};

type UpdatedUser = Partial<User>;

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brow", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        console.log(`User with id ${id} not found`);
        return;
    }
    Object.assign(foundUser, updates);
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users);
