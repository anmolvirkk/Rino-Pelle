import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import './highlights.css'

export default class Highlights extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container className="highlights" direction="column" alignItems="center">
                    <Grid item style={{width: '100%', marginBottom: '4rem'}}>
                        <Grid container>
                            <Grid item xs={1} />
                            <Grid item xs>
                                <h2>Spotlight</h2>
                                <h1>Explore our seasonal <span>hightlights</span></h1>
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container justify="space-between">
                            <Grid item xs={2}>
                                <img style={{height: '50%'}} alt="coats" src = "https://rino-pelle.exoape.com/wp-content/uploads/2019/12/toomya-long-trench-coat-side-front-800x1067.webp" />
                                <h4>Coats</h4>
                                <h3>Toonya Long Trench Coat</h3>
                            </Grid>
                            <Grid item xs={4}>
                                <img alt="coats" src = "https://rino-pelle.exoape.com/wp-content/uploads/2019/12/toomya-long-trench-coat-side-front-800x1067.webp" />
                                <h4>Coats</h4>
                                <h3>Toonya Long Trench Coat</h3>
                            </Grid>
                            <Grid item xs={3}>
                                <img style={{height: '70%'}} alt="coats" src = "https://rino-pelle.exoape.com/wp-content/uploads/2019/12/toomya-long-trench-coat-side-front-800x1067.webp" />
                                <h4>Coats</h4>
                                <h3>Toonya Long Trench Coat</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
