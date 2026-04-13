// enum set of fixed string leteral in one place

// type UserRoles = "admin" | "editor" | "viewer";

//enum is a special type can be used both as a type and a value
// we dont use ";" like other type defination we use "," in enums

enum UserRoles {
    admin = "admin",
    editor = "editor",
    viewer = "viewer",
}

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.admin){
        return true;

    }
    else {
        return false
    }
}

const isEdit = canEdit(UserRoles.admin);

console.log(isEdit)