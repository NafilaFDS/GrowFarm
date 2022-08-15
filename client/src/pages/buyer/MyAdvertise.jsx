import React, { useContext, useState } from 'react';
import training1 from "../../assets/images/training/training-1.jpg";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SettingContext } from '../../App';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

//API
import { MY_ADVERTISE } from '../../graphql/query';

const MyAdvertise = () => {
    const { languageData } = useContext(SettingContext);
    const { data, loading, error } = useQuery(MY_ADVERTISE);
    const [myAdv, setMyAdv] = useState()
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
                    <tr>
                        <td>Carrot</td>
                        <td><img src={training1} alt="training1" width="150" height="100" /></td>
                        <td>50kg</td>
                        <td>Accepted</td>
                        <td><Link to={`/crop-received/${2}`}><FaEye /></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyAdvertise