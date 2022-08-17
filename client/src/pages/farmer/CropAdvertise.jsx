import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { SettingContext } from '../../App';

//API
import { CROP_ADVERTISE } from '../../graphql/query';
import CropAdvRow from './CropAdvRow';

const CropAdvertise = () => {
    const { languageData } = useContext(SettingContext);
    const { data, loading, error, refetch } = useQuery(CROP_ADVERTISE);

    const [myAdv, setMyAdv] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("data", data);
            setMyAdv(data.cropAdvertise)
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])
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
                    {
                        myAdv?.length > 0 &&
                        myAdv.map(item => (
                            <CropAdvRow key={item._id} item={item} refetch={refetch} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CropAdvertise