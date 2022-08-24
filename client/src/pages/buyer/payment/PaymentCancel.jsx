import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import logo from "../../../assets/images/grow_farm.png"

const PaymentCancel = () => {
    return (
        <section className="bottom-background pb-4 pt-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-7 col-12 mx-auto">
                        <div className="card bg-warning">
                            <div className="card-body text-center">
                                <div>
                                    <img src={logo} alt="Grow Farm" title="Grow Farm" />
                                </div>

                                <h1>Payment Cancelled!</h1>
                                <div className="stage">
                                    <div className="box bounce-5" />
                                    <FaTimesCircle className="box bounce-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentCancel