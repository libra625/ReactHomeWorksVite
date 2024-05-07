import React from "react";
import classNames from "classnames";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    nextSlide = () => {
        this.setState((currentState) => ({
            activeIndex:
        currentState.activeIndex === this.props.images.length - 1
            ? 0
            : currentState.activeIndex + 1,
        }));
    };

    previousSlide = () => {
        this.setState((currentState) => ({
            activeIndex:
        currentState.activeIndex === 0
            ? this.props.images.length - 1
            : currentState.activeIndex - 1,
        }));
    };

    isActive = (activeIndex, index) => {
        const activeClass = classNames(
            `carousel-item`,
            index === activeIndex ? "active" : "",
        );
        return activeClass;
    };

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;
        return (
            <div
                id="carousel"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={this.isActive(activeIndex, index)}>
                            <img
                                alt={`Slide ${index + 1}`}
                                src={image}
                                className="d-block w-25"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={this.previousSlide}
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden"></span>
                </button>

                <button
                    onClick={this.nextSlide}
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        );
    }
}

export default Carousel;
