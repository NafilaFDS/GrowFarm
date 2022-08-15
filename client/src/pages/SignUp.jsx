import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SettingContext } from '../App';

//API
import { SIGNUP } from '../graphql/mutation';

const SignUp = () => {
    const { languageData } = useContext(SettingContext);
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        address: "",
        userType: 0
    })
    let location = useLocation();
    const navigate = useNavigate();
    const [createUser] = useMutation(SIGNUP);
    useEffect(() => {
        if (!location.state) {
            setUser(u => {
                return { ...u, userType: 2 }
            })
        } else {
            setUser(u => {
                return { ...u, userType: +(location.state.type) }
            })
        }
    }, [])
    const userOnChange = (e) => {
        const { name, value } = e.target
        setUser(data => {
            return { ...data, [name]: value }
        })
    }
    const register = (e) => {
        e.preventDefault();
        createUser({
            variables: {
                name: user.name,
                mobile: user.mobile,
                email: user.email,
                password: user.password,
                address: user.address,
                userType: user.userType
            }
        }).then(({ data }) => {
            console.log(data);
            if (data.createUser.userType) {
                navigate("/login", { state: { type: data.createUser.userType } })
            }
        }).catch((e) => console.log("error", e))
    }
    console.log("location.state.type", location.state.type)
    return (
        <section className="user-registration pb-4">
            {
                user?.userType === 2 &&
                <h4>{languageData.signup.heading.farmer}</h4>
            }
            {
                user?.userType === 3 &&
                <h4>{languageData.signup.heading.buyer}</h4>
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="user-form">
                            <form>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.signup.form[0]}</div>
                                    <input type="text" className="form-control" required name="name" onChange={userOnChange} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.signup.form[1]}</div>
                                    <input type="string" className="form-control" required name="mobile" onChange={userOnChange} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.signup.form[2]}</div>
                                    <input type="text" className="form-control" required name="address" onChange={userOnChange} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.signup.form[3]}</div>
                                    <input type="email" className="form-control" required name="email" onChange={userOnChange} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.signup.form[4]}</div>
                                    <input type="password" className="form-control" required name="password" onChange={userOnChange} />
                                </div>
                                <button type="submit" className="btn btn-success" name="submit" onClick={register}>{languageData.submitBtn}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp