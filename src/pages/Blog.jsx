import React, { Component } from 'react'

class Blog extends Component {

    render() {
        let posts = this.props.posts.map((p, i) => {
            return (
                <div key={i}>
                    <hr />
                    <h2>{p.title}</h2>
                    <p className="subtext"><i>{p.text}</i></p>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <h1>I get a lot of fan mail; here are some answers to questions from inquiring minds:</h1>
                    <div>
                        { posts }
                    </div>
                </div>
            </div>
        )
    }

}

export default Blog