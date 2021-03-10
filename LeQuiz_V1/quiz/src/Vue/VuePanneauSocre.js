import React from 'react';

const VuePanneauScore = () => {

    
        return(
            <div className="panneau-score">
            <div className="titre-score-contenant">
                <h1 className="titre-score">Score</h1>
            </div>
                <div className="score">
                    <span className="utilisateur">User 1 :</span>
                    <span>300</span>
                    <hr></hr>
                </div>
                <div className="score">
                    <span className="utilisateur">User 2 :</span>
                    <span>200</span>
                    <hr></hr>
                </div>
                <div className="score">
                    <span className="utilisateur">User 3 :</span>
                    <span>100</span>
                    <hr></hr>
                </div>
            </div>
        );
}
export default VuePanneauScore;