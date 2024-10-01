import React from 'react'
import "./Home1.css";
import Nav from '../narbar/Nav';
import Sitebar from '../sitebar/Sitebar';
import {useNavigate} from 'react-router-dom'

function Home1() {

  const navigate=useNavigate();
  return (
    <>

    <div class="main">
        <div id="home">
    <Nav/>

            <div class="home-hero">
                <div class="hero-text">
                    <p>New Generation</p>
                    <h1>Shop <span>Local</span></h1>
                    <h1>Live <span>Better</span></h1>
                    <h1>Your <span>Neighborhood </span>Store Just A Click Away</h1>
                    <button  onClick={()=>navigate("/shoping/signin")}>Get Started</button>
                </div>
                <div class="hero-image">
                    
                <lottie-player src="https://lottie.host/ea591eaa-4693-436c-9b3f-d4f47a56b07b/1wxjy6UsH1.json" background="trnsparent" speed="1" style={{width:"100%",height: "80%"}} loop  autoplay direction="1" mode="normal"></lottie-player>
                    {/* <dotlottie-player src="https://lottie.host/2707de76-e100-48a6-92e4-4ef4cf41c725/4mvilbwGKO.json" background="transparent" speed="1" style={{width:"100%",height: "100%"}} loop autoplay></dotlottie-player> */}
                </div>
            </div>
        </div>
        <div class="features">
            <div class="feature-text">
                <h1>Smart Shopping:Value,Ease,and Satisfaction</h1>
                <p>At Local Store, we combine market insights, effortless shopping, and a commitment to your satisfaction. Discover a seamless shopping experience tailored to your needs</p>
            </div>
            <div class="feature-style">
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-shop"></i></div>
                    <div class="icon-text">
                        <h3>Market Analysis</h3>
                        <p>"Understanding what you need before you even know it! At Local Store, we keep our finger on the pulse of the market, ensuring the best products at competitive prices"</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-bag-shopping"></i></div>
                    <h3>Easy Purchase</h3>
                    <p>"Shopping made effortless! With a simple interface and smooth checkout process, we’ve made it easy for you to get what you need in just a few clicks"</p>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-face-smile"></i></div>
                    <h3>100% Satistified</h3>
                    <p>"Your happiness is our guarantee! We’re committed to delivering quality products with unmatched service. If you’re not 100% satisfied, we’re not either—because your satisfaction is our success"</p>
                </div>

            </div>
        </div>
        <div className="selling">
            <div className="selling-text">
                  <h1>Best Selling Products</h1>
                  <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="#"/>
            </div>
            <div className="selling-style">
                <div className="selling-box">
                    <img src="https://m.economictimes.com/thumb/msid-95679392,width-1200,height-900,resizemode-4,imgsize-60796/almonds-.jpg" alt="Almonds" />
                    <div className="details">
                        <p>Nuts</p>
                        <h3>Almonds</h3>
                    </div>
                </div>
                <div className="selling-box">
                    <img src="https://www.moglix.com/blog/wp-content/uploads/2020/05/hand-sentizers.jpg" alt="Sanitizer Picture"/>
                    <div className="details">
                        <p>Curing</p>
                        <h3>Sanitizer</h3>
                    </div>
                </div>
                <div className="selling-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEhzp8YEhcWQUsigAtJpLY2kyybZIAxM8Ew&s" alt="Mustard Oil Picture "/>
                    <div className="details">
                        <p>Oil</p>
                        <h3>Mustard Oil</h3>
                    </div>
                </div>
                <div className="selling-box">
                    <img src="https://i.pinimg.com/736x/dd/ef/9a/ddef9aa1c9c4ef5250cf634b64d8822d.jpg" alt="Red Chilli Picture"/>
                    <div className="details">
                        <p>Spices</p>
                        <h3>Kashmiri Red Chilies</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="feed">
            <div className="feedback">
                <div className="feedback-text"> <h1>Customers Reviews</h1></div>
                <div className="feedback-style">
                    <div className="reviews-box">
                        <div className="star">
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div className="customer-text">
                            <p>“I was impressed by how easy it was to find exactly what I needed. The checkout was quick, and my order arrived right on time. Definitely my go-to store now!” </p>
                            <h5>-Dev P</h5>
                        </div>
                    </div>
                    <div className="reviews-box">
                        <div className="star">
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div className="customer-text">
                            <p>“Local Store has everything! From essentials to specialty items, I’m always able to find what I need at great prices. Highly recommend!”</p>
                            <h5>-Shreyas T</h5>
                        </div>
                    </div>
                    <div className="reviews-box">
                        <div className="star">
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"> </i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div className="customer-text">
                            <p>“I’ve never had a smoother shopping experience. The customer service is top-notch, and the products are always high quality. Very satisfied!”</p>
                            <h5>-Priya M</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="ft-text">&copy; 2024 <i class="fa-sharp fa-regular fa-copyright"></i> All rights reserved | made<i class="fa-sharp fa-solid fa-heart" id="heart"></i> by Clg Team</div>
        </footer>
    </div>




   
    </>
  )
}

export default Home1
