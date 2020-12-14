import React, { Component } from 'react'
import "./Search.css"
class  Search extends Component {
    constructor(props) {
        super(props)

        this.handleSearchNew = this.handleSearchNew.bind(this)
    }

    handleSearchNew(event) {
        event.preventDefault()
    }

    render() {
        return (
            <form id="searcher" method="GET" onsubmit="handleSearchNew(event)">
                <input type="text" id="id-search" name="id" required/>
                <button type="submit" id="search-button">Search New</button>
            </form>
        )
    }
} 

export default Search
