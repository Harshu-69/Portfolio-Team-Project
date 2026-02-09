import FeaturedProjects from "./FeaturedProjects";
import AllProjects from "./AllProjects";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<FeaturedProjects />} />
        <Route path="/projects/all" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default Projects;
