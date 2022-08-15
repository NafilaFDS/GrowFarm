import { useState } from 'react';
import { FaCheck, FaEye } from "react-icons/fa";
import FarmerInformation from '../PartyInformation';

const ReceivedCropRow = ({ crop }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <tr>
                <td>
                    <button className='btn btn-success btn-sm'>
                        <FaCheck />
                    </button>
                </td>
                <td>
                    <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}>
                        <FaEye />
                    </button>
                </td>
                <td>Tomato</td>
                <td>50</td>
                <td>58858</td>
            </tr>
            <FarmerInformation show={show} setShow={setShow} />
        </>
    )
}

export default ReceivedCropRow