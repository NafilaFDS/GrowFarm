import React from 'react'

const CreateComplain = () => {
    return (
        <section className="user-registration pb-4 mt-2">
            <h4>Complain</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3"></div>
                    <div className="col-md-6 col-lg-6">
                        <div className="user-form">
                            <form action="complain-process.php" method="post" name="post_complain">
                                <div className="mb-3">
                                    <div className="form-label"></div>
                                    <input type="number" className="form-control" id="exampleInputPassword1" name="f_id" />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label"></div>
                                    <textarea type="text" className="form-control" id="exampleInputPassword1" name="complain_text" rows="4" cols="50" placeholder="<?php echo $post_complain[$language]['3']?>:"></textarea>
                                </div>
                                <button type="submit" className="btn btn-success" name="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default CreateComplain