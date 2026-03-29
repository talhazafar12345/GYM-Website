import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cardsData = [
  { id: 1, name: "Cycling", image: "https://plus.unsplash.com/premium_photo-1664304732747-661c2cd16774?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhlcmNpc2UlMjBiaWtlfGVufDB8fDB8fHww", teacher:" Chris" },
  { id: 2, name: "Yoga", image: "https://media.gettyimages.com/id/1483989816/photo/adult-arab-male-with-a-ponytail-meditating-in-a-yoga-class.jpg?s=612x612&w=0&k=20&c=FTkO8dit_ZWB_9mUk2bmkELm2mpC-NqH82nCmK1Wx6M=", teacher:"John" },
  { id: 3, name: "Running", image: "https://images.unsplash.com/photo-1602174865963-9159ed37e8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D", teacher:"Anjalena" },
  { id: 4, name: "Meditation", image: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/class_02-410x200.jpg", teacher:"Chris Students" },
  { id: 5, name: "Rowing Machine", image: "https://media.gettyimages.com/id/923376062/photo/two-women-rowing-with-power-at-gym.jpg?s=612x612&w=0&k=20&c=HoEReBRD1izSdw4JnA9uYMb3jeGKPZnVm6Zfz9Gn114=", teacher:"Alex, Valentina" },
  { id: 6, name: "Jump Rope", image: "https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?_gl=1*27jy48*_ga*NTU3NDQxNjUwLjE3NzI4NzI5NjY.*_ga_8JE65Q40S6*czE3NzMwODQ1ODIkbzMkZzEkdDE3NzMwODQ1OTMkajQ5JGwwJGgw", teacher:"Chris Trainer" },
];

function Hero6() {
  return (
    <section className="hero15">
      <div className="card-slider-container">
       <Swiper
  className="card-swiper"
  modules={[Navigation]}
  navigation
  slidesPerView={3}
  grabCursor={true}
  loop={true}
  breakpoints={{
    0: { slidesPerView: 1 },
    500: { slidesPerView: 1 },
     540: { slidesPerView: 1 },
    768: { slidesPerView: 2,spaceBetween:-22 },
    820: { slidesPerView: 2,spaceBetween:-22 },
    1024: { slidesPerView: 3, spaceBetween:17 },
  }}
>
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card-item">
                {/* Image Container */}
                <div className="card-image-container">
                  <img src={card.image} alt={card.name} className="card-image" />

                  {/* Center button overlay */}
                  <div className="card-button-overlay">
                    <button className="details-btn">Details</button>
                  </div>
                </div>
                {/* Info below image */}
                <div className="card-info">
                  <h2>{card.name}</h2>
                   <p><i class="fa-solid fa-person pers"></i> {card.teacher}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero6;