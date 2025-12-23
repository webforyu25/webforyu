
import '../components/home.css';
import Header from '../components/header.tsx';
import { useRef, useState } from 'react';
import Footer from '../components/footer.tsx';
import backgroundpic from '../assets/images/backgroundpic.jpg'


export default function Home() {

    // slider for products
    const [index, setIndex] = useState(0);

    const services = [
        {
            title: "Online Portfolio", desc1: "Stand out with a flashy online portfolio. We can tailor your portfolio to fit the exact vibe you need.",
            desc2: "Your resume, pictures, life experiences, even samples of your music can be showcased beautifully on the website"
        },
        {
            title: "Website Design", desc1: "Have a website of your dreams? Allow us to make the perfect website for Yu.",
            desc2: "We are here to help you to build up your business billboard online showing off your products and your company story"
        },
        {
            title: "Website Management", desc1: "Tired of running your website through website generators? Do you wish to free yourself from your website duties to focus on running your business?",
            desc2: "Then contact us, leave running your website up to us. No more headaches or sudden technical problems, as we will solve them for Yu."
        },
        {
            title: "Redesign & Upgrade", desc1: "Need to freshen up your dated website? Need a change for the holiday season?",
            desc2: "We can recreate your website just for Yu."
        }
    ];

    const prev = () => {
        setIndex((index - 1 + services.length) % services.length);
    };

    const next = () => {
        setIndex((index + 1) % services.length);
    };


    // slide windows for mobile
    const touchStartX=useRef(0);
    const touchEndX=useRef(0);


    const handleTouchStart=(e:any)=>{
        touchStartX.current=e.targetTouches[0].clientX;
    }

    const handleTouchMove=(e:any)=>{
        touchEndX.current=e.targetTouches[0].clientX;
    }

    const handleTouchEnd=()=>{
       const diff=touchStartX.current - touchEndX.current;
     if (Math.abs(diff)>50){
        next();
    }}
    





    return (
        <>
            {/*  home page1 */}
            <section className='home-background1' id='home-page1'>
                <Header />
                <div className='home-container1'>

                    <div className='home-title'>
                        <h1>WebForYu</h1>
                        <p>Based in New Orleans, we are a small, tight-knit group of coders
                            who will craft custom websites as unique as the city itself. We don't do templates
                            or cookie-cutter layouts. Every design is built from scratch,
                            shaped around your story, your goals, and your style </p>
                        <div className='home-button-container'>
                            <button className='home-button1' onClick={() => window.location.href = '#home-page2'}>View Our Service</button>
                            <button className='home-button2' onClick={() => window.location.href = '#home-page3'}>Connect With Us</button>
                        </div>


                    </div>
                   
 <div className='home-backimg'>
                        <img src={backgroundpic}></img>
                    </div>

                </div>
                
              

            </section>


            {/*  home page2 */}
            <section className='home-background2' id='home-page2'>


                <div className='home-container2'>

                    <h1>Our Services</h1>




                    <div className="slider-container">

                        


                        <div className="slider-window" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                           
                        <div className='slider-topline'>

                        </div>

                        <div className='slider-bottomline'>

                        </div>
                            <button className="arrow-left" onClick={prev}>←</button>

                            <a href='/product'>
                                <div className="slider-content" style={{ transform: `translateX(-${index * 100}%)` }}>
                                    {services.map((s) => (


                                        <div className="slide" key={s.title}>
                                            <h2>{s.title}</h2>
                                            <p>{s.desc1}</p>
                                            <p>{s.desc2}</p>
                                            <h3>Click the window to learn more</h3>
                                        </div>



                                    ))}
                                </div>
                            </a>
                            <button className="arrow-right" onClick={next}>→</button>
                        </div>


                    </div>




                </div >
            </section >


            {/*  home page3 */}
            < section className='home-background3' id='home-page3' >
                <div className='home-container3'>
                    <div className='home-page3-title'>
                        <h1>Contact Us</h1>
                        <p>We are happy to help! With just one click we can get in touch.  </p>
                    </div>

                    <div className='contact-link'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=webforyu25@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">Contact Us Through Email <br /> webforyu25@gmail.com</a>
                    </div>

                </div>

            </section >









            < Footer />
        </>
    );
}