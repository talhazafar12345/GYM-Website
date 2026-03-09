import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cardsData = [
  { id: 1, name: "Cycling", image: "https://media.gettyimages.com/id/1294578183/photo/class-with-disco-ambient-lights-disco-ambient-light.jpg?s=612x612&w=0&k=20&c=pPP2w5bPIbQHb26_voz0qqUpBGWMD7Zok3aAG7xSRpU=" },
  { id: 2, name: "Yoga", image: "https://media.gettyimages.com/id/1483989816/photo/adult-arab-male-with-a-ponytail-meditating-in-a-yoga-class.jpg?s=612x612&w=0&k=20&c=FTkO8dit_ZWB_9mUk2bmkELm2mpC-NqH82nCmK1Wx6M=" },
  { id: 3, name: "Running", image: "https://images.unsplash.com/photo-1602174865963-9159ed37e8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D" },
  { id: 4, name: "Meditation", image: "https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2016/12/class_02-410x200.jpg" },
  { id: 5, name: "Rowing Machine", image: "https://media.gettyimages.com/id/923376062/photo/two-women-rowing-with-power-at-gym.jpg?s=612x612&w=0&k=20&c=HoEReBRD1izSdw4JnA9uYMb3jeGKPZnVm6Zfz9Gn114=" },
  { id: 6, name: "Jump Rope", image: "https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?_gl=1*27jy48*_ga*NTU3NDQxNjUwLjE3NzI4NzI5NjY.*_ga_8JE65Q40S6*czE3NzMwODQ1ODIkbzMkZzEkdDE3NzMwODQ1OTMkajQ5JGwwJGgw" },
];

function Hero6() {


  return (
    <section className="hero15">

      <div className="card-slider-container">
        <Swiper
          className="card-swiper"
          modules={[Navigation]}
          navigation
          spaceBetween={18}
          slidesPerView={3}
          grabCursor={true}
          loop={true}                   // Infinite loop
          loopFillGroupWithBlank={true} // Ensures full slides per view
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card-item">
                <img src={card.image} alt={card.name} className="card-image" />
                <h2>{card.name}</h2>
                <div className="btns">
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