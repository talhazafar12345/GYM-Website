





import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero19() {
    const testimonials = [
        {
            name: "John Doe",
            role: "Web Developer",
            text: "I had a truly great experience using this service from start to finish. The team was highly professional and paid close attention to every detail I shared. The quality of the work delivered was exceptional and exceeded my expectations. Everything was completed within the promised timeline without any issues. I would definitely recommend this service to anyone looking for results",
            img: "https://i.pravatar.cc/100?img=1",
        },
        {
            name: "Sophia Khan",
            role: "Designer",
            text: "I had a truly great experience using this service from start to finish. The team was highly professional and paid close attention to every detail I shared. The quality of the work delivered was exceptional and exceeded my expectations. Everything was completed within the promised timeline without any issues. I would definitely recommend this service to anyone looking for results",
            img: "https://i.pravatar.cc/100?img=2",
        },
        {
            name: "Marcus Lee",
            role: "Entrepreneur",
            text: "I had a truly great experience using this service from start to finish. The team was highly professional and paid close attention to every detail I shared. The quality of the work delivered was exceptional and exceeded my expectations. Everything was completed within the promised timeline without any issues. I would definitely recommend this service to anyone looking for results",
            img: "https://i.pravatar.cc/100?img=3",
        },
        {
            name: "Sarah Smith",
            role: "Marketer",
            text: "I had a truly great experience using this service from start to finish. The team was highly professional and paid close attention to every detail I shared. The quality of the work delivered was exceptional and exceeded my expectations. Everything was completed within the promised timeline without any issues. I would definitely recommend this service to anyone looking for results",
            img: "https://i.pravatar.cc/100?img=4",
        },
        {
            name: "David Brown",
            role: "CEO",
            text: "I had a truly great experience using this service from start to finish. The team was highly professional and paid close attention to every detail I shared. The quality of the work delivered was exceptional and exceeded my expectations. Everything was completed within the promised timeline without any issues. I would definitely recommend this service to anyone looking for results",
            img: "https://i.pravatar.cc/100?img=5",
        },

    ];

    return (
        <div className="testimonial-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={2}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <img src={item.img} alt="Profile" />
                            <div className="testimonial-content">
                                <h3>{item.name}</h3>
                                <p className="text">“{item.text}”</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero19;

