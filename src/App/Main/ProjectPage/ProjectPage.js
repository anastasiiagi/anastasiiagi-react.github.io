import React from 'react'
import apartmen from './apartmen.jpg'
import livingRoom from './livingRoom.jpg'
import bedroom from './bedroom.jpg'
import kitchen from './kitchen.jpg'
import './project.css'

const ProjectPage = () => {
    return (
        <>
            <h1 className="title-page">Project</h1>
            <section className="project project-apartmen">
                <div className="project-picture">
                    <img className="project-picture__img" src={apartmen} alt="interior Photography" />
                </div>
                <div className="project-wrap">
                    <h2 className="project__title">Apartment interior design</h2>
                    <p className="project__text">We have prepared for you an interesting selection of apartment projects,
                        among which are: one-room, two-room, three-room apartments, studios,
                        penthouses, duplexes and triplexes. Small and large, with standard and improved layouts, simple and elite, made in different styles:
                        be it modern, classic or Scandinavian - they all deserve attention due to their uniqueness, functionality and practicality.
                        Bright photos of apartment interiors, finished projects and beautiful interior designs will
                        inspire those who want to equip their living space and help realize their most cherished dreams.
                        Interior Lab will help you complete any project, from redecorating to complete redevelopment and changing the style of the apartment.
                    </p>
                </div>
            </section>
            <section className="project project-livingRoom">
                <div className="project-wrap">
                    <h2 className="project__title">Living room interior design</h2>
                    <p className="project__text">We have prepared for you an interesting selection of apartment projects,
                        among which are: one-room, two-room, three-room apartments, studios,
                        penthouses, duplexes and triplexes. Small and large, with standard and improved layouts, simple and elite, made in different styles:
                        be it modern, classic or Scandinavian - they all deserve attention due to their uniqueness, functionality and practicality.
                        Bright photos of apartment interiors, finished projects and beautiful interior designs will
                        inspire those who want to equip their living space and help realize their most cherished dreams.
                        Interior Lab will help you complete any project, from redecorating to complete redevelopment and changing the style of the apartment.
                    </p>
                </div>
                <div className="project-picture">
                    <img className="project-picture__img" src={livingRoom} alt="interior Photography" />
                </div>
                
            </section>
            <section className="project project-bedroom">
                <div className="project-picture">
                    <img className="project-picture__img" src={bedroom} alt="interior Photography" />
                </div>
                
                <div className="project-wrap">
                    <h2 className="project__title">Bedroom interior design</h2>
                    <p className="project__text">We have prepared for you an interesting selection of apartment projects,
                        among which are: one-room, two-room, three-room apartments, studios,
                        penthouses, duplexes and triplexes. Small and large, with standard and improved layouts, simple and elite, made in different styles:
                        be it modern, classic or Scandinavian - they all deserve attention due to their uniqueness, functionality and practicality.
                        Bright photos of apartment interiors, finished projects and beautiful interior designs will
                        inspire those who want to equip their living space and help realize their most cherished dreams.
                        Interior Lab will help you complete any project, from redecorating to complete redevelopment and changing the style of the apartment.
                    </p>
                </div>
            </section>
            <section className="project project-kitchen">
                <div className="project-wrap">
                    <h2 className="project__title">Kitchen interior design</h2>
                    <p className="project__text">We have prepared for you an interesting selection of apartment projects,
                        among which are: one-room, two-room, three-room apartments, studios,
                        penthouses, duplexes and triplexes. Small and large, with standard and improved layouts, simple and elite, made in different styles:
                        be it modern, classic or Scandinavian - they all deserve attention due to their uniqueness, functionality and practicality.
                        Bright photos of apartment interiors, finished projects and beautiful interior designs will
                        inspire those who want to equip their living space and help realize their most cherished dreams.
                        Interior Lab will help you complete any project, from redecorating to complete redevelopment and changing the style of the apartment.
                    </p>
                </div>
                <div className="project-picture">
                    <img className="project-picture__img" src={kitchen} alt="interior Photography" />
                </div>
                
            </section>
        </>
    )
}

export default ProjectPage