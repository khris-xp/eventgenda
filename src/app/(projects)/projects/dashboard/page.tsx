"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { ProjectConstant, ProjectType } from "@/constants/project.constant";
import { TableCell, TableRow } from "@mui/material";
import Link from "next/link";

export default function ProjectDashboardPage() {
  const projectHeader = ["Name", "Description", "Link", "Demo"];

  const renderProjectRow = (project: ProjectType) => (
    <TableRow key={project.name}>
      <TableCell>{project.name}</TableCell>
      <TableCell>{project.description}</TableCell>
      <TableCell>
        <Link
          href={project.link}
          className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
        >
          {project.link}
        </Link>
      </TableCell>
      <TableCell>
        <Link
          href={project.demo}
          className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
        >
          {project.demo}
        </Link>
      </TableCell>
    </TableRow>
  );

  return (
    <div className="flex justify-center container mx-auto py-5">
      <PaginatedTable
        headers={projectHeader}
        rows={ProjectConstant}
        renderRow={renderProjectRow}
      />
    </div>
  );
}
