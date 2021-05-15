import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import './footer.css'
import {ArrowRight} from '@material-ui/icons'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container className="help" justify="space-evenly">
                    <Grid item xs={1}>
                        <h1>Need<br /><span>Help?</span></h1>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container justify="space-between">
                            <Grid item xs={3}>
                                <h2>Where to buy?</h2>
                                <p>Interested? Find the nearest store to me.</p>
                                <button><ArrowRight style={{borderBottom: '1px solid #cb9274', paddingBottom: '1rem'}} /><p>Product Locator</p></button>
                            </Grid>
                            <Grid item xs={3}>
                                <h2>Wholesale</h2>
                                <p>Already a member? Login to discover our collections.</p>
                                <button><ArrowRight style={{borderBottom: '1px solid #cb9274', paddingBottom: '1rem'}} /><p>B2B Login</p></button>
                            </Grid>
                            <Grid item xs={3}>
                                <h2>Need help?</h2>
                                <p>Haven’t found what you’re looking for? Contact us.</p>
                                <button><ArrowRight style={{borderBottom: '1px solid #cb9274', paddingBottom: '1rem'}} /><p>Customer Service</p></button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="footer" justify="space-evenly">
                    <Grid item>
                        <h2>Navigate</h2>
                        <ul>
                            <li>Home</li>
                            <li>Collection</li>
                            <li>Lookbook</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <h2>Need help?</h2>
                        <ul>
                            <li>Customer Service</li>
                            <li>Store Locator</li>
                            <li>B2B Login</li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <h2>Social</h2>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </Grid>
                    <Grid item xs={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <img src = "/logo.PNG" alt="" />
                    </Grid>
                </Grid>
                <Grid container className="copyright">
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <p>All rights reserved — 2019 © Rino & Pelle</p>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <p>Terms & Conditions</p>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>       
                        <p>Developed by Anmol Virk</p>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
