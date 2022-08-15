import React, { useContext, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { SettingContext } from '../../App';
import ComplainActionForm from '../../components/admin/ComplainActionForm';

const ComplainList = () => {
    const { languageData } = useContext(SettingContext);
    const [show, setShow] = useState(false)
    return (
        <div className="t-design container mt-5">
            <h1 className="text-center">{languageData.complainList.heading}</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"> {languageData.complainList.table[0]}</th>
                        <th scope="col">{languageData.complainList.table[1]}</th>
                        <th scope="col"> {languageData.complainList.table[2]}</th>
                        <th scope="col">{languageData.complainList.table[3]}</th>
                        <th scope="col">{languageData.complainList.table[4]}</th>
                        <th scope="col">{languageData.complainList.table[5]}</th>
                        <th scope="col">{languageData.complainList.table[6]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>x</td>
                        <td>y</td>
                        <td>big reason</td>
                        <td>Trying to resolve the matter</td>
                        <td>Remarked as fraud buyer</td>
                        <td>
                            <button className='btn btn-sm btn-primary' onClick={() => setShow(true)}>
                                <FaRegEdit />
                            </button>
                        </td>
                        <td>10/10/22</td>
                    </tr>
                </tbody>
            </table>
            <ComplainActionForm show={show} setShow={setShow} />
        </div>
    )
}

export default ComplainList