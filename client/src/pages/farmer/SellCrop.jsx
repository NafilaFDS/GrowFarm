import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react'
import { SettingContext } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';

//API
import { CREATE_SALE } from '../../graphql/mutation';
import { toast } from 'react-toastify';

const SellCrop = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { languageData } = useContext(SettingContext);
    const [createSale] = useMutation(CREATE_SALE);
    const [sale, setSale] = useState({
        quantity: 0,
        price: 0
    })
    const onChangeSale = (e) => {
        let { name, value } = e.target;
        setSale(val => {
            return { ...val, [name]: value }
        })
    }
    const onSubmitSale = (e) => {
        e.preventDefault();
        createSale({
            variables: {
                advId: id,
                quantity: +sale.quantity,
                price: +sale.price,
            }
        }).then(({ data }) => {
            console.log(data);
            if (data?.createSale?._id) {
                toast.success("Response sent successfully!");
                navigate(`/my-response/${id}`)
            }
        }).catch(e => {
            console.log(e)
            toast.error("Internal Server Error!")
        })
    }
    return (
        <section className="bottom-background pb-4">
            <h4>{languageData.sell.heading}</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-6">
                        <div className="user-form">
                            <form>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.sell.form[0]}</div>
                                    <input type="number" name="quantity" className="form-control" onChange={onChangeSale} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">{languageData.sell.form[1]}</div>
                                    <input type="number" name="price" className="form-control" onChange={onChangeSale} />
                                </div>
                                <button type="submit" className="btn btn-success" onClick={onSubmitSale}>{languageData.submitBtn}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
            </div>
        </section >
    )
}

export default SellCrop