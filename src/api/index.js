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

const BACKEND_ENDPOINT = "http://localhost:8080/news"

export  const getArticles = async (id) => {
    try {
        const articles = await fetch(`${BACKEND_ENDPOINT}?id=${id}`)
        console.log(articles)
        return articles.json()  
    } catch (error) {
        console.error(error)
        throw error
    }

    // return articles
}

export const login = async (data) => {
    const { email, password } = data
    if (email === "asdf") {
        return true
    }
    return false
    // try {
    //     const result = await fetch(`${BACKEND_ENDPOINT}/login`,{
    //         method: "POST"
    //     })
    // } catch()
}

// export const getArticles = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve(FAKE_DATA)
//     }, FAKE_DELAY)
// })
