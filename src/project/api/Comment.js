import axios from "axios";

const url = `${process.env.url}/Comment`

//הוספת תגובה חדשה והחזרתה
export const addComment = async (Comment) => {
    let newComment = null
    try {
        await axios.post(`${url}`, Comment).then(result => newComment = result.data)
    }
    catch { return null }
    return newComment
}

//החזרת פרטי תגובה לפי קוד
export const getComment = async (id) => {
    let Comment = null
    try {
        await axios.get(`${url}/${id}`)
            .then(result => { Comment = result.data })
    }
    catch { return null }
    return Comment
}

// החזרת כל התגובות
export const getComments = async () => {
    let Comments = null
    try {
        await axios.get(`${url}`).then(result => Comments = result.data)
    }
    catch { return null }
    return Comments
}

// עדכון פרטי התגובה
export const updateComment = async (Comment) => {
    let newComment = null
    try {
        await axios.put(`${url}`, Comment).then(result => newComment = result.data)
    }
    catch { return null }
    return newComment
}

// מחיקת תגובה
export const deleteComment = async (id) => {
    let succes = null
    try {
        await axios.delete(`${url}/:id`, id).then(result => succes = result.data)
    }
    catch { return null }
    return succes
}
