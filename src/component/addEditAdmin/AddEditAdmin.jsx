import React, { useRef, useState } from 'react'
import "./AddEditAdmin.css";
import Nav from "../narbar/Nav";
import Sitebar from "../sitebar/Sitebar";

function AddEditAdmin() {

    const [img, setImg] = useState();
    const myImgRef = useRef();

    return (
        <>
            <div className="container-addedit">
                <div className="top-container">
                    <Nav />
                </div>
                <div className="body-container">

                    <div className="left-body">
                        <Sitebar />
                    </div>


                    <div className="right-body">

                        <div className="user-add-edit">
                            <div className="user-profle" >
                                <input id='fileimg' type="file" onChange={(e) => setImg(e.target.files[0])} ref={myImgRef} />
                                {
                                    img ? <img src={URL.createObjectURL(img)} alt="" onClick={() => myImgRef.current.click()} /> :
                                        <img src='' alt="" onClick={() => myImgRef.current.click()} />
                                }
                                {
                                    img ? "" : <i className="fa-solid fa-cloud-arrow-up" onClick={() => myImgRef.current.click()}></i>
                                }

                            </div>
                            <button id='imgupload-btn'>Upload</button>

                            <div className="user-inputfield">

                                <div className="input-div">
                                    <label htmlFor="uname">Name</label>
                                    <input type="text" id='uname' placeholder='Name' />
                                </div>

                                <div className="input-div">
                                    <label htmlFor="uphone">Phone</label>
                                    <input type="text" id='uphone' placeholder='Phone' />
                                </div>

                                <div className="input-div">
                                    <label htmlFor="uaddress">Address</label>
                                    <textarea type="text" id='uaddress' placeholder='address' />
                                </div>

                                <div className="input-div">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id='password' placeholder='Password' />
                                </div>
                                <button>Update</button>
                            </div>
                        </div>

                        <div className="store-add-edit">
<h3>Edit Store</h3>

     <div className="store-inputfield">

<div className="input-div-store">
    <div className="input-left">
    <label htmlFor="sname">Name</label>
    <input type="text" id='sname' placeholder='Name' />
    </div>

    <div className="input-left">
    <label>Delivery Charges</label>
    <input type="text" placeholder='Delivery Charges' />
    </div>
</div>

<div className="input-div-store">
    <div className="input-left">
    <label>Place</label>
    <input type="text" placeholder='place' />
    </div>

    <div className="input-right">
    <label >District</label>
    <input type="text"  placeholder='District' />
    </div>
</div>

<div className="input-div-store">
    <div className="input-left">
    <label>Pin</label>
    <input type="text" placeholder='Piv code' />
    </div>

    <div className="input-right">
    <label >Category</label>
    <input type="text"  placeholder='Category' />
    </div>
</div>

<div className="input-div-store">
    <div className="input-right">
    <label >Opening Time</label>
    <input type="text"  placeholder='Opening Time' />
    </div>

    <div className="input-right">
    <label >Closing Time</label>
    <input type="text"  placeholder='Closing Time' />
    </div>
</div>

   <div className="textarea-div-store">
    <label >Description</label>
    <textarea type="text"  placeholder='Description' />
    </div>
    <div class="gender-selection">
        <label>
            <input type="radio" name="gender" value="true"/>
            <span class="custom-radio"></span>
        Deliver Item
        </label>
        <label>
            <input type="radio" name="gender" value="false"/>
            <span class="custom-radio"></span>
            Not  Deliver Item
        </label>
    </div>
<button className='submitStore'>Update</button>
</div>


                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default AddEditAdmin



// private Long id;
// private String name;##
// private String description;
// private String place;####
// private String district;##
// private String pin;###
// private String category;###
// private boolean delivory;
// private String delivirycharge;##
// private String opentime;#####
// private String closetime;######