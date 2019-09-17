import React, { Component } from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'

export default class Categories extends Component {

    render() {
        let categoryNameList = this.props.categories.map(category => {
            if(category){
                return(
                    <Button variant="outlined">{category}</Button>
                )
            }
        })

        return (
            <div>
                <p>Categories</p>
                {categoryNameList}
            </div>
        )
    }
}
