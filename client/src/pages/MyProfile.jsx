import React, { useContext, useEffect, useState } from 'react';
import { SettingContext } from '../App';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

//API
import { MY_PROFILE } from '../graphql/query';
import { EDIT_USER } from '../graphql/mutation';

const MyProfile = () => {
    const [profile, setProfile] = useState({})
    const { languageData } = useContext(SettingContext);
    const { data, loading, error } = useQuery(MY_PROFILE);
    const [editUser] = useMutation(EDIT_USER);

    useEffect(() => {
        if (data) {
            console.log("data", data);
            setProfile(data.myProfile)
        }
        if (error) {
            console.log(error);
        }
    }, [data, loading, error])
    const profileChange = (e) => {
        let { name, value } = e.target;
        setProfile(val => {
            return { ...val, [name]: value }
        })
    }
    const updateUser = (e) => {
        e.preventDefault();
        editUser({
            variables: {
                name: profile.name,
                mobile: profile.mobile,
                email: profile.email,
                address: profile.address
            }
        }).then(({ data }) => {
            if (data) {
                setProfile(data.editUser);
                console.log("data.editUser", data.editUser);
                toast.success("Profile editted successfully!")
            }
        }).catch(e => console.log(e))
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="user-form">
                        <h1 className='text-center'>{languageData.myProfile.heading}</h1>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="form-label">{languageData.myProfile.form[0]}</div>
                                        <input type="text" value={profile.name} className="form-control" name="name" onChange={profileChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="form-label">{languageData.myProfile.form[1]}</div>
                                        <input type="text" value={profile.mobile} className="form-control" onChange={profileChange} name="mobile" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="form-label">{languageData.myProfile.form[2]}</div>
                                        <input type="email" value={profile.email} className="form-control" onChange={profileChange} name="email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="form-label">{languageData.myProfile.form[3]}</div>
                                        <input type="text" value={profile.address} className="form-control" onChange={profileChange} name="address" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success" onClick={updateUser}>{languageData.submitBtn}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile