import React, { Component } from 'react'
import uuid from 'react-uuid'
import Moment from 'react-moment';
import ProfilePic from '../profile.jpeg.jpg'

export default class DisplayCV extends Component {
   
   render() {
      const {
         firstName, 
         lastName,
         jobTitle, 
         personalProfile, 
         tel, 
         email,
         profileImage,
         techSkills,
         softSkills,
         projects,
         jobs,
         education,
      } = this.props.person
      return (
      <div className="cv">
         <div className="left">
         <div className="img-container" style={{backgroundImage: `url(${profileImage ? profileImage : ProfilePic})`}} />
         <div className="contact-container">
            <h2>Contact</h2>
            <p>Phone:
               <a className="contact-link" href={`tel:${tel}`}>
                  <span> {tel}</span>
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
                  return <li key={uuid()}>{skill.name}</li>
               })}
            </ul>
         </div>
         <div className="soft-skills-container">
         <h2>Soft skills</h2>
            <ul>
               {softSkills.map((skill) => {
                  return <li key={uuid()}>{skill.name}</li>
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
                  {projects.map((project) => {
                     const {id, name, url} = project
                     return (
                        <li key={id}><a href={url} target="_blank" rel="noreferrer">{name}</a></li>
                     )
                  })}
               </ul>
            </div>
            <div className="employment-container">
               <h2 className="title">Employment history</h2>
               {jobs.map((job) => {
                  const {position, company, description, start, end, id} = job
                  return (
                     <div key={id} className="job-container">
                        <h3>{position} at <span className="span">{company}</span></h3>
                        <p className="time">
                           <Moment date={start} format="MMMM YYYY" /> to <Moment date={end} format="MMMM YYYY" />
                        </p>
                        <p>{description}</p>
                     </div>
                  )
               })}
            </div>

            <div className="education-container">
               <h2 className="title">Education</h2>
               {education.map((university) => {
                  const {company, position, start, end, id} = university
                  return (
                     <div key={id} className="school-container">
                        <h3>{position}, <span className="span">{company}</span></h3>
                        <p className="time">
                           <Moment date={start} format="MMMM YYYY" /> to <Moment date={end} format="MMMM YYYY" />
                        </p>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
   }
}
