import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import {ArrowRight} from '@material-ui/icons'
import './newsletter.css'

export default class Newsletter extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center" className="newsletter">
                    <Grid item>
                        <h2>Newsletter</h2>
                    </Grid>
                    <Grid item>
                        <h1><span>Subscribe</span> to get the latest updates</h1>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center">
                            <Grid item>
                                <h3>Type</h3>
                            </Grid>
                            <Grid item>
                                <h3 style={{borderBottom: '2px solid #cb9274'}}>Customer</h3>
                            </Grid>
                            <Grid item>
                                <input type="text" placeholder="Email Address" />
                            </Grid>
                            <Grid item>
                                <button><p>Subscribe</p><ArrowRight /></button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
