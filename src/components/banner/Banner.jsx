import './Banner.css'
import BImg  from '../../assets/banner__img.png'
import { IoIosStar } from 'react-icons/io'

const Banner = () => {
  return(
    <div className="container">
      <div className="banner__wrapper">
        <div className="banner__wrapper-text">
          <h1>Beautiful food & takeaway, delivered to your door.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <button className='banner__wrapper-btn'>Place an Order</button>
          <div className="banner__wrapper-icon">
            <IoIosStar />
            <p>Trustpilot</p>
          </div>
        </div>
        <div className="banner__wrapper-img">
          <img src={BImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner