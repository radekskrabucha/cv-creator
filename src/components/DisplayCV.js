import React from 'react'
import uuid from 'react-uuid'
import Moment from 'react-moment';
import ProfilePic from '../profile.jpeg.jpg'

export default function displayCV({data}) {
   const {
      firstName, 
      lastName, 
      jobTitle, 
      personalProfile, 
      telNumber, 
      email,
      techSkills,
      softSkills,
      projectsNames,
      projectsUrls,
      jobsPositions,
      companiesNames,
      jobsDescriptions,
      jobsStartDates,
      jobsEndDates,
      fieldsOfStudies,
      universities,
      universitiesStartDates,
      universitiesEndDates,
      profilePicture,
   } = data;

   return (
      <div className="cv">
         <div className="left">
         <div className="img-container" style={{backgroundImage: `url(${profilePicture ? profilePicture : ProfilePic})`}} />
         <div className="contact-container">
            <h2>Contact</h2>
            <p>Phone:
               <a className="contact-link" href={`tel:${telNumber}`}>
                  <span> {telNumber}</span>
               </a>
            </p>
            <p>Email:
               <a className="contact-link" href={`mailto:${email}`}>
                  <span> {email}</span>
               </a>
            </p>
         </div>
         <div className="tech-skills-container">
            <h2>Tech skills</h2>
            <ul>
               {techSkills.map((skill) => {
                  return <li key={uuid()}>{skill}</li>
               })}
            </ul>
         </div>
         <div className="soft-skills-container">
         <h2>Soft skills</h2>
            <ul>
            {softSkills.map((skill) => {
                  return <li key={uuid()}>{skill}</li>
               })}
            </ul>
         </div>
         </div>

         <div className="right">
            <div className="personal-container">
               <h2 className="name">{firstName} {lastName}</h2>
               <p className="personal-title">{jobTitle}</p>
               <p className="personal-profile">{personalProfile}</p>
            </div>
            <div className="projects-container">
               <h2 className="title">Projects</h2>
               <ul>
                  {projectsNames.map((name, index) => {
                     return (
                        <li key={uuid()}><a href={projectsUrls[index]} target="_blank" rel="noreferrer">{name}</a></li>
                     )
                  })}
               </ul>
            </div>
            <div className="employment-container">
               <h2 className="title">Employment history</h2>
               {jobsPositions.map((position, index) => {
                  return (
                     <div key={uuid()} className="job-container">
                        <h3>{position} at <span className="span">{companiesNames[index]}</span></h3>
                        <p className="time">
                           <Moment date={jobsStartDates[index]} format="MMMM YYYY" /> to <Moment date={jobsEndDates[index]} format="MMMM YYYY" />
                        </p>
                        <p>{jobsDescriptions[index]}</p>
                     </div>
                  )
               })}
            </div>

            <div className="education-container">
               <h2 className="title">Education container</h2>
               {fieldsOfStudies.map((field, index) => {
                  return (
                     <div key={uuid()} className="school-container">
                        <h3>{field}, <span className="span">{universities[index]}</span></h3>
                        <p className="time">
                           <Moment date={universitiesStartDates[index]} format="MMMM YYYY" /> to <Moment date={universitiesEndDates[index]} format="MMMM YYYY" />
                        </p>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
