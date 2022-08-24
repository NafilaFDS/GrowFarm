import { useState } from 'react';
import { FaCheck, FaEye } from "react-icons/fa";
import FarmerInformation from '../PartyInformation';
import { useNavigate, useParams } from 'react-router-dom';

const ReceivedCropRow = ({ item }) => {
    const { name } = useParams();
    const [show, setShow] = useState(false);
    const userType = localStorage.getItem("userType");
    const navigate = useNavigate()
    const advPayment = () => {
        navigate("/invoice",
            {
                state: {
                    totalAmount: item.price,
                    productName: name,
                    cusName: item.farmer.name,
                    cusEmail: item.farmer.email,
                    cusAdd1: item.farmer.address,
                    cusPhone: item.farmer.mobile,
                    advId: item._id
                }
            });
    }
    return (
        <>
            <tr>
                {userType === "3" &&
                    <td>
                        <button
                            className='btn btn-success btn-sm'
                            onClick={advPayment}
                            disabled={item.paymentStatus === "Paid" ? true : false}
                        >
                            <FaCheck />
                        </button>
                    </td>
                }
                <td>
                    <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}>
                        <FaEye />
                    </button>
                </td>
                <td>{new Date(parseInt(item.createdAt)).toLocaleDateString()}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.paymentStatus}</td>
            </tr>
            <FarmerInformation show={show} setShow={setShow} data={item.farmer} origin="buyer" />
        </>
    )
}

export default ReceivedCropRow