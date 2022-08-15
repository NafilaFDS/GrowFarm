import { useMutation } from '@apollo/client';
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import { SettingContext } from '../App';
//API
import { LOGIN } from '../graphql/mutation';

const Login = () => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const { languageData, setUType } = useContext(SettingContext);
    let location = useLocation();
    const navigate = useNavigate();
    const [login] = useMutation(LOGIN, {
        onError: (({ graphQLErrors }) => {
            toast.error(graphQLErrors[0].message)
        })
    });
    if (!location.state) {
        location = {
            state: {
                type: 2
            }
        }
    }

    const submitLogin = (e) => {
        e.preventDefault();
        login({
            variables: {
                mobile,
                password
            }
        }).then(({ data }) => {
            if (data) {
                console.log(data);
                localStorage.setItem("token", data.login.token);
                localStorage.setItem("userType", data.login.me.userType);
                setUType(data.login.me.userType)
                navigate("/my-profile");
            }
        }).catch(e => console.log(e))
    }
    return (
        <section className="bottom-background pb-4">
            {
                location?.state?.type === 1 &&
                <h4>{languageData.login.heading.admin}</h4>
            }
            {
                location?.state?.type === 2 &&
                <h4>{languageData.login.heading.farmer}</h4>
            }
            {
                location?.state?.type === 3 &&
                <h4>{languageData.login.heading.buyer}</h4>
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-6">
                        <div className="user-form">
                            <form>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.login.form[0]}</div>
                                    <input type="email" className="form-control" onChange={(e) => { setMobile(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.login.form[1]}</div>
                                    <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <button type="submit" className="btn btn-success" onClick={submitLogin}>{languageData.submitBtn}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Login