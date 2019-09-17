import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container, Paper } from '@material-ui/core'

export default class Categories extends Component {
    state = {
        categories: []
    }

    handleClick = (evt) => {
        console.log(evt.target.name)
    }

    render() {
       let idList = Array.from(new Set(this.props.categories.map(category => category ? category.id : null))).map(num => {
           return(
               <button name={num} onClick={this.handleClick}>{num}</button>
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
