import aboutImage from './aboutImage.jpg';
function About(){
    return(
        <div className="about" id="about">
                <img src={aboutImage} alt="logooooo"  className='about-image'/>
                
        
            <div className='about-content'>
                <h1>About Us</h1>
                <br/>
                <p className='about-content-p'>
                    Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
            </div>
  
        <br/>
        <br/>
        </div>
    )
  }

  export default About;