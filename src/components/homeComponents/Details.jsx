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
            <img src={facebookLogo} className='details-facebookLogo' href="https://www.facebook.com/aaronjoseph.carillo/"/>
            <img src={jobstreetLogo} className='details-jobstreetLogo' href="https://myjobstreet.jobstreet.com.ph/resume/attachment.php?tk=1&rid=11963376932"/>
        </div>
        </>
    )
}

export default Details