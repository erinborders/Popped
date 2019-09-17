import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container, Paper } from '@material-ui/core'

export default class Categories extends Component {
    state = {
        categories: [],
        categoryEvents: []
    }

    componentDidMount(){
        this.fetchAllCategories()
    }

    // gets all categories and sets them in state so i can loop through them to create a list of buttons
    fetchAllCategories = () => {
        axios.get('/api/fetchAllCategories')
            .then(res => {
                console.log(res.data)
                this.setState({categories: res.data.categories})
            })
    }

    render() {
       let categoryList = this.state.categories.map(category => {
           return(
               <button name={category.id} onClick={this.props.handleCategoryClick}>{category.name}</button>
           )
       })

        return (
            <div>
                <Container>
                    <Paper>
                        <p>Categories</p>
                        {categoryList}
                    </Paper>
                </Container>
            </div>
        )
    }
}
