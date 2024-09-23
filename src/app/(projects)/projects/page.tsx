"use client";

import ProjectCard from "@/components/Card/ProjectCard";
import { ProjectConstant } from "@/constants/project.constant";
import { Fragment } from "react";

export default function ProjectsPage() {
  return (
    <Fragment>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pb-10 my-32">
        {ProjectConstant.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </Fragment>
  );
}
