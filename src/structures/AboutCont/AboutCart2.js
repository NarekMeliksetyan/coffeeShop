export default function AboutCart2(props){
    const changeAbout = props.changeAbout
    return (
        <div className="Back">
         <h1 className="headding" >ABOUT US</h1>
      <div className="frameS">
        <div className="frameLeft">
            
          </div>
          <div className="frameRight">
            <h3>What Makes Our Coffee Special?</h3>
          <p>We offer the widest and best selection
             of coffee in the region, which you can 
             get simply by ordering from our site
          </p>
          <button className="btn" onClick={changeAbout} >Back</button>
        </div>
      </div>
        </div>
    )
}
