import '../css/aboutme.css'
import AboutMePicture from '../images/aboutmePicture.png'
import Content from './aboutmeComponents/Content'

function AboutMe() {
  return (
    <div className="aboutme">
        <div className='aboutme-display'>
            <div><img src={AboutMePicture} className='aboutme-picture'/></div>
            <div><Content /></div>
        </div>
    </div>
  )
}

export default AboutMe