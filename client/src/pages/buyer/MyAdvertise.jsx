import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SettingContext } from '../../App';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

//API
import { MY_ADVERTISE } from '../../graphql/query';

const MyAdvertise = () => {
    const { languageData } = useContext(SettingContext);
    const { data, loading, error } = useQuery(MY_ADVERTISE, {
        fetchPolicy: 'network-only'
    });

    const [myAdv, setMyAdv] = useState([])
    useEffect(() => {
        if (data) {
            console.log("data", data);
            setMyAdv(data.myAdvertise)
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])

    return (
        <div className="t-design container mt-5">
            <h3 className='text-center'>{languageData.myAdvertise.heading}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">{languageData.myAdvertise.table[0]}</th>
                        <th scope="col">{languageData.myAdvertise.table[1]}</th>
                        <th scope="col">{languageData.myAdvertise.table[2]}</th>
                        <th scope="col">{languageData.myAdvertise.table[3]}</th>
                        <th scope="col">{languageData.myAdvertise.table[4]}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAdv.length > 0 &&
                        myAdv.map((item) => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td><img src={item.image} alt={item.name} width="150" height="100" /></td>
                                <td>{item.quantity}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link to={`/crop-received/${item.name}/${item._id}`}>
                                        <FaEye />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyAdvertise