import React, { Suspense } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects from '../content/projects';
import aboutMe from '../content/about-me';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import Model from './Model';
import { EffectComposer, Glitch } from '@react-three/postprocessing';

export default function Body() {
    return (
        <div className='container'>
            <div>
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                    <Suspense fallback={null}>
                        <Stage preset="rembrandt" intensity={1} environment="dawn">
                            <Model />
                        </Stage>
                        <EffectComposer>
                            <Glitch
                                delay={[1.5, 3.5]} // min and max glitch delay
                                duration={[0.6, 1.0]} // min and max glitch duration
                                strength={[0.3, 1.0]} // min and max glitch strength
                                active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                                ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                            />
                        </EffectComposer>
                    </Suspense>
                </Canvas>
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

            <div className='col-md-10' style={{ justifyContent: 'center' }}>
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
