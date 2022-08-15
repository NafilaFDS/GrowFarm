import React, { useContext } from 'react'
import { SettingContext } from '../../App';
import ReceivedCropRow from '../../components/buyer/ReceivedCropRow'

const CropReceived = () => {
    const { languageData } = useContext(SettingContext);
    return (
        <div className="t-design container mt-5">
            <h3 className='text-center'>{languageData.receivedCrop.heading}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">{languageData.receivedCrop.table[0]}</th>
                        <th scope="col">{languageData.receivedCrop.table[1]}</th>
                        <th scope="col">{languageData.receivedCrop.table[2]}</th>
                        <th scope="col">{languageData.receivedCrop.table[3]}</th>
                        <th scope="col">{languageData.receivedCrop.table[4]}</th>
                    </tr>
                </thead>
                <tbody>
                    <ReceivedCropRow />
                </tbody>
            </table>
        </div>
    )
}

export default CropReceived