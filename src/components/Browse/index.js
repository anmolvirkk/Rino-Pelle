import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import {ArrowRight} from '@material-ui/icons'
import './browse.css'

const browseImgs = {
    kitwear: [
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/zazi-long-printed-dress-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/paskal-long-knitted-vest-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/kenora-short-knitted-vest-side-front-800x1067.webp"
        ],
    jackets: [
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/01/ummi-leather-biker-jacket-open-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/bridie-long-zipped-jacket-side-front-800x1067.webp"
    ],
    coats: [
        "https://rino-pelle.exoape.com/wp-content/uploads/2019/12/toomya-long-trench-coat-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/kyona-long-trench-coat-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/deira-long-woolblend-coat-side-front-800x1067.webp"
    ],
    tops: [
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/01/welly-vneck-top-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/miko-lightweight-blouse-side-front-800x1067.webp"
    ],
    skirts: [
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/cade-zipped-leather-skirt-front-left-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/03/maika-vegan-leather-skirt-front-left-800x1067.webp"
    ],
    dresses: [
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/oved-straight-dress-side-front-800x1067.webp",
        "https://rino-pelle.exoape.com/wp-content/uploads/2020/02/zazi-long-printed-dress-side-front-800x1067.webp"
    ]
}

export default class Browse extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center" className="browse">
                    <img alt="" src = {browseImgs.coats[0]} style={{position: 'absolute', height: '60vh', right: '10vw'}} />
                    <img alt="" src = {browseImgs.coats[1]} style={{position: 'absolute', height: '30vh', left: '20vw', top: '4rem'}} />
                    <img alt="" src = {browseImgs.coats[2]} style={{position: 'absolute', height: '30vh', left: '5vw', bottom: '4rem'}} />
                    <Grid item>
                        <h2>Browse Collection</h2>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <h1>Kintwear</h1>
                            </Grid>
                            <Grid item>
                            <h1>Jackets</h1>
                            </Grid>
                            <Grid item>
                            <h1>Coats</h1>
                            </Grid>
                            <Grid item>
                            <h1>Tops</h1>
                            </Grid>
                            <Grid item>
                            <h1>Skirts</h1>
                            </Grid>
                            <Grid item>
                            <h1>Dresses</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <button><ArrowRight style={{borderBottom: '1px solid #cb9274', paddingBottom: '1rem', width: '3rem'}} /><p style={{paddingBottom: '1rem'}}>View Everything</p></button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
