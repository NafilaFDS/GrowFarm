import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SettingContext } from '../../App';
import training1 from "../../assets/images/training/training-1.jpg"
import FarmerInformation from '../../components/PartyInformation';

const CropAdvertise = () => {
    const [show, setShow] = useState(false);
    const { languageData } = useContext(SettingContext);
    return (
        <div className="t-design container mt-5">
            <h3 className="text-center">{languageData.cropAdvertise.heading}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">{languageData.cropAdvertise.table[0]}</th>
                        <th scope="col">{languageData.cropAdvertise.table[1]}</th>
                        <th scope="col">{languageData.cropAdvertise.table[2]}</th>
                        <th scope="col">{languageData.cropAdvertise.table[3]}</th>
                        <th scope="col">{languageData.cropAdvertise.table[4]}</th>
                        <th scope="col">{languageData.cropAdvertise.table[5]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="/sell/5">{languageData.cropAdvertise.table[0]}</Link></td>
                        <td>Carrot</td>
                        <td><img src={training1} alt="training1" width="150" height="100" /></td>
                        <td>50kg</td>
                        <td> <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}><FaEye /></button></td>
                        <td>Sold</td>
                    </tr>
                </tbody>
            </table>
            <FarmerInformation show={show} setShow={setShow} />
        </div>
    )
}

export default CropAdvertise