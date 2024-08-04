import Image from "next/image";

function Job({ job }) {
  const {
    company,
    logo,
    firstTime,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  return (
    <div className="relative rounded-[5px] bg-white p-5">
      <div className="absolute -top-[24px] h-[48px] w-[48px]">
        <Image src={logo} fill alt={`${company} logo`} priority />
      </div>
      <div className="flex flex-col divide-y divide-light">
        <div>
          <div className="mt-4 flex flex-row items-center gap-8">
            <h2 className="text-[0.8125rem] text-primary">{company}</h2>
            <div className="flex flex-row gap-4">
              {firstTime && (
                <span className="rounded-xl bg-primary px-2 pt-1 text-[0.875rem] uppercase leading-[1.4] text-white">
                  New!
                </span>
              )}
              {featured && (
                <span className="rounded-xl bg-tertiary px-2 pt-1 text-[0.875rem] uppercase leading-[1.4] text-white">
                  Featured
                </span>
              )}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-[0.9375rem] leading-[1.6]">{position}</h3>
          </div>
          <div className="mt-2 flex flex-row items-center gap-6 pb-4 font-medium text-secondary">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center gap-4 pt-4">
          <span className="inline-flex rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary">
            {role}
          </span>
          <span className="inline-flex rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary">
            {level}
          </span>
          {languages.map((language) => (
            <span
              key={language}
              className="inline-flex rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary"
            >
              {language}
            </span>
          ))}
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Job;

// {
//     id: 3,
//     company: "Account",
//     logo: "./images/account.svg",
//     new: true,
//     featured: false,
//     position: "Junior Frontend Developer",
//     role: "Frontend",
//     level: "Junior",
//     postedAt: "2d ago",
//     contract: "Part Time",
//     location: "USA Only",
//     languages: ["JavaScript"],
//     tools: ["React", "Sass"],
//   }
