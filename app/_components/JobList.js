"use client";
import { jobs } from "@/data";
import Job from "@/app/_components/Job";
function JobList() {
  return (
    <div className="mt-10 flex flex-col gap-10">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
