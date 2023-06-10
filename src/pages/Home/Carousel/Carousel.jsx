import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../assets/carousel/fast9.jpg';
import img2 from '../../../assets/carousel/avatar.jpg';
import img3 from '../../../assets/carousel/1917.jpg';
import img4 from '../../../assets/carousel/greenbook.jpg';
import img5 from '../../../assets/carousel/johnwick.jpg';
import img6 from '../../../assets/carousel/tenet.jpg';
import img7 from '../../../assets/carousel/spiderman.jpg';
import SectionTitle from "../../../components/SectionTitle.jsx/SectionTitle";

const Carousel = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        className: "center",
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="mt-24">
            <div>
                <SectionTitle heading={'RECENT FILMS'} />
            </div>
            <Slider arrows={false} {...settings}>
                <div>
                    <h3><img src={img1} alt="" /></h3>
                </div>
                <div>
                    <h3><img src={img2} alt="" /></h3>
                </div>
                <div>
                    <h3><img src={img3} alt="" /></h3>
                </div>
                <div>
                    <h3><img src={img4} alt="" /></h3>
                </div>
                <div>
                    <h3><img src={img5} alt="" /></h3>
                </div>
                <div>
                    <h3><img src={img6} alt="" /></h3>
                </div>
                <div>
                    <h3><img src={img7} alt="" /></h3>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;