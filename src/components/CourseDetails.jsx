import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));

  return (
    <div className="lg:max-w-screen-lg lg:mx-auto">
      <div className="h-[40vh] relative">
        <img
          src={course.image}
          alt=""
          className="w-full h-full object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-2xl w-full text-center font-medium">
          {course.name}
        </h1>
      </div>

      <div className="px-4 py-4 lg:border lg:pb-12 lg:pt-6">
        <p>{course.overview}</p>
        <h2 className="text-xl font-medium mt-6 mb-2">Curriculum</h2>
        <ul className="list-disc ml-4">
          {course.curriculum.map((curriculumItem, index) => (
            <li key={index}>{curriculumItem}</li>
          ))}
        </ul>
        <h2 className="text-xl font-medium mt-7 mb-5">Faculty Profile</h2>
        <div className="flex flex-wrap  gap-x-4 gap-y-4">
          {course.facultyProfiles.map((facultyProfile, index) => (
            <div
              key={index}
              className="w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] border shadow-sm"
            >
              <img src={facultyProfile.image} alt="" />
              <div className="px-4 py-3">
                <h3 className="mb-1">{facultyProfile.name}</h3>
                <h4 className="text-[13px] text-gray-600 leading-4">
                  {facultyProfile.designation}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-medium mt-6 mb-2">
          Admission Requirements
        </h2>
        <p>{course.admissionRequirements}</p>
        <h2 className="text-xl font-medium mt-6 mb-2">Unique Features</h2>
        <ul className="list-disc ml-4">
          {course.uniqueFeatures.map((uniqueFeature, index) => (
            <li key={index}>{uniqueFeature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
