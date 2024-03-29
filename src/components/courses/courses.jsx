import React from "react";
import courses from "@/helpers/data/courses.json";
import CourseCard from "./course-card";

const Courses = ({ featured = false }) => {
  let courseArr = courses;
  if (featured) {
    courseArr = courseArr.filter((item) => item.featured);
  }
  return (
    <div className="container">
      <div className="row row cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {courseArr.map((item) => (
          <div className="col" key={item.id}>
            <CourseCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
