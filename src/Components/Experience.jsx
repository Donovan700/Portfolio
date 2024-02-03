/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import { Modal, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Experience.css'

function Experience() {

    const [showASECNAModal, setShowASECNAModal] = useState(false);
    const [showProblemSolvingModal, setShowPbModal] = useState(false);
    const [showENIModal, setShowENIModal] = useState(false);
    const [showLRAModal, setShowLRAModal] = useState(false);
    const [showDesktopModal, setShowDesktopModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);
    const [showGameModal, setShowGameModal] = useState(false);
    const [showWebModal, setShowWebModal] = useState(false);

    const handleShow = () => setShowASECNAModal(true);
    const handleClose = () => setShowASECNAModal(false);
    const handleShowPb = () => setShowPbModal(true);
    const handleClosePb = () => setShowPbModal(false);
    const handleShowENI = () => setShowENIModal(true);
    const handleCloseENI = () => setShowENIModal(false);
    const handleShowLRA = () => setShowLRAModal(true);
    const handleCloseLRA = () => setShowLRAModal(false);
    const handleShowDesktop = () => setShowDesktopModal(true);
    const handleCloseDesktop = () => setShowDesktopModal(false);
    const handleShowMobile = () => setShowMobileModal(true);
    const handleCloseMobile = () => setShowMobileModal(false);
    const handleShowGame = () => setShowGameModal(true);
    const handleCloseGame = () => setShowGameModal(false);
    const handleShowWeb = () => setShowWebModal(true);
    const handleCloseWeb = () => setShowWebModal(false);

    return (
        <div className="container" id="experience">
            <br/><br/><br/><br/>
            <h2 className="display-4">Experiences And Educations</h2><br/><br/>
            <div className="card">
                <div className="row">
                    <div className="col mb-4">
                        <img src="ASECNA.jpeg" alt="image" className="experience-image" />
                        <h2 className="card-title font-weight-bold">Trainee Developer</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>ASECNA Madagascar</h3><br/>
                        <p className="card-text">Designer and developer of an aeronautical network gateway</p>
                        <button className='btn btn-primary btn-more-details' id="ASECNA">
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }} onClick={handleShow}>Click for more</a>
                        </button>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                        <img src="QuestionMark.png" alt="image" className="experience-image" />
                        <h2 className="card-title font-weight-bold">Problem Solving</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>DevFest Pro Madagascar</h3><br/>
                        <p className="card-text">Competiting as a problem solver in a determined time</p>
                        <button className='btn btn-primary btn-more-details' id="PbSolving">
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }} onClick={handleShowPb}>Click for more</a>
                        </button>
                    </div>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                        <img src="ENI.jpg" alt="image" className="experience-image" />
                        <h2 className="card-title font-weight-bold">Student</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>ENI Fianarantsoa</h3><br/>
                        <p className="card-text">Actually in my 3rd year of Professional Licence</p>
                        <button className='btn btn-primary btn-more-details' id="ENI">
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }} onClick={handleShowENI}>Click for more</a>
                        </button>
                    </div>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                        <img src="LRA.jpeg" alt="image" className="experience-image" />
                        <h2 className="card-title font-weight-bold">Student</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>Ambohidratrimo High School</h3><br/>
                        <p className="card-text">Student at Ambohidratrimo High School following Scientific serie</p>
                        <button className='btn btn-primary btn-more-details' id="LRA">
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }} onClick={handleShowLRA}>Click for more</a>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <p>
                Those are all my professional experiences and my educations since I've been graduated from high school.Perhaps,these
                are some other works experiences without any evidences like helping some other developers on their work,extra-time with some little jobs or company,
                making some friends apps or website,...
            </p>
            <br/><br/><br/><br/>
            <h2 className="display-4">Projects</h2><br/><br/>
            <div className="card">
            <div className="row">
                    <div className="col mb-4">
                        <img src="Soft.jpeg" alt="image" className="project-image" />
                        <h2 className="card-title font-weight-bold">Desktop</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>Softwares</h3><br/>
                        <p className="card-text">Software's applications category only available on PC</p>
                        <button className="btn btn-primary btn-see-all" onClick={handleShowDesktop}>See All</button>
                        {/* <button className='btn btn-primary btn-see-all'><a href="https://github.com/Donovan700/Reservation-Chambre" target={"_blank"} className="text-white" style={{ textDecoration: 'none' }} rel="noreferrer">See All</a></button> */}
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                        <img src="App.jpeg" alt="image" className="project-image" />
                        <h2 className="card-title font-weight-bold">Mobile</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>Mobile Apps</h3><br/>
                        <p className="card-text">Mobile applications category</p>
                        {/* <button className='btn btn-primary btn-see-all' id="Mobile"><a href="https://github.com/Donovan700/E-Manage" target={"_blank"} className="text-white" style={{ textDecoration: 'none' }} rel="noreferrer">See All</a></button> */}
                        <button className="btn btn-primary btn-see-all" id="Mobile" onClick={handleShowMobile}>See All</button>
                    </div>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                        <img src="Play.jpeg" alt="image" className="project-image" />
                        <h2 className="card-title font-weight-bold">Game</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>Mobile Apps & Softwares</h3><br/>
                        <p className="card-text">Games development category which run on PC or Smartphone</p>
                        {/* <button className='btn btn-primary btn-see-all' id="Game"><a href="https://github.com/Donovan700/DataExtractor" target={"_blank"} className="text-white" style={{ textDecoration: 'none' }} rel="noreferrer">See All</a></button> */}
                        <button className="btn btn-primary btn-see-all" id="Game" onClick={handleShowGame}>See All</button>
                    </div>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                        <img src="Platform.jpeg" alt="image" className="project-image" />
                        <h2 className="card-title font-weight-bold">Web</h2><br/>
                        <h3 className="card-subtitle display-10" style={{color: "gray"}}>Web platform</h3><br/>
                        <p className="card-text">Websites or online platforms category</p>
                        {/* <button className='btn btn-primary btn-see-all' id="Web"><a href="https://github.com/Donovan700/Flappy--Bird" target={"_blank"} className="text-white" style={{ textDecoration: 'none' }} rel="noreferrer">See All</a></button> */}
                        <button className="btn btn-primary btn-see-all" id="Web" onClick={handleShowWeb}>See All</button>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <p>
                Those are only some few projects I've displayed here but you can see all of my personal projects on <a href="https://github.com/Donovan700" target={"_blank"} rel="noreferrer">Github</a>. Some
                of these projects are available online or on PC. Anyway, My projects are not limited on the above only but there are more if it is on Github or not, please note that these projects are
                still in production so they are able to be contribuate by any developers \\if needed\\ and not on their final version. 
            </p>
            <br/><br/><br/><br/>
            <h2 className="display-4">Certifications</h2><br/><br/>
            <div className="card">
                <div className="row">
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1YmYh0XpExUXwsskW-cSJ3tsOuYsBoycG/view?usp=drive_link" target={"_blank"} rel="noreferrer"><img src="Google-ateliers-numériques.jpg" alt="image" /></a>
                    </div>
                    <div className="col">
                        <a href="https://drive.google.com/file/d/17icTa8JfaxQWwAwY7_hd9fcPXnpb6udU/view?usp=drive_link" target={"_blank"} rel="noreferrer"><img src="Mooc.png" alt="image" /></a>
                    </div>
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1GWzek0euuJzpa94XSlFG3mGunEVYYVZ_/view?usp=drive_link" target={"_blank"} rel="noreferrer"><img src="CodinGame.png" alt="image" /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1myo0ui0DoikLv96IffQMxpHSezF3jYlt/view?usp=drive_link" target={"_blank"} rel="noreferrer"><img src="Mooc.png" alt="image" /></a>
                    </div>
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1IguxI5MmCi94c3HTtAfY6gxypNNDd0p1/view?usp=drive_link" target={"_blank"} rel="noreferrer"><img src="hackerrank.png" alt="image" /></a>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <p>
                Those are just a few online and electronical certifications that I've displayed but there is more on my <a href="https://www.linkedin.com/in/bryan-rakoto-sedson-007842234/" target={"_blank"} rel="noreferrer">Linkedin</a> account
                to check out.
            </p>

            <Modal show={showASECNAModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title><img src="ASECNA.jpeg" alt="image" className="icon" /> ASECNA Internship</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>Details</h3>
                <p>Duration: 4 months<br/>August - December</p>
                <h3>About the project</h3>
                <img src="Flight.jpg" alt="image" className="ModalView" />
                <p>
                    Designer and developer in ASECNA Ivato Madagascar, I worked on a big project between for innovating
                    the performance of aeronautical networks.Perhaps I'm a fullstack developer, I've experienced networking management
                    in the way my project is to design and develop a data gateway between two aeronautical networks which are AMHS and IATA
                </p>
                </Modal.Body>
            </Modal>
            <Modal show={showProblemSolvingModal} onHide={handleClosePb}>
                <Modal.Header closeButton>
                <Modal.Title><img src="QuestionMark.png" alt="image" className="icon" /> Problem Solving</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>Details</h3>
                <p>Duration: 1 week<br/>October</p>

                <h3>About the project</h3>
                <img src="Hackathon.jpg" alt="image" className="ModalView" />
                <p>
                    I participated in Algorithm's content with DevFest Pro Madagascar 2022 in Antananarivo.It is about to solve
                    some problems with the helps of algorithms,I've chosen 'C' as programming languages to solve five problems online which includes
                    professional problems and in average problems levels
                </p>
                </Modal.Body>
            </Modal>
            <Modal show={showENIModal} onHide={handleCloseENI}>
                <Modal.Header closeButton>
                <Modal.Title><img src="ENI.jpg" alt="image" className="icon" /> ENI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>Details</h3>
                <p>Duration: 3 years<br/>2021 - 2024</p>
                <h3>Professional Bachelor's Degree</h3>
                <img src="Ecole.jpg" alt="image" className="ModalView" />
                <p>
                    Actually at my 3rd years of formation, I've been studying at ENI Fianarantsoa Madagascar since October 2021
                    for the Professional Bachelor's Degree Formation
                </p>
                </Modal.Body>
            </Modal>
            <Modal show={showLRAModal} onHide={handleCloseLRA}>
                <Modal.Header closeButton>
                <Modal.Title><img src="High.png" alt="image" className="icon" /> Rambolamasoandro High School</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>Details</h3>
                <p>Duration: 3 years<br/>2017 - 2020</p>
                <h3>High Scool Degree - Fairly Good</h3>
                <img src="LRA.jpeg" alt="image" className="ModalView" />
                <p>
                    I studied at Rambolamasoandro High School in Ambohidratrimo Madagascar following scientific path,
                    I've obtained a fairly good observation on my High School Degree Diploma with a rate of 13.68/20 of
                    my subjects mean
                </p>
                </Modal.Body>
            </Modal>
            <Modal show={showDesktopModal} onHide={handleCloseDesktop}>
                <Modal.Header closeButton>
                <Modal.Title>All software's projects</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Card.Img variant="top" src="Data.jpeg" alt="Image du projet" />
                    <Card.Body>
                        <Card.Title>Data Xtractor</Card.Title>
                        <Card.Text>
                            Data Xtractor is a simple software which extract datas from an XML or Excel files,
                            It doesn't really have many functionalities unless they're more idea to optimize the project
                        </Card.Text>
                        <a href="https://github.com/Donovan700/DataExtractor.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Chambers.png" alt="Image" />
                    <Card.Body>
                        <Card.Title>Chamber's Reservation</Card.Title>
                        <Card.Text>
                            This software is Chamber's room reservation software available on Windows.
                            It hasn't released yet but only in beta version which any Hotels could use in no time,
                            It has a several functionalities which includes sending mail,generating PDF form,....
                        </Card.Text>
                        <a href="https://github.com/Donovan700/Reservation-Chambre.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Stock.jpeg" alt="Image" />
                    <Card.Body>
                        <Card.Title>Stock Management</Card.Title>
                        <Card.Text>
                            This is a software's application only available on Windows.It helps with managing
                            incomes or outcomes of your product,that's why it is called "Stock Management"
                        </Card.Text>
                        <a href="https://github.com/Donovan700/StockAPI.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="ASECNA.jpeg" alt="Image" />
                    <Card.Body>
                        <Card.Title>AMHS Gateway</Card.Title>
                        <Card.Text>
                            This is a very huge project with ASECNA Madagascar and Aeronautical networks systems.
                            Unfortunately, I'm not able to communicate neither the details of the project nor
                            the source code of the project due to the restriction by the Agency privacy.
                        </Card.Text>
                        <Button variant="primary" onClick={handleCloseDesktop}>Confirm</Button>
                    </Card.Body>
                </Card>
                </Modal.Body>
            </Modal>
            <Modal show={showMobileModal} onHide={handleCloseMobile}>
                <Modal.Header closeButton>
                <Modal.Title>All Mobile's projects</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>Check on Github</h3>
                <Card>
                <Card.Img variant="top" src="RightNumber.png" alt="Image du projet" />
                    <Card.Body>
                        <Card.Title>Right Number</Card.Title>
                        <Card.Text>
                        This is a mobile game available on Android ans IOS system,
                        It's not released yet but it will soon on 2024
                        </Card.Text>
                        <a href="https://github.com/Donovan700/GuessNumber.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                </Card>
                </Modal.Body>
            </Modal>
            <Modal show={showGameModal} onHide={handleCloseGame}>
                <Modal.Header closeButton>
                <Modal.Title>All Game's projects</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>Check on Github</h3>
                <Card>
                    <Card.Img variant="top" src="RightNumber.png" alt="Image du projet" />
                    <Card.Body>
                        <Card.Title>Right Number</Card.Title>
                        <Card.Text>
                        This is a mobile game available on Android ans IOS system,
                        It's not released yet but it will soon on 2024
                        </Card.Text>
                        <a href="https://github.com/Donovan700/GuessNumber.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Car.png" alt="Image" />
                    <Card.Body>
                        <Card.Title>Car Swiping</Card.Title>
                        <Card.Text>
                            This is game project running in a navigator,It's a pretty much funny game tought it hasn't
                            been responsived yet. 
                        </Card.Text>
                        <a href="https://github.com/Donovan700/Car-Swiping.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Dino.png" alt="Image" />
                    <Card.Body>
                        <Card.Title>Crazy UFO</Card.Title>
                        <Card.Text>
                            This is a Dino copy project which I called Crazy UFO,It hasn't released yet due to
                            the project hasn't been responsived yet and there are so many features and bugs to be checked
                        </Card.Text>
                        <a href="https://github.com/Donovan700/Dino.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Flappy.png" alt="Image" />
                    <Card.Body>
                        <Card.Title>Flappy Bird</Card.Title>
                        <Card.Text>
                            This is a "Flappy bird" game using only navigator,This is a fairly copy of the original
                            game Flappy Bird so it's not an original kind of game I've created
                        </Card.Text>
                        <a href="https://github.com/Donovan700/Flappy--Bird.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Pong.jpeg" alt="Image" />
                    <Card.Body>
                        <Card.Title>Pong</Card.Title>
                        <Card.Text>
                            This is retro game Pong that I try to make it better,It will work on Windows.
                            This project is still in progress from now...
                        </Card.Text>
                        <Button variant="primary" onClick={handleCloseGame}>Confirm</Button>
                    </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
            <Modal show={showWebModal} onHide={handleCloseWeb}>
                <Modal.Header closeButton>
                    <Modal.Title>All Web's projects</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Check on Github</h3>
                    <Card>
                    <Card.Img variant="top" src="Portfolio.png" alt="Image du projet" />
                    <Card.Body>
                        <Card.Title>Portfolio</Card.Title>
                        <Card.Text>
                        My Online Curriculum Vitae,You can see all my Achievements,Projects,Skills,Certifications and 
                        my education programs
                        </Card.Text>
                        <a href="https://bit.ly/bryan-donovan"><Button variant="primary">See Website</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Manage.jpeg" alt="Image" />
                    <Card.Body>
                        <Card.Title>E-Manage</Card.Title>
                        <Card.Text>
                            This is an online platform that helps user to manage their money,Especially their outcomes 
                            either their incomes.Each expenditure should have their own category so it is this platform,It shows
                            us our expenditure's mouvement.
                        </Card.Text>
                        <a href="https://github.com/Donovan700/E-Manage.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Soutenance.jpeg" alt="Image" />
                    <Card.Body>
                        <Card.Title>Soutenance's Management</Card.Title>
                        <Card.Text>
                            This is a school project which is to manage "Soutenance".A Soutenance is the final step
                            to get a Professional Bachelor's Degree or to be an Engineer if you've studied in College for
                            more than 5 years.
                        </Card.Text>
                        <a href="https://github.com/Donovan700/GestionDeSoutenance.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Watch.png" alt="Image" />
                    <Card.Body>
                        <Card.Title>Web Watch</Card.Title>
                        <Card.Text>
                            This is a static platform which is just a clock watch showing the time,it depends
                            on the time you got on your PC.
                        </Card.Text>
                        <a href="https://github.com/Donovan700/Watch--JS.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    <Card.Img variant="top" src="Music.png" alt="Image" />
                    <Card.Body>
                        <Card.Title>E-Music</Card.Title>
                        <Card.Text>
                            This is music platform project which you can listen to your local music.It is not a releasing
                            project but just an educational one in term of the terms and policies of music buisness.
                        </Card.Text>
                        <a href="https://github.com/Donovan700/YouPlay.git" target="_blank" rel="noopener noreferrer"><Button variant="primary">Watch code</Button></a>
                    </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Experience;
