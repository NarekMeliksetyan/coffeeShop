import aboutJPG from "../images/about-img.jpeg"
export default function AboutCart1(props){
    const changeAbout = props.changeAbout
    return (
        <>
        <h1 className="headding" >ABOUT US</h1>
      <div className="frame">
        <div className="frameLeft">
            <img src={aboutJPG} alt=""/>
          </div>
          <div className="frameRight">
            <h3>What Makes Our Coffee Special?</h3>
          <p>We offer the widest and best selection
             of coffee in the region, which you can 
             get simply by ordering from our site
          </p>
          <button className="btn" onClick={changeAbout} >Learn More</button>
        </div>
      </div>
      </>
    )
}