import React, { Component} from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import { checkServerIdentity } from 'tls';


class Content extends Component {

    about = {
        name: 'Kool-Aid Man',
        originalName: '"The Pitcher Man"',
        birthday: 'July 10, 1954',
        parents: 'Marvin Potts and General Foods',
        email: 'kam@kool-aid.man'
    }

    posts =[
        {
            title: 'What is you favorite flavor?',
            text: 'I am a setnimental sap, so I will lean towards the original six flavors: Cherry, Grape, Lemon-Lime, Orange, Raspberry, Strawberry.'
        }, {
            title: 'Why are you so bitter by yourself?',
            text: 'Well, a fine man named Edwin Perkins in Hsatings, Nebraska fig;ured out how to dehydrate a liquid concentrate called Fruit Smack, and the reast is history. While Kool-Aid can be found pre-sweetened, the powder is the original design.'
        }, {
            title: 'What ever happened to the Berry Blue flaovr? It was the best!',
            text: 'We have tried many styles, and some have stayed the test of time; regardless, you never know when we will dip into the archives, so stay tuned!'
        }, {
            title: 'How DO you break throgh those walls?',
            text: 'I am a special-grade creation, so do not worry about me! And, before you ask how I pay for said walls: let us just say I have a "sugar"-mama...😉'
        }
    ]

    projects = [
        {
            title: 'My First Wall:',
            image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Kool-Aid_Man_breaking_wall_19',
            blurb: 'You never forget your first....'
        }, {
            title: 'My Comics Series: ',
            image: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/701975.jpg',
            blurb: 'It was so popular, they only ran seven issues!'
        }, {
            title: 'My Family Guy Appearance: ',
            image: 'https://media.tenor.com/images/d7a36c3ea24ba0fcb87e8e79e1f78ba3/tenor.gif',
            blurb: 'Seth is still laughing from this; I am a natural!'
        },
    ]

    render () {

        return (
            <main>
                <Route exact path="/" component={ Home } />
                <Route path="/about" render={
                    () => <About about={this.about} />
                } />
                <Route path="/blog" render={
                    () => <Blog posts={this.posts} />
                } />
                <Route path="/projects" render={
                    () => <Projects projects={this.projects} />
                } />
            </main>
        )
    }
}
export default Content