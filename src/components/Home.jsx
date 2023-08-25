import '../css/home.css'
import Details from './homeComponents/Details'
import ProfilePicture from '../images/profilePicture.png'
import TechStack from './homeComponents/TechStack'

function Home() {
    return (
        <div className='home-wrapper'>
            <div className='home-display'>
                <div className='home-details'><Details /></div>
                <div className='home-picture'>
                    <img src={ProfilePicture} />
                </div>
                <div className='home-techStack'><TechStack /></div>
            </div>
        </div>
    )
}

export default Home