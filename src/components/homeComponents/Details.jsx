import { Link } from 'react-scroll'
import facebookLogo from '../../images/facebookLogo.png'
import jobstreetLogo from '../../images/jobstreetLogo.png'

function Details() {
    return (
        <>
        <div className="details-text">
            <div>Web Developer</div>
            <div>Hi, I'm Aaron Joseph Carillo. <br/> A passionate Web Developer <br/> based in Pasig, Philippines. </div>
        </div>
        <div className="details-social">
            <a href="https://www.facebook.com/aaronjoseph.carillo/" target="_blank"><img src={facebookLogo} className='details-facebookLogo' /></a>
            <a href="https://drive.google.com/file/d/1ZdZiFASTEdjPJ4sVh9TVDgdHOmSVNuZ2/view?usp=sharing" target="_blank"><img src={jobstreetLogo} className='details-jobstreetLogo' /></a>
        </div>
        </>
    )
}

export default Details