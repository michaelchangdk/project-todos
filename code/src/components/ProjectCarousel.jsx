import React from "react";
import { useSelector } from "react-redux";
import { projects } from "reducers/projects";

const ProjectCarousel = ({ projects }) => {
  console.log(projects);
  return (
    <>
      <h3>This is the project carousel</h3>
      {projects.map((item) => (
        <React.Fragment key={item.id}>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProjectCarousel;