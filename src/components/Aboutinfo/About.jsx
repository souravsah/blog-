import React from 'react'
import { Aboutcss, Aboutcss1, Aboutcss2 } from './About.style'
import img from "./sourav.jpeg"
const About = () => {
  return (
    <Aboutcss>
        <Aboutcss1>
            <img src={img}/>
        </Aboutcss1>
        <Aboutcss2>
            <h3>I am Sourav Prasad Sah .I am enthusuastic, self-motivated, reliable, responsible and hard working person.I am a mature team worker and adaptable to all challenging situations.</h3>
            <ul>
                <li>My skills are listed below :-</li>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Redux</li>
                <li>NODE JS</li>
                <li>MONGO DB</li>
                <li>C++</li>
            </ul>
            
        </Aboutcss2>
    </Aboutcss>
  )
}

export default About