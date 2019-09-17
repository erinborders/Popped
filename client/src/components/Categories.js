import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container, Paper } from '@material-ui/core'

export default class Categories extends Component {
    state = {
        categories: [],
        categoryEvents: [],
        categoryIds: []
    }

    componentDidMount(){
        this.fetchAllCategories()
        this.findCategoryIds()
    }

    findCategoryIds = () => {
        let categorySet = Array.from(new Set(this.props.eventsByZipcode.map(event => event.category_id)))
        this.setState({categoryIds: categorySet})
    }

    // gets all categories and sets them in state so i can loop through them to create a list of buttons
    fetchAllCategories = () => {
        axios.get('/api/fetchAllCategories')
            .then(res => {
                let categoriesWithEvents = res.data.categories.filter(category => this.state.categoryIds.includes(category.id))
                console.log('test', categoriesWithEvents)
                this.setState({categories: categoriesWithEvents})
            })
    }

    render() {
       let categoryList = this.state.categories.map(category => {
           return(
               <button className="category-button" name={category.id} onClick={this.props.handleCategoryClick}>{category.name}</button>
           )
       })

        return (
            <div>
                <Container>
                    <Container className="category-container">
                        {categoryList}
                        <button className="category-button" onClick={this.props.handleAllButton}>All</button>
                    </Container>
                </Container>
            </div>
        )
    }
}
