import { useState } from 'react';
import { FaCheck, FaEye } from "react-icons/fa";
import FarmerInformation from '../PartyInformation';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//API
import { MAKE_PAYMENT } from "../../graphql/mutation.js";
import { Toast } from 'react-bootstrap';

const ReceivedCropRow = ({ item }) => {
    const { name } = useParams();
    const [show, setShow] = useState(false);
    const [makePayment] = useMutation(MAKE_PAYMENT);
    const advPayment = () => {
        makePayment({
            variables: {
                totalAmount: item.price,
                productName: name,
                cusName: item.farmer.name,
                cusEmail: item.farmer.email,
                cusAdd1: item.farmer.address,
                cusPhone: item.farmer.mobile,
                advId: item._id
            }
        }).then(({ data }) => {
            console.log(data);
            if (data.makePayment.url) {
                window.location.replace(data.makePayment.url)
            }
        }).catch(e => {
            console.log(e)
            Toast.error("Internal server error!")
        })
    }
    return (
        <>
            <tr>
                <td>
                    <button className='btn btn-success btn-sm' onClick={advPayment}>
                        <FaCheck />
                    </button>
                </td>
                <td>
                    <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}>
                        <FaEye />
                    </button>
                </td>
                <td>{new Date(1660666009777).toLocaleDateString()}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
            </tr>
            <FarmerInformation show={show} setShow={setShow} data={item.farmer} origin="buyer" />
        </>
    )
}

export default ReceivedCropRow