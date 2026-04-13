// as const assertion
// enum UserRoles {
//     admin = "admin",
//     editor = "editor",
//     viewer = "viewer",
// }

const UserRoles = {
    admin : "admin",
    editor : "editor",
    viewer : "viewer",
}as const;

// as const make the obj read only
// to use this read only value we need two things
// 1. type of 2. key of
// 
// 
// 
// when the key and value is different we need UserRoles["admin"]

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if(role === UserRoles.admin){
        return true;

    }
    else {
        return false
    }
}

const isEdit = canEdit(UserRoles.admin);

console.log(isEdit)