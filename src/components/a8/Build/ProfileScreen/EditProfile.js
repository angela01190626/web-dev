import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "../../../../services/profileService";

//const selectProfile = (state) => state.profile.profile;

const EditProfile = ({profile}) =>{

    const [newProfile, setNewProfile] = useState({...profile});
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        console.log(profile)
        // console.log(newProfile)
        editProfile(dispatch,newProfile);
    };
    const cancelClickHandler = () => {
        setNewProfile({...profile})
    };
    const handleChangeValue = (key,value)=>{
        setNewProfile({
            ...newProfile,
            [key]:value
        })
    }
    return(
        <>
            <div className="row pt-2">
                <div className="col-1">
                    <Link to = "/a8/twitter/profile" onClick={cancelClickHandler}><i className="fas fa-times wd-icon-color"/></Link>
                </div>
                <div className="col-9">
                    <h5>Edit Profile</h5>
                </div>
                <div className="col-1">
                    <Link to = "/a8/twitter/profile" onClick={saveClickHandler}
                          className="btn btn-primary wd-save-button">
                        Save
                    </Link>
                </div>
            </div>
            <div style={{"position": "relative",paddingBottom:'320px'}} className="mt-2">
                <img src={profile.bannerPicture} className="wd-banner-image" alt=""/>
                <a href="#"><i className="fas fa-camera wd-banner-upload-pos"/></a>
                <a href="#"><i className="fas fa-times wd-banner-cancel-pos"/></a>
                <img src={profile.profilePicture} className="wd-profile-image" alt=""/>
                <a href="#"><i className="fas fa-camera wd-avatar-pos"/></a>
            </div>
            <div className="p-2">
                <table className="wd-table">
                    <thead>
                        <tr>
                            <th style={{
                                paddingLeft: "15px"}}>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <textarea
                                    value={newProfile.name}
                                    className="form-control"
                                    onChange={(event) => handleChangeValue('name',event.target.value)}
                                    style={{
                                        width: "100%", color: "white",
                                        backgroundColor: "black"
                                    }}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="wd-table">
                    <thead>
                    <tr>
                        <th style={{
                            paddingLeft: "15px"}}>
                                Bio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <textarea
                                value={newProfile.bio}
                                className="form-control"
                                onChange={(event) => handleChangeValue('bio',event.target.value)}
                                style={{
                                    width: "100%", color: "white",
                                    backgroundColor: "black"
                                }}/>
                    </tr>
                    </tbody>
                </table>
                <table className="wd-table">
                    <thead>
                    <tr>
                        <th style={{
                            paddingLeft: "15px"}}>
                            Location
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <textarea
                                value={newProfile.location}
                                className="form-control"
                                onChange={(event) => handleChangeValue('location',event.target.value)}
                                style={{
                                    width: "100%", color: "white",
                                    backgroundColor: "black"
                                }}/>
                    </tr>
                    </tbody>
                </table>
                <table className="wd-table">
                    <thead>
                    <tr>
                        <th style={{
                            paddingLeft: "15px"}}>
                            Website
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <textarea
                                value={newProfile.website}
                                className="form-control"
                                onChange={(event) => handleChangeValue('website',event.target.value)}
                                style={{
                                    width: "100%", color: "white",
                                    backgroundColor: "black"
                                }}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="wd-table">
                    <thead>
                    <tr>
                        <th style={{
                            paddingLeft: "15px"}}>
                            Birth date
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <input className="wd-input-date"
                               type="date"
                               value={newProfile.dateOfBirth}
                               onChange={(event) => handleChangeValue('dateOfBirth',event.target.value)}
                        />
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EditProfile;