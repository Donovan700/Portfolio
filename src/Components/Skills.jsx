// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./CSS/Skills.css";

const infographyImages = [
    "MultiColore.png",
    "Luxe.png",
    "Delighted.png",
    "Juan.png",
    "BlueTheme.png",
    "LoneWolf.png",
    "RedEye.png",
    "Darkness.png",
    "Boss2.png",
    "Hell.png",
    "Néon.png",
    "Clonage.png"
];

const programmingImages = [
    "C.jpeg",
    "C++.jpeg",
    "JAVA.png",
    "JS.png",
    "pHp.jpeg",
    "Python.jpeg",
    "SQL.jpeg",
    "PostGRE.jpg",
    "React.jpeg",
    "Vue.jpeg",
    "Laravel.png",
    "Django.png"
];

const communicationImages = [
    "French.png",
    "English.jpeg",
    "German.jpeg"
];

const modelisingImages = [
    "BRYAN.png",
    "Artia.png"
];

const skillsData = [
    { title: "Infography", images: infographyImages },
    { title: "Programming", images: programmingImages },
    { title: "Communication", images: communicationImages },
    { title: "Modelising", images: modelisingImages },
];

function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const openModal = (images) => {
        setSelectedImages(images);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImages([]);
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <br/><br/><br/><br/>
            <h2 className="display-4">Skills</h2><br/><br/>
            <div className="card">
                <div className="row">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="col mb-4"
                            onClick={() => openModal(skill.images)}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3 className="display-7">{skill.title}</h3>
                            <div className="image-container">
                                {Array.isArray(skill.images) && skill.images.length > 0 ? (
                                    <img
                                        src={skill.images[0]}
                                        alt="image"
                                        className="skill-image"
                                    />
                                ) : (
                                    <img
                                        src={skill.image}
                                        alt="image"
                                        className="skill-image"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br/><br/><br/>

            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    {selectedImages.length > 0 && (
                        <div className="modal-image-container">
                            {selectedImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`image-${index}`}
                                    className="modal-image"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Skills;