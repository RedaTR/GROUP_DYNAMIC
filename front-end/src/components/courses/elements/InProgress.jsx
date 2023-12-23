import { useEffect, useState } from "react";
import Course from "../../course/Course";
import { useSelector } from "react-redux";
const InProgress = () => {
  const [courses, setCourses] = useState([]);
  const accessToken = useSelector((state) => state.accessToken);
  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    fetch("http://localhost:5000/api/v1/elements/inProgress", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCourses(data));
    console.log(courses);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default InProgress;
