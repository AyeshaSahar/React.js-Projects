import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about-content'>
        <p>Created on 10th Feb, 2022 :)</p>
        <br/>
        <Link to ="/">Go back to the main page</Link>
    </div>
  )
}

export default About;