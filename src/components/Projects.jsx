import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import messangers from '../assets/img/messangers.jpg'
import soc from '../assets/img/soc.jpg'
import skype from '../assets/img/skype.png';

import wifi from '../assets/img/wi-fi-direct.jpg'
import file_manager from '../assets/img/file_manager.png'
import discord from '../assets/img/discord.webp';


const Projects = () => {

    const projects = [
        {
          title: "Мессенджеры",
          description: "Whats App, Telegram, Viber",
          imgUrl: messangers,
        },
        {
          title: "Социальные сети",
          description: "Facebook, VK, Instagram",
          imgUrl: soc,
        },
        {
          title: "Медиа-коммуникации",
          description: "Skype, Zoom, Google Meet",
          imgUrl: skype,
        },
        {
          title: "Wi-Fi Direct Technologies",
          description: "Superbeam, Pushbullet",
          imgUrl: wifi,
        },
        {
          title: "Файловые менеджеры",
          description: "Xender, WeTransfer",
          imgUrl: file_manager,
        },
        {
          title: "Сервисные приложения",
          description: "Discord, Slack, Tox",
          imgUrl: discord,
        },
      ];

    return ( 
        <section className='projects' id='projects'>
            <Container >
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Виды</h2>
                                <p>Ниже представлены примеры различных видов приложений</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        // title={project.title} 
                                                        // description={project.description} 
                                                        // imgUrl={project.imgUrl}
                                                        {...project}
                                                        key={index}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className="background-image-right" />
        </section>
     );
}
 
export default Projects;