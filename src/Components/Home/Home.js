import React, { useState, useEffect } from 'react'
import './home.css'
import content from '../../Assets/Data/cardContent'
import Card from '../Card/Card'
import cart from '../../Assets/Images/cart.png';
import options from '../../Assets/Images/options.png'
import phone from '../../Assets/Images/phone.png'


const Home = () => {
  const [flag, setFlag] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 900) {
      setFlag(false);
    }
  }, [windowWidth]);

  const openNav = () => {
    setFlag(!flag)
  }

  return (
    <div className='main'>
      <div className='first'>
        <div className='nav'>
          <div className='nav1'>Home</div>
          <div className='nav1'>Order</div>
          <div className='nav2'>Food</div>
          <div className='nav2'>Restaurant</div>
          <div className='nav2'>Testimonials</div>
          <div className='nav2'>Contact Us</div>
          <div className='nav3'>
            <div><img src={phone} alt='phone' className='phone' /></div>
            <div><img src={cart} alt='phone' className='phone' /></div>

          </div>
          <div className='nav4'>
            <img onClick={openNav} src={options} alt='opt' className='phone' />
          </div>
        </div>
        <div className='body'>
          {
            !flag ? <div className='content'>
              <div className='content-heading'>LOREM IPSUM</div>
              <div className='content-para'>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </div>
            </div> : <div className='options'>
              <div className='option'>Food</div>
              <div className='option'>Restaurant</div>
              <div className='option'>Testimonials</div>
              <div className='option'>Contact Us</div>
              <div className='option1'>
                <div><img src='https://assets.stickpng.com/images/5a452601546ddca7e1fcbc87.png' alt='phone' className='phone' /></div>
                <div><img src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' alt='phone' className='phone' /></div>
              </div>
            </div>
          }


        </div>
        <div className='foot'>
        </div>
      </div>
      <div className='second'>
        <div className='head2'>
          Order Now
        </div>
        <div className='body2'>
          {Object.values(content).map((data, index) => (
            <div key={index}>
              <Card data={data} />
            </div>
          ))}

        </div>
        <div className='foot2'>
          <button className='button'>Order</button>
        </div>
      </div>
    </div>
  )
}

export default Home
