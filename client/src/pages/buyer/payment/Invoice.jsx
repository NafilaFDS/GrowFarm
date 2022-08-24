import { useMutation, useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SettingContext } from '../../../App';

//API
import { GET_COMMISSION_VALUE } from '../../../graphql/query';
import { MAKE_PAYMENT } from '../../../graphql/mutation';
import { useEffect } from 'react';

const Invoice = () => {
    const [commissionAmount, setCommissionAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [makePayment] = useMutation(MAKE_PAYMENT);
    let location = useLocation();
    const { data, error } = useQuery(GET_COMMISSION_VALUE);
    const { productName, cusName, cusEmail, cusAdd1, cusPhone, advId } = location.state;
    const payNow = () => {
        makePayment({
            variables: {
                totalAmount,
                productName,
                cusName,
                cusEmail,
                cusAdd1,
                cusPhone,
                advId
            }
        }).then(({ data }) => {
            console.log(data);
            if (data.makePayment.url) {
                window.location.replace(data.makePayment.url)
            }
        }).catch(e => {
            console.log(e)
            toast.error("Internal server error!")
        })
    }
    const { languageData } = useContext(SettingContext);
    useEffect(() => {
        if (data) {
            setCommissionAmount(data.getCommissionValue);
            setTotalAmount(parseInt(location.state.totalAmount) + data.getCommissionValue);
        }
        if (error) {
            console.log(error)
        }
    }, [data, error])
    return (
        <div className="bottom-background pb-4 pt-5">
            <div className="pt-5">
                <h3 className='text-center mb-3'>{languageData.invoice.heading}</h3>
                <div className="text-center">
                    <p>{languageData.invoice.list[0]}: {location.state.totalAmount}(tk)</p>
                    <p>{languageData.invoice.list[1]}: {commissionAmount}(tk)</p>
                    <h5>{languageData.invoice.list[2]}: {totalAmount}(tk)</h5>
                    <button className='btn btn-sm btn-success mt-3' onClick={payNow}>{languageData.invoice.btn}</button>
                </div>
            </div>
        </div>
    )
}

export default Invoice