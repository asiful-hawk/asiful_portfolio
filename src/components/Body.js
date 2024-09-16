import React, { Suspense, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects from '../content/projects';
import aboutMe from '../content/about-me';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { TextA, TextB } from '../Model/Model';


export default function Body() {
    const [isModelA, setIsModelA] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsModelA(prev => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container'>
            <div>
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                    <Suspense fallback={null}>
                        <Stage preset="rembrandt" intensity={1} environment="dawn">
                            {isModelA ? <TextA /> : <TextB />}
                        </Stage>
                        <EffectComposer>
                            <Glitch
                                chromaticAberrationOffset={[1.5, 3.5]}
                                duration={[0.5, 1]} 
                                delay={[1.4, 3]}
                                strength={[0.3, 1.0]}
                                ratio={0.85}
                            />
                        </EffectComposer>
                    </Suspense>
                </Canvas>
            </div>
            <div >
                <p> I am a Software Developer with industry experience using Java (Spring Boot) and Angular 12. I have
                    worked on several cloud web applications. Implementation of client requirement using Leaflet
                    and other angular libraries and plug ins. Implementation of API.
                    I have worked on development of EBS software. Understanding business logic and using them to
                    create functions and UI using Java Spring Boot.
                </p>
            </div>
            <div className="terminal">
                <p className="terminal-line"><span className="prompt">$</span> echo "Asiful Haque"</p>
                <p className="terminal-line"><span className="prompt">$</span> loading restricted information..........</p>
                <p className="terminal-line"><span className="prompt">$</span> ..............</p>
                <p className="terminal-line"><span className="prompt">$</span> access granted</p>
                <p className="terminal-line"><span className="prompt">$</span> loading data......</p>
                {aboutMe.map((info, index) => {
                    return (
                        <div key={index}>
                            <p className="terminal-line"><span className="prompt">$</span> {info.input}</p>
                            <p className="terminal-line"> {info.return}</p>
                        </div>
                    );
                })}
            </div>
            <br></br>
            <br></br>

            <div id="projects" style={{ justifyContent: 'center' }}>
                <h5>Side Projects:</h5>
                {projects.map((project, index) => (
                    <><Card>

                        <Card.Header as="h5">{project.title}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            {project.skills.map((skill, index) => {
                                return (
                                    <Button style={{ margin: '5px' }} disabled variant="outline-dark">{skill} </Button>
                                )
                            })}
                            <br></br>
                            <br></br>
                            <Button style={{ margin: '5px' }} variant="outline-primary" href={project.links.github}>Live</Button>
                            <Button style={{ margin: '5px' }} variant="outline-dark" href={project.links.preview}>View Source</Button>
                        </Card.Body>
                    </Card><div>
                            <br />
                        </div></>
                ))}
            </div>
        </div >
    )
}
