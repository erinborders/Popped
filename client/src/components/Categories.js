import React, { Component } from 'react'
import axios from 'axios'
import { Button, Container, Paper } from '@material-ui/core'

export default class Categories extends Component {
    state = {
        categoryEvents: []
    }

    handleClick = (evt) => {
        console.log(evt.target.name)
        axios.get(`/api/fetchEventCategories/?categories=${evt.target.name}`)
            .then(res => {
                console.log(res.data)
            })
    }

    render() {
       let idList = Array.from(new Set(this.props.categories.map(category => category ? category.id : null))).map(num => {
           return(
               <button name={num} onClick={this.handleClick}>{num}</button>
           )
       })

       let nameList = Array.from(new Set(this.props.categories.map(category => category ? category.name : null))).map(name => {
        return(
            <button onClick={this.handleClick}>{name}</button>
        )
    })

        return (
            <div>
                <Container>
                    <Paper>
                        <p>Categories</p>
                        {/* {categoryNameList} */}
                        {idList}
                        {/* {nameList} */}
                    </Paper>
                </Container>
            </div>
        )
    }
}
