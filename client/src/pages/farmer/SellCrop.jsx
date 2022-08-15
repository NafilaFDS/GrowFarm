import React, { useContext } from 'react'
import { SettingContext } from '../../App';

const SellCrop = () => {
    const { languageData } = useContext(SettingContext);
    return (
        <section className="bottom-background pb-4">
            <h4>{languageData.sell.heading}</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-6">
                        <div className="user-form">
                            <form action="sell-process.php" method="post" name="sell">
                                <div className="mb-3">
                                    <div className="form-label">{languageData.sell.form[0]}</div>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.sell.form[1]}</div>
                                    <input type="number" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-success" name="submit">{languageData.submitBtn}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default SellCrop