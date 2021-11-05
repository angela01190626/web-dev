import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import profile from "../../../../reducers/profile";
const selectProfile = (state) => state.profile.profile;

const EditProfile = () =>{
    const profile = useSelector(selectProfile);

    let [newProfile, setNewProfile] = useState({...profile});
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        console.log(newProfile)
        dispatch({type: 'edit-profile',profile: newProfile});
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
                    <Link to = "/a7/twitter/profile" onClick={cancelClickHandler}><i className="fas fa-times"/></Link>
                </div>
                <div className="col-9">
                    <h5>Edit Profile</h5>
                </div>
                <div className="col-1">
                    <Link to = "/a7/twitter/profile" onClick={saveClickHandler}
                            className="btn btn-primary wd-save-button">
                        Save
                    </Link>
                </div>
            </div>
            <div style={{"position": "relative",paddingBottom:'320px'}} className="mt-2">
                <img src={profile.bannerPicture} className="wd-banner-image" alt=""/>
                <img src={profile.profilePicture} className="wd-profile-image" alt=""/>
            </div>
            <div>
                <table className="wd-table">
                    <th>
                        <tr>
                        Name
                        </tr>
                    </th>
                    <tbody>
                        <tr>
                            <textarea
                                value={newProfile.name}
                                className="form-control"
                                onChange={(event) => handleChangeValue('name',event.target.value)}
                                style={{
                                  width: "100%", color: "white",
                                  backgroundColor: "black"
                              }}/>
                        </tr>
                    </tbody>
                </table>
                <table className="wd-table">
                    <th>
                        <tr>
                            Bio
                        </tr>
                    </th>
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
                    <th>
                        <tr>
                            Location
                        </tr>
                    </th>
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
                    <th>
                        <tr>
                            Website
                        </tr>
                    </th>
                    <tbody>
                    <tr>
                            <textarea
                                value={newProfile.website}
                                className="form-control"
                                onChange={(event) => handleChangeValue('website',event.target.value)}
                                style={{
                                    width: "100%", color: "white",
                                    backgroundColor: "black"
                                }}/>
                    </tr>
                    </tbody>
                </table>
                <form>
                    <label>
                        Birth date<br/>
                        <input type="date"
                               value={newProfile.dateOfBirth}
                               onChange={(event) => handleChangeValue('dateOfBirth',event.target.value)}
                        />
                    </label>
                </form>
            </div>
        </>
    )
}

export default EditProfile;