import axios from "axios";

const url = `${process.env.url}/User`

//הוספת משתמש חדש והחזרתו
export const addUser = async (user) => {
    let newUser = null
    try {
        await axios.post(`${url}`, user).then(result => newUser = result.data)
    }
    catch { return null }
    return newUser
}

//החזרת פרטי משתמש לפי אימייל וסיסמה
export const getUser = async (email, password) => {
    let user = null
    try {
        await axios.get(`${url}/${email}/${password}`)
            .then(result => { user = result.data })
    }
    catch { return null }
    return user
}

// החזרת כל המשתמשים
export const getUsers = async () => {
    let users = null
    try {
        await axios.get(`${url}`).then(result => users = result.data)
    }
    catch { return null }
    return users
}

// עדכון פרטי המשתמש
export const updateUser = async (user) => {
    let newUser = null
    try {
        await axios.put(`${url}`, user).then(result => newUser = result.data)
    }
    catch { return null }
    return newUser
}

// מחיקת משתמש
export const deleteUser = async (id) => {
    let succes = null
    try {
        await axios.delete(`${url}/:id`, id).then(result => succes = result.data)
    }
    catch { return null }
    return succes
}
