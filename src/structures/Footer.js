export default function Footer(){
    return(
        <footer className="footer">
            <div className="links">
                <a href="https://www.instagram.com/meliksetyan.narek/"> 
                    <img src={require("./images/instagram.png")} alt="instagram" />
                </a>
                <a href="https://www.github.com/narekmeliksetyan/">
                <img src={require("./images/-github.png")}   alt="github"   />
                </a>
                <a href="https://www.linkedin.com/in/narekmeliksetyan01/">
                <img src={require("./images/linkedin.png")}  alt="linkedin"/>
                </a>
            </div>
          <h4>Created By <span>Narek Meliksetyan</span> | All Rights Reserved</h4>
        </footer>
    )
}