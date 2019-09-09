import React from 'react'

const About = props =>  {

  

    return (
        <div>
            <div>
                <h1>Hey! I'm { props.about.name }!!!</h1>
                <h2>While Kool-Aid has been rocking kids' tastebuds since 1927, </h2>
                <h2>I've only been knockin' down walls since { props.about.birthday },</h2>
                <h2>when the brillant minds of {props.about.parents} brought me to life,</h2>
                <h2>and I was born as { props.about.originalName }!</h2>
                <br />
                <h2>I've had quite a career, so be sure to check out my links above to learn more!</h2>
                
            </div>
        </div>
    )
    
}

export default About