import React, { Component } from 'react'
import Header from '../../components/Header'
import {Grid} from '@material-ui/core'
import './home.css'
import Collecton from '../../components/Collection'
import Browse from '../../components/Browse'
import Ethos from '../../components/Ethos'
import Highlights from '../../components/Highlights'
import InstaGrid from '../../components/InstaGrid'
import { ArrowRight } from '@material-ui/icons'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <Grid container direction="column" justify="center" alignItems="center" style={{width: '100%'}}>
                <Grid item>
                    <img src="/logo.png" style={{height: '5rem'}} alt="logo" />
                </Grid>
                <Grid item style={{fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.75rem', marginTop: '3rem'}}>
                    Detailed Craftsmanship
                </Grid>
                <Grid item className="heroTitle" xs={8}>
                    <p>Luxurious <span>and</span> contemporary appeal — <span>for</span> every woman</p>
                </Grid>
                <Grid item xs={11}>
                    <Grid container className="heroSlider" spacing={4} justify="center" alignItems="center">
                        <Grid item xs={3}>
                            <img style={{height: '60vh'}} alt="hero" src="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/lookbook-23-1-800x1198.webp" />
                        </Grid>
                        <Grid item xs={3}>
                            <img style={{height: '80vh'}} alt="hero" src="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/lookbook-29-1-800x1198.webp" />
                        </Grid>
                        <Grid item xs={3}>
                            <img style={{height: '60vh'}} alt="hero" src="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/lookbook-25-1-800x1198.webp" />
                        </Grid>
                        <Grid item xs={3}>
                            <img style={{height: '30vh'}} alt="hero" src="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/lookbook-33-800x534.webp" />
                        </Grid>
                    </Grid>
                </Grid>
                <Collecton type="Latest Collection" title="Spring - Summer 2020" button="Lookbook" img1="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/rino-pelle-banner-summer-collection-1-800x1200.webp" img2="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/lookbook-35-1-800x1198.webp" text="Colourful suede jackets and
reinvented trench coats are
what characterizes the spring
summer collection of
Rino&Pelle." />    
                <Browse />
                <Grid item>
                    <video style={{width: '100%', height: '80vh', objectFit: 'cover', marginTop: '25vh'}} autoPlay={true} muted={true} loop={true} playsInline={true}>
                        <source src="https://rino-pelle.exoape.com/wp-content/uploads/2020/01/placeholder-1.mp4" type="video/mp4" />
                    </video>
                </Grid>
                <Ethos type="Our Ethos" title="Effortless
Chic Lifestyle" text="Making a luxurious lifestyle
accessible for a generous group
of women is our daily drive.

ABOUT US
" button="About Us" img1="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/detail-rino-pelle-badge-jacket-800x1202.webp" img2="https://rino-pelle.exoape.com/wp-content/uploads/2020/03/detail-about-03-800x1200.webp" />
                <Highlights />
                <Grid item>
                    <Grid container justify="center">
                        <Grid item>
                            <InstaGrid />
                        </Grid>
                        <Grid item xs={10} className="insta">
                            <h2>Instagram</h2>
                            <h1>Follow us<br /> <span>@rinopelleofficial</span></h1>
                            <p>Become a part of our stories! Join the adventure.</p>
                            <button><p>Follow Us</p><ArrowRight /></button>
                        </Grid>
                    </Grid>
                </Grid>
                <Newsletter />
                <Footer />
            </Grid>
            </React.Fragment>
        )
    }
}
