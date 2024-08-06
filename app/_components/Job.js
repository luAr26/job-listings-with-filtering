import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function Job({ job, setFilters }) {
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

  const handleClick = (e) => {
    const text = e.target.textContent;
    setFilters((prevFilters) => {
      if (prevFilters.includes(text)) return prevFilters;
      return [...prevFilters, text];
    });
  };

  return (
    <div
      className={twMerge(
        "relative flex-row rounded-[5px] bg-white p-5 shadow-main desktop:flex desktop:items-center desktop:gap-[1.5rem]",
        featured && "border-l-[5px] border-primary",
      )}
    >
      <div className="absolute -top-[24px] h-[48px] w-[48px] desktop:relative desktop:left-0 desktop:top-0 desktop:h-[88px] desktop:w-[88px]">
        <Image src={logo} fill alt={`${company} logo`} priority />
      </div>
      <div className="desktop:mr-auto">
        <div className="mt-4 flex flex-row items-center gap-8">
          <h2 className="text-[0.8125rem] text-primary desktop:text-[1.125rem]">
            {company}
          </h2>
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
          <h3 className="text-[0.9375rem] leading-[1.6] desktop:text-[1.375rem] desktop:leading-[1.09090]">
            <Link href="#" className="hover:text-primary">
              {position}
            </Link>
          </h3>
        </div>
        <div className="[flex-row mt-2 flex items-center gap-2 pb-4 font-medium -tracking-[0.12px] text-secondary desktop:text-[1.125rem] desktop:-tracking-[0.14px]">
          <span className="job-metadata">{postedAt}</span>
          <span className="job-metadata">{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <ul className="flex flex-row flex-wrap items-center gap-4 border-t-[1px] border-light pt-4 desktop:border-t-0">
        <li
          className="inline-flex cursor-pointer rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary hover:bg-primary hover:text-white"
          onClick={handleClick}
        >
          {role}
        </li>
        <li
          className="inline-flex cursor-pointer rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary hover:bg-primary hover:text-white"
          onClick={handleClick}
        >
          {level}
        </li>
        {languages.map((language) => (
          <li
            key={language}
            className="inline-flex cursor-pointer rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary hover:bg-primary hover:text-white"
            onClick={handleClick}
          >
            {language}
          </li>
        ))}
        {tools.map((tool) => (
          <li
            key={tool}
            className="inline-flex cursor-pointer rounded-[4px] bg-lighter px-2 pb-[0.1875em] pt-[0.3125em] text-[1rem] leading-[1.5] text-primary hover:bg-primary hover:text-white"
            onClick={handleClick}
          >
            {tool}
          </li>
        ))}
      </ul>
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
