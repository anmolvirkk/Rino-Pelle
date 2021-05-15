import React, { Component } from 'react'
import {Menu} from '@material-ui/icons'
import {Grid} from '@material-ui/core'
import './header.css'

export default class index extends Component {
    render() {
        return (
            <header>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item>
                        <h1><span>R</span>ino & <span>P</span>elle</h1>
                    </Grid>
                    <Grid item xs />
                    <Grid item xs={5}>          
                        <ul>
                            <li>Home</li>
                            <li>Collection</li>
                            <li>Lookbook</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li><Menu /></li>
                        </ul>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </header>
        )
    }
}
