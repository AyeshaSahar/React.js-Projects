import pic1 from './pic1.jpg';
function MainContent(){
    return(
        <div className="content">

            <div>
                <img src={pic1} alt="logooooo"  className='tagline-image'/>
            </div>

            <div className='tagline'>
                <h1>SEO Agents</h1>
                <br/>
                <p>
                    We help you get more traffic, visibility, and sales 
                    for your business with our SEO services.
                </p>

                <br/>
                <div class="try-btn">
                    <a href="#000"> TRY FOR FREE</a>
                </div>
            </div>
    
            
        </div>
    )
  }

export default MainContent;