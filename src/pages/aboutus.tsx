import '../components/aboutus.css';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import alvin from '../assets/images/alvinpic.jpg';
import gabe from '../assets/images/gabepic.jpg'

export default function AboutUs() {
    return (
        <>
         <div className="aboutus-background">
            < Header/>
            <div className="aboutus-container">

                <div className="aboutus-title">
                    <h1>About Us</h1>
                    <p>Get to know WebForYu!</p>
                </div>


{/* Gabe intro */}
<div className='intro-container'>
    <div className='intro-title'>
        <p>Gabriel Black -- Founder</p>
    </div>

    <div className='intro-para'>
        <p>My name is Gabriel Black, and I am the owner and operator of WebForYu. Born and raised in New Orleans, I attended Tulane University, where I got my degree in Homeland Security. During college, I learned about cybersecurity and web design. When I first learn web design, I realized how hard and complex it was to run and design a website. As well, the website design services all look the same, with only templates that cannot be customized to the maximum enjoyment. Now, add running a business on top of running a website, and it is too much to learn. Finally, I started WebForYu to run websites for people so they can get back to running their businesses.</p>
  
  <div className='aboutus-photo'>
    <img src={gabe}></img>
  </div>
  
  
    </div>
</div>


{/* Alvin intro */}
<div className='intro-container'>
    <div className='intro-title'>
        <p>Alvin Yu -- Software Engineer</p>
    </div>

    <div className='intro-para'>
        <p>Hi my name is Yuanhan Yu, AKA Alvin. I'm the software engineer at WebForYu. 
            I graduated with a bachelor's degree in software engineering in Shanghai then 
            I decided to start a new journey in the U.S to get my master's degree in computer
             science at Tulane University. I've done a lot projects in different computer fields 
             such as software engineering, deep learning, parallel computing and etc. I found my 
             biggest interest is in software engineering and web development. That's why I decide
              to join WebForYu to create the ideal website for people to help them grow their career
               and business. I'll work hard to help you make a website that is perfect just for 
               you.<br/>
            Check out my Portfolio here!: <a href='https://my-portfolio-jwgq9e8sc-yuanhan-yus-projects.vercel.app/' target='_blank' rel="noreferrer">Alvin's portfolio</a>
               
               </p>
  <div className='aboutus-photo'>
    <img src={alvin}></img>
  </div>
  
  
    </div>
</div>



            </div>

        </div>
        <Footer />
        </>
    )
}