import React, { useState } from 'react'
import uuid from 'react-uuid'
import './App.css';

import DisplayCV from './components/DisplayCV';
import Input from './components/Input'
import MultipleInput from './components/MultipleInput'

function App() {
  const initialState = {
      firstName: 'Radek',
      techSkills: [],
      softSkills: [],
      projects: [
        {
          name: 'Shopping cart',
          url: 'https://radek1313.github.io/shopping-cart/',
          id: uuid(),
        },
      ],
      jobs: [
        {
          position: 'CEO',
          company: 'SpaceX',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          start: '2012-11-12',
          end: '2019-07-23',
          id: uuid(),
        }
      ],
      education: [
        {
          company: 'Politechnika Lubelska',
          position: 'Marketing',
          start: '2012-11-12',
          end: '2019-07-23',
          id: uuid(),
        }
      ]
    }
  const [person, setPerson] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name]: value})
  }

  const handleImageUpload = (e) => {
    const name = e.target.name
    e.target.files[0] &&
    setPerson({ ...person, [name]: URL.createObjectURL(e.target.files[0])})
  }

  const removeItem = (id, name) => {
    const newArr = person[name].filter(item => item.id !== id)
    setPerson({...person, [name]: newArr})
  }

  const handleSkillsSubmit = (e) => {
    e.preventDefault()
    const value = e.target.children[1].value
    const name = e.target.children[1].name
    const newPerson = {...person, [name]: [...person[name], {name: value, id: uuid()}]}
    setPerson(newPerson)
  }

  const handleProjectsSubmit = (e) => {
    e.preventDefault()
    const inputsArr = [...e.target.children].filter((item) => item.localName === 'input')
    const value0 = inputsArr[0].value
    const value1 = inputsArr[1].value
    const newPerson = {...person, projects: [...person.projects, {name: value0, id: uuid(), url: value1}]}
    setPerson(newPerson)
  }

  const handleJobSubmit = (e) => {
    e.preventDefault()
    const inputsArr = [...e.target.children].filter((item) => item.localName === 'input' || item.localName ==='textarea')
    const value0 = inputsArr[0].value
    const value1 = inputsArr[1].value
    const value2 = inputsArr[2].value
    const value3 = inputsArr[3].value
    const value4 = inputsArr[4].value
    const newPerson = {...person, jobs: [...person.jobs, {position: value0, company: value1, description: value2, start: value3, end: value4, id: uuid()}]}
    setPerson(newPerson)
  }

  const handleEducationSubmit = (e) => {
    e.preventDefault()
    const inputsArr = [...e.target.children].filter((item) => item.localName === 'input')
    const value0 = inputsArr[0].value
    const value1 = inputsArr[1].value
    const value2 = inputsArr[2].value
    const value3 = inputsArr[3].value
    const newPerson = {...person, education: [...person.education, {position: value0, company: value1, start: value2, end: value3, id: uuid()}]}
    setPerson(newPerson)
  }

  return (
    <div>
      <div className="sidebar">
        <h1>Create developer's CV!</h1>
        <p>Add your information below</p>

        <div className="form">
          <form className="form-section">
            <Input label='First name' id='firstName' handleChange={handleChange} />

            <Input label='Last name' id='lastName' handleChange={handleChange} />

            <Input label='Job title' id='jobTitle' handleChange={handleChange} />

            <label htmlFor="personalProfile">Personal profile</label>
            <textarea rows="6" name="personalProfile" id="personalProfile" onChange={handleChange} />

            <Input label='Tel' id='tel' type='tel' handleChange={handleChange} />

            <Input label='E-mail' id='email' type='email' handleChange={handleChange} />

            <label htmlFor="profileImage">Profile picture</label>
            <input type="file" name="profileImage" id="profileImage" accept="image/png, image/jpeg" onChange={e => handleImageUpload(e)} />
          </form>


          <div className="form-section">
            <MultipleInput removeItem={removeItem} list={person.techSkills} handleSubmit={handleSkillsSubmit} id='techSkills' label='Tech Skills' btnText='Add tech skill' />

            <MultipleInput removeItem={removeItem} list={person.softSkills} handleSubmit={handleSkillsSubmit} id='softSkills' label='Soft Skills' btnText='Add soft skill' />
          </div>

          <div className="form-section">
            <MultipleInput removeItem={removeItem} property='projects' list={person.projects} handleSubmit={handleProjectsSubmit} id='projectName' label='Project name' btnText='Add project' >
              <label htmlFor='projectUrl'>Project url</label>
              <input type='text' name='projectUrl' id='projectUrl' />
            </MultipleInput>
          </div>

          <div className="form-section">
            <MultipleInput removeItem={removeItem} property='jobs' list={person.jobs} handleSubmit={handleJobSubmit} id='jobPosition' label='Position' btnText='Add job' >
              <label htmlFor='company'>Company</label>
              <input type='text' name='company' id='company' />
              <label htmlFor='jobDesc'>Description</label>
              <textarea rows="6" name="jobDesc" id="jobDesc"/>
              <label htmlFor='startDate'>Start date</label>
              <input type='date' name='startDate' id='startDate' />
              <label htmlFor='endDate'>End date</label>
              <input type='date' name='endDate' id='endDate' />
            </MultipleInput>
          </div>

          <div className="form-section">
            <MultipleInput removeItem={removeItem} property='education' list={person.education} handleSubmit={handleEducationSubmit} id='fieldOfStudies' label='Field of studies' btnText='Add university' >
              <label htmlFor='university'>University</label>
              <input type='text' name='university' id='university' />
              <label htmlFor='startDate'>Start date</label>
              <input type='date' name='startDate' id='startDate' />
              <label htmlFor='endDate'>End date</label>
              <input type='date' name='endDate' id='endDate' />
            </MultipleInput>
          </div>
        </div>
      </div>

      <div className="cv-container">
        <DisplayCV person={person} />
      </div>

    </div>
  )
}

export default App