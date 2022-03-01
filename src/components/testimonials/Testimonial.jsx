import React from "react";
import "./Testimonial.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import avatar1 from "../../assets/avatar1.jfif";
import avatar2 from "../../assets/avatar2.jfif";
import avatar3 from "../../assets/avatar3.jfif";
import avatar4 from "../../assets/avatar4.jfif";

const data = [
  {
    avatar: avatar1,
    name: "Qwer Tyuil",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utsimilique aliquam obcaecati explicabo, veritatis ullam voluptates,ducimus neque architecto fuga doloremque dolores officia sequi assumenda facere quia. Reiciendis, laudantium itaque?",
  },
  {
    avatar: avatar2,
    name: "Qwer Tyuil",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utsimilique aliquam obcaecati explicabo, veritatis ullam voluptates,ducimus neque architecto fuga doloremque dolores officia sequi assumenda facere quia. Reiciendis, laudantium itaque?",
  },
  {
    avatar: avatar3,
    name: "Qwer Tyuil",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utsimilique aliquam obcaecati explicabo, veritatis ullam voluptates,ducimus neque architecto fuga doloremque dolores officia sequi assumenda facere quia. Reiciendis, laudantium itaque?",
  },
  {
    avatar: avatar4,
    name: "Qwer Tyuil",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utsimilique aliquam obcaecati explicabo, veritatis ullam voluptates,ducimus neque architecto fuga doloremque dolores officia sequi assumenda facere quia. Reiciendis, laudantium itaque?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
