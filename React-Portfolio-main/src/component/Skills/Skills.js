import React from 'react'
import './Skills.css'
import { skills } from '../../data'

const Skills = () => {
  return (
   <section id='skills'>
        <div className="container full__height">
          <h1 className='title'>
            <span className="text__gradient">Skills</span>
          </h1>
          <div className="skill__container">
            {skills.map((item,index)=>(
                <div className="skill__box__container" key={index}>
                    <h3 className='category text__gradient'>{item.category}</h3>
                    {
                      item.data.map((item,index)=>(
                        <div className="box" key={index}>
                          <div className="hover__fill icon__container">
                            {item.icon}
                          </div>
                          <p className='name'>{item.skill}</p>
                          <div className="progress__container">
                            <div className="progress" style={{width:item.progress+'%'}}></div>
                          </div>
                          <p className='percentage'>{item.progress}%</p>
                        </div>
                      ))
                    }
                </div>
            )
          )}
          </div>
        </div>
   </section>
  )
}

export default Skills