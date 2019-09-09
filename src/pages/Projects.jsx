
import React, { Component } from 'react'

class Projects extends Component {

     projects = this.props.projects.map((p, i) => {
        return (
            <div key={i}>
                <hr />
                <h2>{p.title}</h2>
                {p.image}
                <h3>{p.blurb}</h3>
            </div>
        )
    })

    render() {
        
        return (
            <div>
                <div>
                    <h1>Check Out Some of my Greater Projects: </h1>
                    <div>
                        { projects }
                    </div>
                </div>
            </div>
        )
    }

}

export default Projects