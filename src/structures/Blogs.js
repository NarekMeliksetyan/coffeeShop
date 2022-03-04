export default function Blogs(){
    return (
        <section className="Blogs">
                <h1>Blogs</h1>
            <div className="blogs">
             <div className="blogsBox">
                <div className="image">
                    <img src={require("./images/blog-1.jpeg")}/>
                </div>
                <div className="content">
                    <h4>Tasty And Refreshing Coffee</h4>
                    <span>By Admin / 21st May, 2021</span>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
                    <button className="btn">Read More </button>
                </div>
             </div>
             <div className="blogsBox">
                <div className="image">
                    <img src={require("./images/blog-2.jpeg")}/>
                </div>
                <div className="content">
                    <h4>Tasty And Refreshing Coffee</h4>
                    <span>By Admin / 21st May, 2021</span>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
                    <button className="btn">Read More </button>
                </div>
             </div>
             <div className="blogsBox">
                <div className="image">
                    <img src={require("./images/blog-3.jpeg")}/>
                </div>
                <div className="content">
                    <h4>Tasty And Refreshing Coffee</h4>
                    <span>By Admin / 21st May, 2021</span>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
                    <button className="btn">Read More </button>
                </div>
             </div>
            </div>  
        </section>
    )
}