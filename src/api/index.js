import config from "../config/index.js";
const FAKE_DELAY = 2000
const FAKE_DATA = [
    {
        id: 1,
        title: "Boletín informativo",
        datetime: "05/10/2014 12:12:12",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." + 
                "Assumenda hic dolor, tempore, asperiores corporis quos perspiciatis"
    }
]
const {BACKEND_ENDPOINT} = config
const NEWS_ENDPOINT = `${BACKEND_ENDPOINT}/news`
const LOGIN_ENDPOINT = `${BACKEND_ENDPOINT}/login`



export  const getArticles = async (id) => {
    try {
        const articles = await fetch(`${NEWS_ENDPOINT}?id=${id}`)
        return articles.json()  
    } catch (error) {
        console.error(error)
        throw error
    }

    // return articles
}

export const login = async (data) => {
    const { email, password } = data

    try {
        const result = await fetch(LOGIN_ENDPOINT,{
            method: "POST",
            body: JSON.stringify({"email": email, "password": password}),
            headers: {
                "Content-Type": "application/json"
            }
        })

        return (result.status) !== 200 ? false : true
    } catch(error) {
        return false
    }
}

// export const getArticles = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve(FAKE_DATA)
//     }, FAKE_DELAY)
// })
