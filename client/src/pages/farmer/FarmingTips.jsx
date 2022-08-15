import React, { useContext } from 'react'
import { SettingContext } from '../../App';

const FarmingTips = () => {
    const { languageData } = useContext(SettingContext);
    return (
        <section className="farming-tips">
            <div className="container">
                <h1>{languageData.farmingTips.heading}</h1>
                <p>{languageData.farmingTips.description}</p>
                <div className="row">
                    {languageData.farmingTips.tips.map((item) => (
                        <div className="col-md-4 mb-3" key={item.title}>
                            <div className="f-tips-item">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FarmingTips