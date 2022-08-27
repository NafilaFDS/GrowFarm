import React, { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { SettingContext } from '../../App';
import FarmerInformation from '../PartyInformation';

const CropAdvRow = ({ item }) => {
    const [show, setShow] = useState(false);
    const { languageData } = useContext(SettingContext);
    return (
        <>
            <tr>
                <td>
                    <div className="d-flex justify-content-center">
                        <Link className='me-2 btn btn-success btn-sm' to={`/my-response/${item._id}`}>{languageData.cropAdvertise.table[5]}</Link>
                        <Link className='btn btn-sm btn-warning' to={`/sell/${item._id}`}>{languageData.cropAdvertise.table[0]}</Link>
                    </div>
                </td>
                <td>{item.name}</td>
                <td><img src={item.image} alt={item.name} width="150" height="100" /></td>
                <td>{item.quantity}</td>
                <td>
                    <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}>
                        <FaEye />
                    </button>
                </td>
            </tr>
            <FarmerInformation show={show} setShow={setShow} data={item.buyer} origin="farmer" />
        </>
    )
}

export default CropAdvRow