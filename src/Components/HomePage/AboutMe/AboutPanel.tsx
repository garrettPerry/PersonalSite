import './AboutPanelStyle.css'
import { Link } from 'react-router-dom'

function AboutPanel() {
return (
    <div className="panel panel-about" style={{ gridArea: 'about' }}>
        <div className="panel-header">
            <span>About</span>
        </div>
        <div className="panel-body">
            
            <p>
                Welcome to my website, there are many like it but this one is mine! I have a degree in software development, but have transitioned into working in the IT field and thought this would be a fun project to keep up my programming skills. As is likely apparent I'm no frontend developer, but I was inspired by neocities and older sites to make something a little outside of my comfort zone. Speaking of my comfort zone I typically work in languages like C#, Java, Python and Javascript, click on the <Link to="/projects">projects</Link> tab to see what I've worked on!
            </p>
            <p>
                I'm hoping to make this website a mix of personal things I've already worked on and using it as a fun way to learn new skills. If you have any thoughts and opinions please let me know, I'm not a trained webdev and would love some constructive criticism. Feel free to leave a note in the <Link to="/guestbook">guest book</Link>, or take a glance through the <Link to="/photos">photos</Link> tab to see what I've felt like posting there. Thanks for visiting my site!
            </p>
            <p className="about-date">May 29, 2026</p>
            </div>
        </div>
    )
}

export default AboutPanel