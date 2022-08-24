import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react'
import { SettingContext } from '../../App';
import ReceivedCropRow from '../../components/buyer/ReceivedCropRow';
import { useParams } from 'react-router-dom';

//API
import { MY_ADVERTISE_RESPONSE } from '../../graphql/query';

const CropReceived = () => {
    const { id } = useParams()
    const { languageData } = useContext(SettingContext);
    const { data, loading, error } = useQuery(MY_ADVERTISE_RESPONSE, {
        variables: {
            advId: id
        },
        fetchPolicy: 'network-only'
    });
    const userType = localStorage.getItem("userType");
    const [myAdv, setMyAdv] = useState([])
    useEffect(() => {
        if (data) {
            console.log("data", data);
            setMyAdv(data.sellHistory)
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])

    return (
        <div className="t-design container mt-5">
            {
                myAdv?.length > 0 &&
                <h3 className='text-center'>{languageData.receivedCrop.heading}</h3>
            }
            {
                myAdv?.length > 0 ?
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                {userType === "3" &&
                                    <th scope="col">{languageData.receivedCrop.table[0]}</th>
                                }
                                <th scope="col">{languageData.receivedCrop.table[1]}</th>
                                <th scope="col">{languageData.receivedCrop.table[2]}</th>
                                <th scope="col">{languageData.receivedCrop.table[3]}</th>
                                <th scope="col">{languageData.receivedCrop.table[4]}</th>
                                <th scope="col">{languageData.receivedCrop.table[5]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAdv.map(item => (
                                <ReceivedCropRow key={item._id} item={item} />
                            ))}
                        </tbody>
                    </table> :
                    <h3>No response yet!</h3>
            }
        </div>
    )
}

export default CropReceived