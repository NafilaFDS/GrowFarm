import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SettingContext } from '../../App';

//API
import { MY_RESPONSE } from '../../graphql/query';

const MyResponse = () => {
    const { languageData } = useContext(SettingContext);
    const { id } = useParams();
    const { data, loading, error } = useQuery(MY_RESPONSE, {
        variables: {
            advId: id
        },
        fetchPolicy: 'network-only'
    });
    const [myAdv, setMyAdv] = useState([])
    useEffect(() => {
        if (data) {
            console.log("data", data);
            setMyAdv(data.myResponse)
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])
    return (
        <div className="t-design container mt-5">
            <h3 className="text-center">{languageData.myResponse.heading}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">{languageData.myResponse.table[0]}</th>
                        <th scope="col">{languageData.myResponse.table[1]}</th>
                        <th scope="col">{languageData.myResponse.table[2]}</th>
                        <th scope="col">{languageData.myResponse.table[3]}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAdv?.length > 0 &&
                        myAdv.map(item => (
                            <tr key={item?._id}>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{new Date(parseInt(item.createdAt)).toLocaleDateString()}</td>
                                <td>{item.paymentStatus}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyResponse