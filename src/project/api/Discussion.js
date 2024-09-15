import axios from "axios";

const url = `${process.env.url}/Discussion`

//הוספת דיון חדש והחזרתו
export const addDiscussion = async (Discussion) => {
    let newDiscussion = null
    try {
        await axios.post(`${url}`, Discussion).then(result => newDiscussion = result.data)
    }
    catch { return null }
    return newDiscussion
}

//החזרת פרטי דיון לפי קוד 
export const getDiscussion = async (id) => {
    let Discussion = null
    try {
        await axios.get(`${url}/${id}`)
            .then(result => { Discussion = result.data })
    }
    catch { return null }
    return Discussion
}

// החזרת כל הדיוןים
export const getDiscussions = async () => {
    let Discussions = null
    try {
        await axios.get(`${url}`).then(result => Discussions = result.data)
    }
    catch { return null }
    return Discussions
}

// עדכון פרטי הדיון
export const updateDiscussion = async (Discussion) => {
    let newDiscussion = null
    try {
        await axios.put(`${url}`, Discussion).then(result => newDiscussion = result.data)
    }
    catch { return null }
    return newDiscussion
}

// מחיקת דיון
export const deleteDiscussion = async (id) => {
    let succes = null
    try {
        await axios.delete(`${url}/:id`, id).then(result => succes = result.data)
    }
    catch { return null }
    return succes
}
