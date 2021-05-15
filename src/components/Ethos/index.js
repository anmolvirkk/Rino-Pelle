import React from 'react'
import {Grid} from '@material-ui/core'
import {ArrowRight} from '@material-ui/icons'
import './ethos.css'

export default function Collections(props) {
        return (
                        <Grid container className="collectionSide">
                            <Grid item xs={1} />
                            <Grid item xs={6} style={{position: 'relative'}}>
                                <img style={{left: 0}} src = {props.img1} alt={props.title} />
                                <img style={{top: '55%', left: '40%', height: '50%'}}src = {props.img2} alt={props.title} />
                            </Grid>
                            <Grid item xs={4} style={{position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "flex-start"}}>
                                <h2>{props.type}</h2>
                                <h1>{props.title}</h1>
                                <p>{props.text}</p>
                                <button><p>{props.button}</p><ArrowRight /></button>
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
        )
    }
