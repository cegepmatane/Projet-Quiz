import '../pageConnexion.css';
import React from "react";
import { utilisateursData } from "./utilisateurs";

export const DonneesUtilisateur = () => {
    return (
        <>
            <div>
                {utilisateursData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.id_utilisateur +
                            " , " +
                            data.meilleurScore +
                            ", " +
                            data.username +
                            " ," +
                            data.password}
                        </div>
                    );
                })}
            </div>
        </>
    );
};