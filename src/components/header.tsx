import './header.css'
import logo from '../assets/images/webforyuLogo.png'


export default function Header() {
    

    return (
       
        <div className='navbar'>
           
           <a href='/home'>
            <div className='navbar-left'>
                <div className='navbar-logo'>
                    <img src={logo} alt="logo"  />
                </div>
                <div className='navbar-title'>WebForYu</div>
                </div>
            </a>

                <div className='navbar-right'>
                    <a href='/product'><div className='navbar-item'>Product</div></a>
                    <a href='/aboutus'><div className='navbar-item'>About Us</div></a>
                    <a href='/#home-page3'><div className='navbar-item'>Contact Us</div></a>
                </div>
          
        </div>
       


    
    )
}