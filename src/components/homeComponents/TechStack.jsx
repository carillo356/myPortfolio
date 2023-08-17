import htmlLogo from '../../images/htmlLogo.png'
import cssLogo from '../../images/cssLogo.png'
import javascriptLogo from '../../images/javascriptLogo.png'
import reactLogo from '../../images/reactLogo.png'
import javaLogo from '../../images/javaLogo.png'

function TechStack() {
    return (
        <>
        <div className='techstack'>
            <img src={htmlLogo} />
            <img src={cssLogo} />
            <img src={javascriptLogo} />
            <img src={reactLogo} />
            <img src={javaLogo} />
        </div>
        </>
    )
}

export default TechStack