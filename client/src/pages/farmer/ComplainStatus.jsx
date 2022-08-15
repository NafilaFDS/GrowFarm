import { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { SettingContext } from '../../App';
import FarmerInformation from '../../components/PartyInformation';

const ComplainStatus = () => {
    const { languageData } = useContext(SettingContext);
    const [show, setShow] = useState(false);
    return (
        <div className="t-design container mt-5">
            <h3 className="text-center">{languageData.complain.heading}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">{languageData.complain.table[0]}</th>
                        <th scope="col">{languageData.complain.table[1]}</th>
                        <th scope="col">{languageData.complain.table[2]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>No proper response</td>
                        <td>In progress</td>
                        <td>
                            <button className='btn btn-primary btn-sm' onClick={() => setShow(true)}><FaEye /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FarmerInformation show={show} setShow={setShow} />
        </div>
    )
}

export default ComplainStatus