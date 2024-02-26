import React from "react";
import { Link, useParams } from "react-router-dom";

const Courses = ({ courses }) => {
  const { courseCategory } = useParams();
  const filteredCourses = courses.filter(
    (course) => course.category === courseCategory
  );

  return (
    <div className="px-4 py-4 lg:max-w-screen-lg lg:mx-auto lg:px-0 lg:py-8">
      <h1 className="text-center mb-6 text-2xl capitalize font-semibold">
        {courseCategory} Courses
      </h1>
      <div className="">
        {filteredCourses.map((course, index) => (
          <Link
            to={`/courses/${course.id}`}
            key={index}
            className="border mb-4 inline-block px-3 py-3"
          >
            <h2>{course.name}</h2>
            <p className="text-sm pl-2 mt-2 text-gray-500">
              {course.briefDescription}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
