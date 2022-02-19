import logo from './logo.png';
function Header(){
    return(
        <header>
                <nav className="nav">
                <img src={logo} alt="logooooo"  width="300px"/>
                   
                    <ul className="nav-items">
                        <li><a href="#specs">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
  
                </nav>
        </header>
    )
  }

  export default Header;