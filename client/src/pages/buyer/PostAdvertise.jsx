import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { SettingContext } from '../../App';

//API
import { POST_ADVERTISE, UPLOAD_FILE } from "../../graphql/mutation";

const PostAdvertise = () => {
    const { languageData } = useContext(SettingContext);
    const [image, setImage] = useState();
    const [adv, setAdv] = useState({
        name: "",
        location: "",
        quantity: 0
    });
    const navigate = useNavigate();

    const [postAdvertise] = useMutation(POST_ADVERTISE);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const fileUp = (e) => {
        const file = e.target.files[0];
        if (!file) return
        uploadFile({
            variables: {
                file
            }
        }).then(({ data }) => {
            if (data) {
                setImage(data.uploadFile.url)
            }
        }).catch(e => {
            console.log("upload error", e)
        })
    }
    const postAdvertiseSubmit = (e) => {
        e.preventDefault();
        postAdvertise({
            variables: {
                name: adv.name,
                image: image,
                location: adv.location,
                quantity: +adv.quantity
            }
        }).then(({ data }) => {
            if (data) {
                // console.log(data)
                toast.info("Waiting for admin approval!");
                navigate("/my-advertise");
            }

        }).catch((err) => {
            console.log(err);
            toast.error("Internal server error!");
        })
    }
    const changeAdv = (e) => {
        const { name, value } = e.target;
        setAdv(val => {
            return { ...val, [name]: value }
        })
    }
    return (
        <section className="user-registration pb-4">
            <h4>{languageData.postAdvertise.heading}</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-6">
                        <div className="user-form">
                            <form onSubmit={postAdvertiseSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">{languageData.postAdvertise.form[0]}</label>
                                    <input type="text" value={adv.name} className="form-control" onChange={changeAdv} name="name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">{languageData.postAdvertise.form[1]}</label>
                                    <input type="file" className="form-control" name="image" onChange={fileUp} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">{languageData.postAdvertise.form[2]}</label>
                                    <input type="text" value={adv.location} className="form-control" onChange={changeAdv} name="location" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">{languageData.postAdvertise.form[3]}</label>
                                    <input type="number" value={adv.quantity} className="form-control" onChange={changeAdv} name="quantity" />
                                </div>
                                <button type="submit" className="btn btn-success">{languageData.submitBtn}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default PostAdvertise