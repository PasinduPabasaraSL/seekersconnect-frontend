import React from "react";
import { JobDetailCard } from "../Card/JobCard";

const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "New York, NY",
        time: "5 minute ago",
        jobType: "Full-time"
    },
    {
        title: "Backend Developer",
        company: "Tech Corp",
        location: "New York, NY",
        time: "3 hours ago",
        jobType: "Full-time"
    },
    {
        title: "Fullstack Developer",
        company: "Innovate Ltd.",
        location: "San Francisco, CA",
        time: "5 hours ago",
        jobType: "Full-time"
    },
    {
        title: "UX/UI Designer",
        company: "Creative Software",
        location: "Kollupitiya, Sri Lanka",
        time: "6 hours ago",
        jobType: "Part-time"
    },
    {
        title: "Data Scientist",
        company: "DataTech Solutions",
        location: "Toronto, Canada",
        time: "1 hour ago",
        jobType: "Full-time"
    },
    {
        title: "DevOps Engineer",
        company: "Cloud Innovations",
        location: "London, UK",
        time: "2 days ago",
        jobType: "Full-time"
    },
    {
        title: "Mobile App Developer",
        company: "TechMinds",
        location: "Berlin, Germany",
        time: "1 day ago",
        jobType: "Contract"
    },
    {
        title: "Software Engineer",
        company: "XYZ Tech",
        location: "Los Angeles, CA",
        time: "3 days ago",
        jobType: "Full-time"
    },
    {
        title: "Marketing Manager",
        company: "Brandify",
        location: "Sydney, Australia",
        time: "2 hours ago",
        jobType: "Full-time"
    }
]; // api call

const JobList = () => {
    return (
        <div className="h-[1000px] overflow-y-auto p-4 rounded-lg shadow-md bg-neutral-100">
            {jobs.map((job, index) => (
                <JobDetailCard
                    key={index}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    type={job.jobType}
                    time={job.time}
                />
            ))}
        </div>
    );
};

export default JobList;