/** @format */
"use client";

import { useEffect, useState } from "react";
import { jobs } from "@/data";
import Attribution from "@/app/_components/Attribution";
import Filters from "@/app/_components/Filters";
import JobList from "@/app/_components/JobList";

export default function Home() {
  const [filters, setFilters] = useState(() => {
    const storedFilters = JSON.parse(localStorage.getItem("filters"));
    return storedFilters || [];
  });
  const altJobs = jobs.map((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return { ...job, tags };
  });
  const filteredJobs = altJobs.filter((job) => {
    if (filters.length === 0) return true;
    return filters.every((filter) => job.tags.includes(filter));
  });

  return (
    <>
      <Attribution />
      <Filters filters={filters} setFilters={setFilters} />
      <JobList setFilters={setFilters} jobs={filteredJobs} filters={filters} />
    </>
  );
}
