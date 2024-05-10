import Laptop1 from "./img/dell5520.jpg";
import "./slider.css";


function Slider(){
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src= "https://th.bing.com/th/id/R.b74962cd1e2e4998fd82114b6ea0ebd2?rik=el1E7LpIvfNtJw&pid=ImgRaw&r=0" className="d-block w-100 h-300" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://cdn.mos.cms.futurecdn.net/8HgZttLtFd75a56TgB8HzM.jpg" className="d-block w-100 h-300" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={Laptop1} className="d-block w-100 h-300" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </>    
        )
}
export default Slider;