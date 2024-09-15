import axios from "axios";

const url = `${process.env.url}/Subject`

//הוספת נושא חדש והחזרתו
export const addSubject = async (Subject) => {
    let newSubject = null
    try {
        await axios.post(`${url}`, Subject).then(result => newSubject = result.data)
    }
    catch { return null }
    return newSubject
}

//החזרת פרטי נושא לפי קוד
export const getSubject = async (id) => {
    let Subject = null
    try {
        await axios.get(`${url}/${id}`)
            .then(result => { Subject = result.data })
    }
    catch { return null }
    return Subject
}

// החזרת כל הנושאים
export const getSubjects = async () => {
    let Subjects = null
    try {
        await axios.get(`${url}`).then(result => Subjects = result.data)
    }
    catch { return null }
    return Subjects
}

// עדכון פרטי הנושא
export const updateSubject = async (Subject) => {
    let newSubject = null
    try {
        await axios.put(`${url}`, Subject).then(result => newSubject = result.data)
    }
    catch { return null }
    return newSubject
}

// מחיקת נושא
export const deleteSubject = async (id) => {
    let succes = null
    try {
        await axios.delete(`${url}/:id`, id).then(result => succes = result.data)
    }
    catch { return null }
    return succes
}
