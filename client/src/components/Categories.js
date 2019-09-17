import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container, Paper } from '@material-ui/core'

export default class Categories extends Component {
    state = {
        categories: []
    }

    handleClick = () => {
        console.log('working')
    }

    render() {
       let idList = Array.from(new Set(this.props.categories.map(category => category ? category.id : null))).map(id => {
           return(
               <Button onClick={this.handleClick}>{id}</Button>
           )
       })

        return (
            <div>
                <Container>
                    <Paper>
                        <p>Categories</p>
                        {/* {categoryNameList} */}
                        {idList}
                    </Paper>
                </Container>
            </div>
        )
    }
}
