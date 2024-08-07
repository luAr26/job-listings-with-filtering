import Job from "@/app/_components/Job";
function JobList({ jobs, setFilters, filters }) {
  return (
    <div className="mt-20 flex flex-col gap-10">
      {jobs.map((job) => (
        <Job key={job.id} job={job} setFilters={setFilters} filters={filters} />
      ))}
    </div>
  );
}

export default JobList;
