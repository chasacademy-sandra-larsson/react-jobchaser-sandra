import './App.css'
import { useState } from 'react'

const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "photosnap.svg",
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: []
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: []
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
];

interface Job {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];

}


function App() {

  const [filteredJobs, setFilteredJobs] = useState(jobs)

  return (
    <>
     <h1 className="text-3xl font-bold underline">JobChaser</h1>
     <Search jobs={jobs} setFilteredJobs={setFilteredJobs}/>
      <ul>
        {filteredJobs.map((job: Job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </ul>
    </>
  )
}

interface SearchProps {
  jobs: Job[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

function Search({ jobs, setFilteredJobs }: SearchProps): JSX.Element {
  const [search, setSearch] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('searching...')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    const filteredJobs = jobs.filter((job: Job) => {
      return job.position.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredJobs(filteredJobs)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Search for a job" 
          value={search} 
          onChange={handleChange}
          />
    </form>
  )
}

function JobCard({company, logo, position, role, level, postedAt, contract, location, languages, tools}: Job): JSX.Element {

  return (
    <li>
      <article className='flex'>
          <img src={`./images/${logo}`} alt={logo} />
          <p>{company}</p>
          <p>{position}</p>
          <p>{role}</p>
          <p>{level}</p>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
          <p>{languages}</p>
          <p>{tools}</p>
      </article>
    </li>
  ) 

}


export default App
