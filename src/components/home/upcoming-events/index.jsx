"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import events from "@/helpers/data/events.json";
import EventCard from "@/components/events/event-card";
import { Navigation } from "swiper/modules";
import "./style.scss";
const UpcomingEvents = () => {
  const upcomingEvents = events.filter(
    (item) => new Date() < new Date(item.date)
  );
  return (
    <div className="upcoming-events">
      <div className="container">
        <h2>
          <span>
            <FaChevronLeft />
          </span>
          <span>Upcoming Events</span>
          <span>
            <FaChevronRight />
          </span>
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}>
          {upcomingEvents.map((item) => (
            <SwiperSlide>
              <EventCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEvents;
