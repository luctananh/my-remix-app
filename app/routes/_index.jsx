/* eslint-disable jsx-a11y/anchor-is-valid */
import '../css/layout.css';
import '../css/test.css';

export default function Index() {
  return (
    <>
      {/* TOOBAR */}
      <div className='toolbar'>
        <p className='toolbar-text' id='text1'>Discover the Power of Ryviu for your Shopify Store! </p>
        <div className='toolbar-box'>
          <img src="Envelope.svg" alt="icon-mail" />
          <p className='toolbar-text' id='text1'>Info@ryviu.com</p>
        </div>
      </div>
      {/* NAVBAR */}
      <div className='nav'>
        <div className='nav-main'>
        <p className='nav-logo' id="text3">LUMINA</p>
        <ul className='content-ul'>
          <li >
            <a className='nav-text' id="text1" href="">Home</a>
          </li>
          <li >
            <a className='nav-text' id="text1" href="">Shop</a>
          </li>
          <li >
            <a className='nav-text' id="text1" href="">Masonry featured reviews</a>
          </li>
          <li >
            <a className='nav-text' id="text1" href="">Carousel featured reviews</a>
          </li>
        </ul>
        <div className='nav-icon'>
          <button>
            <img src="Search.svg" alt="icon-search" />
          </button>
          <button className='nav-cart'>
            <p className ="nav-Shopping-text">0</p>
            <img src="Shopping Cart.svg" alt="icon-shopping" />
          </button>
        </div>
        </div>
      </div>
      {/* SLIDER */}
      <div className='slider'>
        <div className='slider-main'>
          <p className='slider-text' id='text4'>Illuminate your world with Lumina</p>
          <a href="" className='slider-click' id="text1">Shop now</a>
        </div>
        <img src="Rectangle1.png" alt="Rectangle1"/>
      </div>
      {/* CONTENT */}
      <div className='content'>
        <p className='content-text-header' id='text1'>Shop by categories</p>
        <ul className='content-ul'>
          <li>
            <div className='content-box' id='text1'>
              <img src="Rectangle 3.png" alt="sample" />
              <p>Ceiling Lights</p>
            </div>
          </li>
          <li>
            <div className='content-box' id='text1'>
              <img src="Rectangle 5.png" alt="sample" />
              <p>Ceiling Lights</p>
            </div>
          </li>
          <li>
            <div className='content-box' id='text1'>
              <img src="Rectangle 44.png" alt="sample" />
              <p>Table Lamps</p>
            </div>
          </li>
          <li>
            <div className='content-box' id='text1'>
              <img src="Rectangle 45.png" alt="sample" />
              <p>Floor Lamps</p>
            </div>
          </li>
          <li>
            <div className='content-box' id='text1'>
              <img src="Rectangle 8.png" alt="sample" />
              <p>Outdoor Lights</p>
            </div>
          </li>
        </ul>
      </div>

      {/* CONTENT-LISH */}
      <div className='content-lish'>
        <p className='content-lish-text' id='text1'>New Arrivals</p>
        <p className='content-lish-text2' id='text1'>Brighten your home with the latest styles!</p>
        <div className='content-lish-main'>
          <ul className='content-lish-ul'>
            <li> 
              <img src="Rectangle 46.png" alt="img" className='png'/>
              <div>
                <p className='content-lish-from' id='text1' >Wabi Sabi modern pendant light</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar2.svg" alt="icon-star" /></li>
                  <p id='text1'>(8)</p>
                </ul>
                <p className='content-lish-from' id='text1'>From $97.79</p>
              </div>
            </li>
            <li>
              <img src="37962f67-511c-44d5-9102-4d808fb3091f 1.png" alt="img"  className='png'/>
              <div >
                <p className='content-lish-from' id='text1'>Modern bedroom table lamp</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                </ul>
                <p className='content-lish-from' id='text1'>From $57.79</p>
              </div>
            </li>
            <li>
              <img src="12-Light 1.png" alt="img"  className='png' />
              <div>
                <p className='content-lish-from' id='text1'>Brass modern 12-Light opal chandelier</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar2.svg" alt="icon-star" /></li>
                  <p className='content-lish-from' id='text1'>(6)</p>
                </ul>
                <p className='content-lish-from' id='text1'>From $57.79</p>
              </div>
            </li>
            <li>
              <img src="f0163b9a-f02b-4db6-a7d9-c8b8f9dd85db 1.png" alt="img"  className='png' id='png-pd'/>
              <div>
                <p className='content-lish-from' id='text1'>Adjustable nordic LED floor lamp</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                  <li><img src="IconStar3.svg" alt="icon-star" /></li>
                </ul>
                <p className='content-lish-from' id='text1'>From $57.79</p>
              </div>
            </li>
          </ul>
          <ul className='content-lish-ul'>
            <li>
              <img src="Outdoor-waterproof-wall-lamps 1.png" alt="img"  className='png'/>
              <div>
                <p className='content-lish-from' id='text1'>Outdoor waterproof wall lamps</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar2.svg" alt="icon-star" /></li>
                  <p className='content-lish-from' id='text1'>(24)</p>
                </ul>
                <p className='content-lish-from' id='text1'>From $99.79</p>
              </div>
            </li>
            <li>
              <div>
                <img src="Nordic-mordel 1.png" alt="img"  className='png'/>
                <p className='content-lish-from' id='text1'>12-Light black globe chandelier</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <p className='content-lish-from' id='text1'>(2)</p>
                </ul>
                <p className='content-lish-from' id='text1'>From $149.00</p>
              </div>
            </li>
            <li>
              <div>
                <img src="Mobo-Ceramic-Wall-Lamps 1.png" alt="img"  className='png'/>
                <p className='content-lish-from' id='text1'>Mobo ceramic wall lamps</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <p className='content-lish-from' id='text1'>(1)</p>
                </ul>
                <p className='content-lish-from' id='text1'>From $97.79</p>
              </div>
            </li>
            <li>
              <div>
                <img src="Martha-Table-Lamp 1.png" alt="img"  className='png'/>
                <p className='content-lish-from' id='text1'>Martha table lamp</p>
                <ul className='content-star-ul'>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <li><img src="IconStar.svg" alt="icon-star" /></li>
                  <p className='content-lish-from' id='text1'>(4)</p>
                </ul>
                <p className='content-lish-from' id='text1'>From $97.79</p>
              </div> 
            </li>
          </ul>
        </div>
      </div>
      {/* BANNER */}
      <div className='banner'>
        <img src="Frame 253.png" alt="img"/>
        <div className='banner-main'>
          <p className='banner-main-text' id='text4'>Brighten Up Your Home!</p>
          <p className='banner-main-text2' id='text1'>                
            Exclusive <a className='summerSale' href=""> Summer Sale</a> on lighting products
          </p>
          <a className='banner-main-text3' id='text1' href="">Discover more</a>
        </div>  
      </div>
      {/* FEATURE */}
      <div className='feature'>
        <ul className='feature-ul'>
          <li className='feature-li'>
            <img src="In Transit.svg" alt="icon-InTransit" />
            <p className='frame55' id='text1'>Free shipping</p>
            <p id='text1'>Pay with multiple credit card</p>
          </li>
          <li className='feature-li' >
            <img src="Card Payment.svg" alt="img-CardPayment" />
            <p className='frame55' id='text1'>Flexible payment</p>
            <p id='text1'>Pay with multiple credit card</p>
          </li>
          <li className='feature-li'>
            <img src="Transaction.svg" alt="img-Transaction" />
            <p className='frame55' id='text1'> 14 Day returns</p>
            <p id='text1'>Within 30 days for exchange</p>  
          </li>
        </ul>
    </div>
    {/* FOOTER */}
    <div className='footer'>
      {/* <div className='footer-main'> */}
        <div className='footer-header'>
          {/* <div className='footer-header-text'> */}
            <p className='footer-header-text1' id='text1'>Sign up</p>
            <p className='footer-header-text2' id='text1'>Be the first to know about new collections and exclusive offers.</p>
          {/* </div> */}
          <div className='footer-header-sreach'>
            <input type="sreach" placeholder="Enter your email" className='footer-sreach'/>
            <a href="" className='footer-header-join' id='text1'>Join</a>
          </div>
        </div>
        <div className='footer-body'>
          <ul className='footer-body-ul'>
            <li className='footer-body-li'>
              <ul className='footer-ul'>
                <li className='footer-li'>
                  <p className='footer-li-text' id='text2'>Lumina</p>
                  <p className='footer-li-text1' id='text1'>Adress: SN 185 Diem Dien, Thai Thuy, Thai Binh, VN </p>
                  <p className='footer-li-text1' id='text1'>Email us: info@ryviu.com</p> 
                  <p className='footer-li-text1' id='text1'>Call us: (+84)964300246</p>
                </li>
                <li className='footer-icon'>
                  <img src="Instagram.svg" alt="icon-Instagram" />
                  <img src="Twitter Circled.svg" alt="icon-TwitterCircled" />
                  <img src="Facebook.svg" alt="icon-Facebook" />
                  <img src="Pinterest.svg" alt="icon-Pinterest" />
                </li>
              </ul>
            </li>
            <li className='footer-body-li'>
              <ul className='footer-body-lish'>
                <li className='footer-li-about'>
                  <a href=""  id='text1'>About us</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Blog</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Pricing</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Document</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Contact us</a>
                </li>
              </ul>
            </li>
            <li className='footer-body-li'>
              <ul className='footer-body-lish'>
                <li className='footer-li-about'>
                  <a href="" id='text1'>Help</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Privacy policy</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Shipping</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>Terms & Conditions</a>
                </li>
                <li>
                  <a href="" className='footer-li-text1' id='text1'>FAQ&#39;s</a>
                </li>
              </ul>
            </li>
            <li className='footer-body-li'>
              <p className='text-frane94'>Reviews Badge</p>
              <div className='group28'>
                <div className='group'>
                  <img src="Vector3.svg" alt="" className='Vector4'/>
                  <img src="Vector4.svg" alt="" className='Vector3'/>
                  <p className ='text-47group'>4.7</p>
                  <p className='text-review'>1383 reviews</p>
                </div>
                <p className='text-group28'>Verified Reviews</p>
                <img src="Vector.svg" alt="" className='Vector' />
                <img src="Vector1.svg" alt="" className='Vector1'/>
                <img src="Vector2.svg" alt="" className='Vector2'/>
              </div>
            </li>
          </ul>
        </div>
        <div className='footer-footer'>
          <p className='footer-li-text1' id='text1'>Copyright ©2022 Ryviu. All rights reserved.</p>
          <ul className='footer-footer-icon'>
            <li>
              <img src="MasterCard.svg" alt="icon-MasterCard" />
            </li>
            <li>
              <img src="Visa.svg" alt="icon-Visa" />
            </li>
            <li>
                <img src="Amazon.svg" alt="icon-Amazon" className='footer-amazon'/>
            </li>
            <li>
                <img src="PayPal.svg" alt="icon-PayPal" className='footer-paypal'/>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </div>
    </>
  );
}

