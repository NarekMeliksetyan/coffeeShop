import aboutJPG from "./about-img.jpeg"
export default function About(){
    return (
        <section className="About">
            <h1 className="headding" >ABOUT US</h1>
          <div className="frame">
            <div className="frameLeft">
              <img src={aboutJPG} alt=""/>
            </div>
            <div className="frameRight">
               <h3>What Makes Our Coffee Special?</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur
                    Adipisicing Elit. Voluptatibus Qui Ea Ullam,
                    Enim Tempora Ipsum Fuga Alias Quae Ratione A 
                    Officiis Id Temporibus Autem? Quod Nemo
                    Facilis Cupiditate. Ex, Vel?
                </p>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, 
                    Adipisicing Elit. Odit Amet Enim Quod 
                    Veritatis, Nihil Voluptas Culpa! Neque 
                    Consectetur Obcaecati Sapiente?
                </p>
                <button className="btn">Learn More</button>
            </div>
          </div>
        </section>
    )
}