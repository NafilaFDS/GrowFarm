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
                    {item.response?.length > 0 ?
                        <Link to={`/my-response/${item._id}`}>{languageData.cropAdvertise.table[5]}</Link> :
                        <Link to={`/sell/${item._id}`}>{languageData.cropAdvertise.table[0]}</Link>
                    }
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