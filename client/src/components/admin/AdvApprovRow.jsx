import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { FaCheck, FaEye, FaTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import FarmerInformation from '../PartyInformation';

//API
import { UPDATE_APPROVE_ADVERTISE } from '../../graphql/mutation';
import { Link } from 'react-router-dom';

const AdvApprovRow = ({ item, refetch }) => {
    const [updateAdvStatus] = useMutation(UPDATE_APPROVE_ADVERTISE);
    const [show, setShow] = useState(false);
    const handleAction = (val) => {
        updateAdvStatus({
            variables: {
                id: item._id,
                status: val
            }
        }).then(({ data }) => {
            if (data) {
                toast.success(data.updateAdvStatus.message);
                refetch();
            }
        }).catch(e => {
            console.log("upload error", e)
        })
    }
    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td><img src={item.image} alt={item.name} width="150" height="100" /></td>
                <td>{item.quantity}</td>
                <td>
                    <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}>
                        <FaEye />
                    </button>
                </td>
                <td>{item.status} </td>
                <td>
                    <div className="d-flex justify-content-around">
                        <button className='btn btn-success btn-sm' onClick={() => { handleAction("Approved") }}>
                            <FaCheck />
                        </button>
                        <button className='btn btn-danger btn-sm' onClick={() => { handleAction("Rejected") }}>
                            <FaTrashAlt />
                        </button>
                    </div>
                </td>
                <td>
                    {
                        item.response?.length > 0 &&
                        <Link to={`/advertise-response/${item.name}/${item._id}`} className='btn btn-success btn-sm'>
                            <FaCheck />
                        </Link>
                    }
                </td>
            </tr>

            <FarmerInformation
                show={show}
                setShow={setShow}
                data={item.buyer}
                origin={"admin"}
            />
        </>
    )
}

export default AdvApprovRow