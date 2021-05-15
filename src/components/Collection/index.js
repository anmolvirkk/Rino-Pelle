import React from 'react'
import {Grid} from '@material-ui/core'
import {ArrowRight} from '@material-ui/icons'
import './collection.css'

export default function Collections(props) {
        return (
                        <Grid container className="collectionSide">
                            <Grid item xs={1} />
                            <Grid item xs={4}>
                                <h2>{props.type}</h2>
                                <h1>{props.title}</h1>
                                <p>{props.text}</p>
                                <button><p>{props.button}</p><ArrowRight /></button>
                            </Grid>
                            <Grid item xs={6} style={{position: 'relative'}}>
                                <img style={{right: 0}} src = {props.img1} alt={props.title} />
                                <img style={{top: '35%', right: '35%', height: '50%'}}src = {props.img2} alt={props.title} />
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
        )
    }
