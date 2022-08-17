import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { SettingContext } from '../../App';
import AdvApprovRow from '../../components/admin/AdvApprovRow';

//API
import { ADVERTISE_APPROVAL } from '../../graphql/query';

const AdvApproval = () => {
    const { languageData } = useContext(SettingContext);
    const { data, loading, error, refetch } = useQuery(ADVERTISE_APPROVAL);

    const [myAdv, setMyAdv] = useState([])
    useEffect(() => {
        if (data) {
            console.log("data", data);
            setMyAdv(data.advertiseApproval)
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])
    return (
        <div className="t-design container mt-5">
            <h3 className="text-center">{languageData.advertiseApprove.heading}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">{languageData.advertiseApprove.table[0]}</th>
                        <th scope="col">{languageData.advertiseApprove.table[1]}</th>
                        <th scope="col">{languageData.advertiseApprove.table[2]}</th>
                        <th scope="col">{languageData.advertiseApprove.table[3]}</th>
                        <th scope="col">{languageData.advertiseApprove.table[4]}</th>
                        <th scope="col">{languageData.advertiseApprove.table[5]}</th>
                        <th scope="col">{languageData.advertiseApprove.table[6]}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAdv?.length > 0 &&
                        myAdv.map(item => (
                            <AdvApprovRow key={item._id} item={item} refetch={refetch} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdvApproval