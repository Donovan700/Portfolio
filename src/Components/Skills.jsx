import React from "react";
import './CSS/Skills.css'

function Skills() {
    const imageStyle = {
        borderRadius: '20px', // Vous pouvez ajuster le rayon de la bordure comme vous le souhaitez
    };
    return (
        <div className="container">
            <br/><br/><br/><br/>
            <h2 className="display-4">Skills</h2><br/><br/>
            <div className="card">
                <div className="row">
                    <div className="col mb-4">
                        <h3 className="display-7">Infography</h3>
                        <img src="MultiColore.png" alt="image" width={200} style={imageStyle} />
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                    <h3 className="display-7">Programming</h3>
                        <img src="CodeMe.jpg" alt="image" height={250} style={imageStyle} />
                    </div>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">                        
                    <h3 className="display-7">Communication</h3>
                        <img src="Communicate.jpg" alt="image" height={250} style={imageStyle} />
                    </div>
                    </div>
                    <div className="col mb-4">
                    <div className="col mb-4">
                    <h3 className="display-7">Modelising</h3>
                        <img src="BRYAN.png" alt="image" width={200} style={imageStyle} />
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default Skills;
