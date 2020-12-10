import React, {Component} from 'react'
import Article from '../Article/Article'
import Loading from '../Common/Loading'
import { getArticles } from "../../api"
import "./News.css"

class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            articles: null,
            error: null
        }

        this.handleSearchNew = this.handleSearchNew.bind(this)
    }

    async componentDidMount() {
        this.setState({ isLoading: true })

        try {
            const articles = await getArticles(1)

            this.setState({articles, isLoading: false})
        } catch(error) {
            this.setState({ error, isLoading: true})
        }

        return true
    }

    async handleSearchNew(event) {
        event.preventDefault()
        const data = new FormData(event.target)

        const res = await getArticles(data.get("id"))
        // let res = await fetch("http://localhost:8080/news", {
        //     method: "GET",
        //     data: data
        // })
        this.setState({articles: res})

    }

    render() {
        const { articles, isLoading, error } = this.state
        if(isLoading) return (<Loading message="Cargando..."/>)
        if(error) return <p className="error">{error.message}</p>
        return (
            <React.Fragment>
                <form id="searcher" method="GET" onSubmit={this.handleSearchNew}>
                    <input type="text" id="id-search" name="id" required/>
                    <button type="submit" id="search-button">Search New</button>
                </form>
                <section id="content">
                    <h1>Noticias</h1>
            
                    <div className="clearfix"></div>
            
                    <div id="articles">
                        {
                            // articles && articles.map((article, i) => {
                            //     return (<Article key={i} data={article}/>);
                            // })
                            articles && <Article key={0} data={articles}/>
                        }
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default News;