import '../components/product.css'

import Header from '../components/header';
import Footer from '../components/footer';

export default function Product() {



    return (
        <div className="product-background">
            <Header />
            <div className="product-container">

                <h1>Our Services</h1>



                <div className='product-card-container'>

                    <div className='product-card'>
                        <h2>Online Portfolio</h2>
                        <p>Stand out with a flashy online portfolio. We can tailor your portfolio to fit the exact vibe you need. Your portfolio can be easily shared by a link that can be sent by email or posted on your social media. Your portfolio can hold your resume, pictures, or even samples of your music. Your portfolio is yours to use and share with the world.</p>

                    </div>


                    <div className='product-card'>
                        <h2>Website Design</h2>
                        <p>Have a website of your dreams? Allow us to make the perfect website for Yu. We can schedule a one-on-one meeting to discuss what it is you need for your perfect website. Whether it is flashy pictures or just an online billboard, we can do it just for Yu.</p>
                    </div>

                    <div className='product-card'>
                        <h2>Website Management</h2>
                        <p>Tired of running your website through website generators? Are you often changing the website to match the season? Do you wish to free yourself from your website duties to focus on running your business? Then contact us, leave running your website up to us. We can easily take over your website and even change it to better fit your style. No more headaches or sudden technical problems, as we will solve them for Yu.</p>
                    </div>

                    <div className='product-card'>
                        <h2>Redesign & Upgrade</h2>
                        <p>Need to freshen up your dated website? Want a change but want to keep control of the website? We can come in and revitalize the look just for you. Need a change for the holiday season, or maybe it is time for a new style. We can do it just for Yu.</p>
                    </div>


                </div>

            </div>
            <Footer />
        </div>

    );
}
