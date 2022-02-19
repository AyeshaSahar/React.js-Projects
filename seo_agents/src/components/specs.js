import f from './f.jpg';
import a from './a.jpg';
import b from './b.jpg';
function Specs(){
    return(
        <div className="specs" id="specs">
            <br/>
            <br/>
            <div className="feature-heading">
                <h1>Features</h1>
            </div>

            <br/>
            <div className="feature1">

                <img src={f} alt="feature1" height="250px" width="280px"/>
                <br/>
                <br/>
                <p>Lorem ipsum Lorem ipsum lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>

            </div>

            <div className="feature2">

                <img src={a} alt="feature1" width="250px"/>
                <br/>
                <br/>
                <p>Lorem ipsum Lorem ipsum lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>

            </div>

            <div className="feature3">

                <img src={b} alt="feature1" width="250px"/>
                <br/>
                <br/>
                <p>Lorem ipsum Lorem ipsum lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>

            </div>
            

    
            
        </div>


    )
  }

export default Specs;