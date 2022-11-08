import React from 'react'

const projects =[
    {
        title: 'Caliber Mobile', 
        url: "https://github.com/michaelwoo921/caliber-backend-2022",
        url2:"https://github.com/michaelwoo921/caliber-mobile-2022",
        content: `Caliber is a performance management suite used to collect and analyze evaluations of 
            Revature trainees with the goal of increasing transparency, 
            fostering informed decision making, and creating actionable information. Caliber takes 
            input for any quality checkpoint from the beginning to the end of the associate lifecycle 
            (screening, training, QC, panel, etc). The Caliber suite also provides a variety of reports on 
            different levels of granularity using visual dashboards and tabular data. 
            Users can generate individual and batch PDF reports to distribute to clients, trainees, and other stakeholders.`,
        responsibility: [
            `Used Agile Development tools including Trello, Burndown chart, and SonarCloud to collaborate with other
            team members and to ensure that progress was being made in user stories with daily stand-up meetings
            `,
            `Implemented a user story in which the system calculates the overall technical status of the batch in a given
            week and the Quality Analyst has an option to override the overall technical status.
            `,
            `Created histogram for the technical status of the trainees for the batch.
            `,
            `Implemented with my team in creating lambda functions for Quality Analysts to read and write QC notes
            and technical status for each trainee in a batch.
            `,
            `Collaborated with my team in testing lambda functions and placing lambda functions in a Docker
            Container to be deployed using AWS CloudFormation templates.
            `,
            `Collaborated with other teams for the integration of our project.
            `
        ],
        technology: "React Native, React, SQL, JavaScript, API Gateway, AWS Lambda, DynamoDB, TypeScript",
        
 },
 {
    title: 'Music Mania',
    url: "https://github.com/michaelwoo921/2022-music-mania",
    content: `Music Mania is a full-stack web and mobile application that allows users to play, favorite, 
    and buy music. Within each song detail, users
    can follow a link to the song's lyrics. Users can search through the provided music based on 
    song title and artist. Users can also express their
    creativity by playing the piano on the mobile version of the application. Employees and 
    administrators are able to add new employees, but
    only administrators can remove any user from the system. Employees and administrators are also able 
    to remove songs that are listed in the application
    `,
    responsibility: [
        `Collaborated with team members in Developing React Native Project using GIT Version Control System
        `,
        `Developed and Deployed Express Server for user authentication and for saving users' favorites
        and playlists
        `,
        `Used AWS Lambda, API gateway, and AWS RDS services for back-end support to access songs and
        playlist tables stored in AWS RDS PostgreSQL.
        `,
        `Used React Native, Redux, and StyleSheets for front-end UI development.
        `,
        `Used Agile Development tools including Trello, Burndown chart, and SonarCloud to collaborate with other
        team members and to ensure that progress was being made in user stories with daily stand-up meetings.
        `,
        `Used Jest and Enzyme to test functions in Express Server and React Components.
        `,
        `Overcame the communication challenge between the front end and back end related to cors issue and git
        merge conflict issues.
        `
    ],
    technology: "React Native, React, API Gateway, AWS Lambda, JavaScript, AWS EC2, NodeJS, PostgreSQL, DynamoDB"
 },
 {
    title: 'TRMS-React',
    url: "https://github.com/michaelwoo921/2021-trms-7",
    content: `TRMS, or Tuition Reimbursement Management System is a full-stack web application that allows employees to submit requests for
    reimbursements for courses, events, and certifications. These requests can then be approved or rejected by the employee's direct supervisor,
    department head, and a benefits coordinator while the employee is able to track the status of their requests.
    `,
    responsibility: [
        `Created a Frond End Application utilizing HTML, CSS, TypeScript, React, and Redux
        `,
        `Creates a Server Side application utilizing TypeScript, Nodejs, Express.js, and DynamoDB
        `,
        `Created NoSQL DynamoDB tables to store Employees' Information and Tuition Reimbursement Application
        Data
        `,
        `Created User Stories to implement Business Rules.
        `,
        `Used user stories as a guide in developing the project.
        `,
        `Implemented Test Driven Development.
        `,
        `Deployed the project using Amazon S3 bucket.
        `
    ],
    technology:"JavaScript, Express.js, DynamoDB, React, HTML, CSS, Redux, TypeScript"
 }
]
const Project = () => {
  return (
    <div className="projects">
        <div className="projects__header">Projects</div>
        {projects.map((project, index) => {
            return (
                <div className="project">
                    <div className="project__title">{project.title} 
                    <span className="project__logo"> 
                    <a href={project.url} rel="noreferrer" target="_blank"><img src="/github-logo.png" alt={project.title}/></a>
                    </span>
                    {project.url2 && (
                        <span className="project__logo-2"> 
                        <a href={project.url2} rel="noreferrer" target="_blank"><img src="/github-logo.png" alt={project.title}/></a>
                        </span>
                    )}
                    </div>
                    <hr className="project__line" />
                    <div className="project__content">{project.content}</div>
                    <div className="project__resp-list">
                        <div className="project__resp-title">Roles / Responsibilities</div>
                        <div className="project__resp-conntents">
                            {project.responsibility.map((item,index)=> {
                            return (
                                <div className="project__resp-content"><span></span> {item}</div>
                            )
                        })}</div>
                    </div>
                    <div className="project__tech-title"> Environment / Technologies</div>
                    <div className="project__tech-item"><span></span> {project.technology}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Project