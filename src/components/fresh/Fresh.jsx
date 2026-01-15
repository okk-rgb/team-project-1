import "./Fresh.css"
import Fresh_img from"../fresh/img/IMAGE.png"
// Ойша
const Fresh = () => {
  return(
    <div className="container">
      <div className="Fresh">
        <div className="fresh_texts">
          <h1 className="fresh_h">
            The home of fresh products
          </h1>
          <p className="fresh_paragarf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            <button className="fresh_btn">Learn about us</button>
        </div>
        <div className="fresh_img">
          <img src= {Fresh_img} alt="fresh_img" />
        </div>
      </div>
    </div>
  )
}

export default Fresh