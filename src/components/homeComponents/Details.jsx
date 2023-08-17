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
            <img src={facebookLogo} className='details-facebookLogo'/>
            <img src={jobstreetLogo} className='details-jobstreetLogo'/>
        </div>
        </>
    )
}

export default Details