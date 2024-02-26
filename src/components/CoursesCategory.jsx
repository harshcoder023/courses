import React from "react";
import { Link } from "react-router-dom";
const CoursesCategory = () => {
  return (
    <div className="flex flex-col">
      <Link to="/courses/category/engineering">Engineering Courses</Link>
      <Link to="/courses/category/management">Management Courses</Link>
    </div>
  );
};

export default CoursesCategory;
