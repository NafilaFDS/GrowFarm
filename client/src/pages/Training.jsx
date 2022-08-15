import { useContext } from "react";
import { SettingContext } from "../App";

const Training = () => {
    const { languageData } = useContext(SettingContext);
    return (
        <div className="training">
            <div className="container pt-5">
                <div className="training-text">
                    <h1 className="text-center">{languageData.training.heading}</h1>
                    <p>{languageData.training.description}</p>
                </div>
                <div className="row">
                    {languageData.training.technologies.map((item) => (
                        <div className="col-md-6" key={item.title}>
                            <div className="training-content-left shadow bg-white">
                                <img src={item.img} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Training