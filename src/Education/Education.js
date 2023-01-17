import React from 'react'

const data = [
    {
        logo: '/uofa.png', 
        title: 'PhD in Applied Mathematics',
        school: 'University of Arizona - May 2000',
        icon: "/degree.png"
    },
    {
        logo: '/coursera.png', 
        title: 'Full-Stack Web Development with React Specialization',
        school: 'Coursera', 
        date:  "Dec 22, 2019", 
        url: "https://coursera.org/share/7f324de96bcf941749a6cd0ea01cc302",
        icon: "/certificate.jpg"
    },
    {
        logo: '/coursera.png', 
        title: 'Front End JavaScript Frameworks: Angular',
        school: 'Coursera', 
        date: "June 15, 2022", 
        url: "https://coursera.org/share/7154831089a78b11fdf05cd7d21ac838",
        icon: "/certificate.jpg"
    },
    {
        logo: '/coursera.png', 
        title: 'HTML, CSS, and JavaScript for Web Developers',
        school: 'Coursera', 
        date: "May 15, 2022", 
        url: "https://coursera.org/share/6a6d414b6734592822d6d47266054ccf",
        icon: "/certificate.jpg"
    },


    {
        logo: '/udemy.png', 
        title: 'Vue JS Essentials with Vuex and Vue Router',
        school: 'Udemy', 
        date: "May 25, 2022", 
        url: "https://www.udemy.com/certificate/UC-bec6f219-ae34-4466-86fc-d69024cd58b6/",
        icon: "/certificate.jpg"
    },
  
    {
        logo: '/udemy.png', 
        title: 'Advanced CSS and Sass: Flexbox, Gird, Animations and More!',
        school: 'Udemy', 
        date: "April 23, 2022", 
        url: "https://www.udemy.com/certificate/UC-a327214d-06f3-4afb-986e-60c7fa3c38a4/",
        icon: "/certificate.jpg"
    },
   

    {
        logo: '/coursera.png', 
        title: 'Deep Learning',
        school: 'Coursera', 
        date: "March 1, 2019", 
        url: "https://coursera.org/share/6d3dc3a21a5042d8908dd35643d6a382",
        icon: "/certificate.jpg"
    },

]
const Education = () => {
  return (
    <div>
        <div className="edu__header"> Education and Certification</div>
        
        {data.map((school,index) => {
            return (
            <div key={index}>
                 <div className="edu__item"> 
                 <img src={`${school.logo}`} className="edu__logo" alt="school logo"/>
                    <div className="edu__content"> 
                        <div className="edu__degree"> {school.title}</div>
                        <div className="edu__school"><img src={school.icon} alt="degree or certificate" className="edu__school-icon"/>
                             <div className="edu__school-name"> {school.school} </div>
                        </div>
                        <div className="edu__extra">
                            {school.date ? (
                                `Issued on: ${school.date}`
                            ): null}
                            <br />
                            {school.url ? (
                               <a href={school.url} target="_blank">Online transcript</a>
                             
                            ): null}
                            
                            
                        </div>
                        

                    </div>
                </div>
                <hr  className="edu__line"/>
            </div>
            )
           
        })}
        
        
    </div>
  )
}

export default Education