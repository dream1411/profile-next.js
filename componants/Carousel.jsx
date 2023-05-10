import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    const { banner } = this.props;
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
          {banner.map((item, index) => (
            <div key={index} className={index==0?"carousel-item active":"carousel-item"}>
              <img
                src={item}  
                className="d-block w-100"
                alt=""
              />
              <div className="carousel-caption d-flex flex-column justify-content-end">
                          <h1>Humanity</h1>

                          <p>Please tell your friends about our website</p>
                        </div>
            </div>
            
          ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
