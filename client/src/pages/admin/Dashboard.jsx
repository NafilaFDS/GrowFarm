import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

//API
import { UPDATE_ADMIN_SETTINGS } from '../../graphql/mutation';
import { GET_ADMIN_SETTINGS } from '../../graphql/query';

const Dashboard = () => {
    const [commissionAmount, setCommissionAmount] = useState(0)
    const [updateAdminSettings] = useMutation(UPDATE_ADMIN_SETTINGS);
    const { data, error } = useQuery(GET_ADMIN_SETTINGS);
    const save = () => {
        updateAdminSettings({
            variables: {
                commissionAmount: +commissionAmount
            }
        }).then(({ data }) => {
            if (data?.updateAdminSettings) {
                console.log(data);
            }
        }).catch(e => {
            console.log(e)
            toast.error("Internal server error!")
        })
    }
    useEffect(() => {
        if (data) {
            setCommissionAmount(data?.getAdminSettings[0]?.commissionAmount)
        }
    }, [data, error])

    return (
        <section className="bottom-background pb-4 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-label">Commission amount</div>
                        <div className="input-group mb-3">
                            <input
                                type="number"
                                value={commissionAmount}
                                onChange={(e) => { setCommissionAmount(e.target.value) }}
                                className="form-control"
                                placeholder="Enter commission amount"
                            />
                            <button
                                className="btn btn-success"
                                onClick={save}
                            >
                                Save(tk)
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard