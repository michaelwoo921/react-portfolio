import React from 'react'

const data = [
    {
        logo: '/uofa.png', 
        title: 'PhD - Applied Mathematics',
        school: 'University of Arizona - May 2000'
    },
    {
        logo: '/coursera.png', 
        title: 'Full-Stack Web Development with React Specialization',
        school: 'Coursera', 
        date:  "Dec 22, 2019", 
        url: "https://coursera.org/share/7f324de96bcf941749a6cd0ea01cc302"
    },
    {
        logo: '/udemy.png', 
        title: 'Modern React with Redux',
        school: 'Udemy', 
        date: "June 20, 2020", 
        url: "https://www.udemy.com/certificate/UC-fd11b21e-a716-4887-878e135835f31b65/"
}
]
const Education = () => {
  return (
    <div>
        <div className="edu-header"> Education and Certification</div>
        
        {data.map((school,index) => {
            return (
            <div key={index}>
                 <div className="edu-item"> 
                 <img src={`${school.logo}`} className="edu-img" alt="school logo"/>
                    <div className="edu-content"> 
                        <div className="edu-title"> {school.title}</div>
                        <div className="edu-school"> icon {school.school}</div>
                        <div className="edu-extra">
                            {school.date ? (
                                `Issued on: ${school.date}`
                            ): null}
                            <br />
                            {school.url ? (
                               <a href={school.url}>Online transcript</a>
                             
                            ): null}
                            
                            
                        </div>

                    </div>
                </div>
            </div>
            )
           
        })}
        
        
    </div>
  )
}

export default Education