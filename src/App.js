import React, { useState } from 'react'
import './App.css';

import DisplayCV from './components/DisplayCV';

function App() {
  // states and handleState for strings
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [jobTitle, setJobTitle] = useState('Frontend Developer');
  const [personalProfile, setPersonalProfile] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore, earum neque autem ratione cum eveniet ut vel minus! Animi laborum a cum, fuga magni consequatur dolor laboriosam facere in.');
  const [telNumber, setTelNumber] = useState('123456789');
  const [email, setEmail] = useState('john.doe@emaple.com');
  const [profilePicture, setProfilePicture] = useState('');

  const handleImageUpload = (e) => {
    e.target.files[0] &&
    setProfilePicture(URL.createObjectURL(e.target.files[0]))
  }

  const handleChange = (e, setStateFunction) => {
    setStateFunction(e.target.value)
  }

  // states and handleState for arrays
  // tech skills
  const [techSkills, setTechSkills] = useState(['React']);
  const [numOfTechSkills, setNumOfTechSkills] = useState(1);

  // soft skills
  const [softSkills, setSoftSkills] = useState(['Teamwork']);
  const [numOfSoftSkills, setNumOfSoftSkills] = useState(1);

  // projects
  const [projectsNames, setProjectsNames] = useState(['Netflix']);
  const [projectsUrls, setProjectsUrls] = useState(['https://www.netflix.com']) 
  const [numOfProjects, setNumOfProjects] = useState(1);

  // employment history
  const [jobsPositions, setJobsPositions] = useState(['Junior Frontend Developer']);
  const [companiesNames, setCompaniesNames] = useState(['Not for dummies']);
  const [jobsDescriptions, setJobsDescription] = useState(['Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab!']);
  const [jobsStartDates, setJobsStartDates] = useState(['11-08-2018']);
  const [jobsEndDates, setJobsEndDates] = useState(['01-04-2020']);
  const [numOfJobs, setNumOfJobs] = useState(1);

  // education history
  const [fieldsOfStudies, setFieldsOfStudies] = useState(['Computer Science']);
  const [universities, setUniversities] = useState(['Massachusetts Institute of Technology']);
  const [universitiesStartDates, setUniversitiesStartDates] = useState(['11-24-2014']);
  const [universitiesEndDates, setUniversitiesEndDates] = useState(['01-04-2020']);
  const [numOfUniversities, setNumOfUniversities] = useState(1);
  

  const handleChangeArray = (e, setStateFunction, state, index) => {
    let stateCopy = [...state];
    stateCopy[index] = e.target.value;
    setStateFunction(stateCopy)
  }

  const increment = (e, setStateFunction, state) => {
    e.preventDefault();
    setStateFunction(state + 1);
  }

  const data = {
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
  }

  return (
    <div>
      <div className="sidebar">
        <h1>Create developer's CV!</h1>
        <p>Add your information below</p>

        <form className="form">
          <div className="form-section">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" id="first-name" onChange={e => handleChange(e, setFirstName)} />

            <label htmlFor="last-name">Last name</label>
            <input type="text" name="last-name" id="last-name" onChange={e => handleChange(e, setLastName)} />
            
            <label htmlFor="job-title">Job title</label>
            <input type="text" name="job-title" id="job-title" onChange={e => handleChange(e, setJobTitle)} />

            <label htmlFor="personal-profile">Personal profile</label>
            <textarea rows="6" name="personal-profile" id="personal-profile" onChange={e => handleChange(e, setPersonalProfile)} />

            <label htmlFor="tel">Tel</label>
            <input type="tel" name="tel" id="tel" onChange={e => handleChange(e, setTelNumber)} />

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" onChange={e => handleChange(e, setEmail)} />

            <label htmlFor="profile-image">Profile picture</label>
            <input type="file" name="picture" id="profile-image" accept="image/png, image/jpeg" onChange={e => handleImageUpload(e)} />
          </div>


          <div className="form-section">
            <label htmlFor="tech-skill">Tech skills</label>
            {[...Array(numOfTechSkills)].map((x, index) => {
              return (
                <div key={`London-${index}`}>
                  <p><span className="number">#{index +1}</span></p>
                  <input
                  type="text" 
                  name="tech-skill" 
                  id="tech-skill" 
                  onChange={e => handleChangeArray(e, setTechSkills, techSkills, index)} />
                </div>
              )
            })}
            <button className="btn" type="button" onClick={e => increment(e, setNumOfTechSkills, numOfTechSkills)}>Add new skill</button>

            <label htmlFor="soft-skill">Soft skills</label>
            {[...Array(numOfSoftSkills)].map((x, index) => {
              return (
                <div key={`Cairo-${index}`}>
                  <p><span className="number">#{index +1}</span></p>
                  <input
                  type="text" 
                  name="soft-skill" 
                  id="soft-skill" 
                  onChange={e => handleChangeArray(e, setSoftSkills, softSkills, index)} />
                </div>
              )
            })}
            <button className="btn" type="button" onClick={e => increment(e, setNumOfSoftSkills, numOfSoftSkills)}>Add new skill</button>
          </div>

          <div className="form-section">
            <label htmlFor="project-name-1">Projects</label>
            {[...Array(numOfProjects)].map((x, index) => {
              return (
                <div key={`Dubai-${index}`}>
                  <p><span className="number">#{index +1}</span></p>
                  <label htmlFor={`project-name-${index + 1}`}>Project name</label>
                  <input
                  type="text" 
                  name="project" 
                  id={`project-name-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setProjectsNames, projectsNames, index)} />

                  <label htmlFor={`project-url-${index + 1}`}>Project url</label>
                  <input
                  type="text" 
                  name="url" 
                  id={`project-url-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setProjectsUrls, projectsUrls, index)} />
                </div>
              )
            })}
            <button className="btn" type="button" onClick={e => increment(e, setNumOfProjects, numOfProjects)}>Add new project</button>
          </div>

          <div className="form-section">
            <label htmlFor="job-position-1">Employment history</label>
            {[...Array(numOfJobs)].map((x, index) => {
              return (
                <div key={`Jakarta-${index}`}>
                  <p><span className="number">#{index +1}</span></p>
                  <label htmlFor={`job-position-${index + 1}`}>Position</label>
                  <input
                  type="text" 
                  name="position" 
                  id={`job-position-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setJobsPositions, jobsPositions, index)} />

                  <label htmlFor={`company-${index + 1}`}>Company</label>
                  <input
                  type="text" 
                  name="company" 
                  id={`company-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setCompaniesNames, companiesNames, index)} />

                  <label htmlFor={`job-description-${index + 1}`}>Description</label>
                  <input
                  type="text" 
                  name="description" 
                  id={`job-description-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setJobsDescription, jobsDescriptions, index)} />

                  <label htmlFor={`job-start-date-${index + 1}`}>From</label>
                  <input
                  type="date" 
                  name="start-date" 
                  id={`job-start-date-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setJobsStartDates, jobsStartDates, index)} />

                  <label htmlFor={`job-end-date-${index + 1}`}>To</label>
                  <input
                  type="date" 
                  name="end-date" 
                  id={`job-end-date-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setJobsEndDates, jobsEndDates, index)} />
                </div>
              )
            })}
            <button className="btn" type="button" onClick={e => increment(e, setNumOfJobs, numOfJobs)}>Add new job</button>
          </div>

          <div className="form-section">
            <label htmlFor="university-field-1">Education history</label>
            {[...Array(numOfUniversities)].map((x, index) => {
              return (
                <div key={`Miami-${index}`}>
                  <p><span className="number">#{index +1}</span></p>
                  <label htmlFor={`university-field-${index + 1}`}>Field of studies</label>
                  <input
                  type="text" 
                  name="field" 
                  id={`university-field-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setFieldsOfStudies, fieldsOfStudies, index)} />

                  <label htmlFor={`university-${index + 1}`}>University</label>
                  <input
                  type="text" 
                  name="university" 
                  id={`university-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setUniversities, universities, index)} />

                  <label htmlFor={`university-start-date-${index + 1}`}>From</label>
                  <input
                  type="date" 
                  name="start-date" 
                  id={`university-start-date-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setUniversitiesStartDates, universitiesStartDates, index)} />

                  <label htmlFor={`university-end-date-${index + 1}`}>To</label>
                  <input
                  type="date" 
                  name="end-date" 
                  id={`university-end-date-${index + 1}`} 
                  onChange={e => handleChangeArray(e, setUniversitiesEndDates, universitiesEndDates, index)} />
                </div>
              )
            })}
            <button className="btn" type="button" onClick={e => increment(e, setNumOfUniversities, numOfUniversities)}>Add new university</button>
          </div>
        </form>
      </div>

      <div className="cv-container">
        <DisplayCV data={data} />
      </div>

    </div>
  )
}

export default App
