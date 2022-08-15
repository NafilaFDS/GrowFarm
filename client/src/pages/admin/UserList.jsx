import React, { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import { SettingContext } from '../../App';
import { useQuery, useMutation } from '@apollo/client'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

//API
import { BUYERS_LIST, FARMERS_LIST } from '../../graphql/query';
import { DELETE_USER } from '../../graphql/mutation';

const UserList = () => {
    const { languageData } = useContext(SettingContext);
    const location = useLocation();
    const [user, userList] = useState([])
    const { data, loading, error } = useQuery(location?.pathname === "/farmer-list" ? FARMERS_LIST : BUYERS_LIST);
    const [deleteUser] = useMutation(DELETE_USER, {
        refetchQueries: [
            { query: location?.pathname === "/farmer-list" ? FARMERS_LIST : BUYERS_LIST }
        ]
    });

    useEffect(() => {
        if (data) {
            console.log("data", data);
            const dataType = location?.pathname === "/farmer-list" ? "farmersList" : "buyersList";
            userList(data[dataType])
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])
    const delUser = (id) => {
        deleteUser({
            variables: {
                id: id
            }
        }).then(({ data }) => {
            if (data) {
                toast.success(data.deleteUser.message)
            }
        })
            .catch(e => console.log(e))
    }
    return (
        <div className="t-design container mt-5">
            <h1 className='text-center'>
                {location?.pathname === "/farmer-list" ? languageData.userList.heading.farmer : languageData.userList.heading.buyer}
            </h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"> {languageData.userList.table[0]}</th>
                        <th scope="col"> {languageData.userList.table[1]}</th>
                        <th scope="col"> {languageData.userList.table[2]}</th>
                        <th scope="col"> {languageData.userList.table[3]}</th>
                        <th scope="col"> {languageData.userList.table[4]}</th>
                        <th scope="col"> {languageData.userList.table[5]}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length > 0 &&
                        user.map((item) => (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>
                                    <button
                                        className='btn btn-sm btn-danger'
                                        onClick={() => { delUser(item._id) }}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList