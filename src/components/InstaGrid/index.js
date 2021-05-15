import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import {Instagram} from '@material-ui/icons'
import './instagrid.css'

export default class InstaGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container justify="center" alignItems="flex-end" className="instaGrid" spacing={4} style={{width: '100%', overflow: 'hidden'}}>
                    <Grid item xs={2}>
                        <Grid container direction="column" alignItems="flex-end" justify="flex-end" spacing={3}>
                            <Grid item xs={12}>
                                <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-1-480x480.webp" alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-4.webp" alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
 
                    <Grid item xs={3}>
                        <Grid container direction="column" spacing={3}>
                            <Grid item xs={12}>
                                <Grid container justify="flex-end" spacing={4}>
                                    <Grid item xs={4}>
                                        <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-3-800x800.webp" alt="" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-8-480x480.webp" alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-6-800x800.webp" alt="" />
                            </Grid>
                            <Grid item xs={12}>
                            <Grid container justify="flex-end" spacing={2}>
                                    <Grid item xs={3}>
                                        <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-2-800x800.webp" alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
 
                    <Grid item xs={2}>
                        <Grid container direction="column" alignItems="flex-start" justify="flex-start" spacing={3}>
                            <Grid item xs={4}>
                                <Instagram style={{width: '100%', height: '100%', background: '#cb9274', color: 'white', boxSizing: 'border-box', padding: '1.25rem'}} />
                            </Grid>
                            <Grid item xs={12}>
                                <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-7-250x250.webp" alt="" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src = "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/instagram-tile-5-250x250.webp" alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
