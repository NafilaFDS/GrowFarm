import React, { useContext } from 'react'
import { SettingContext } from '../App';

const About = () => {
    const { languageData } = useContext(SettingContext);
    return (
        <section className="about-us py-5">
            <div className="container">
                <h1>{languageData.aboutUs[0]}</h1>
                <div className="about-top d-flex justify-content-between">
                    <div className="about-item">
                        <h3>{languageData.aboutUs[1]}</h3>
                        <p>{languageData.aboutUs[2]}</p>
                    </div>
                    <div className="about-item">
                        <h3>{languageData.aboutUs[3]}</h3>
                        <p>{languageData.aboutUs[4]}</p>
                    </div>
                </div>
                <div className="about-bottom">
                    <div className="about item">
                        <h3>{languageData.aboutUs[5]}</h3>
                        <ul>
                            <li><p>{languageData.aboutUs[6]} </p></li>
                            <li><p>{languageData.aboutUs[7]}</p></li>
                            <li><p>{languageData.aboutUs[8]}</p></li>
                            <li><p>{languageData.aboutUs[9]}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About