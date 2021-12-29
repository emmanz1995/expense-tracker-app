import { useState, useEffect } from 'react';
import UserAPI from '../api/UserAPI';

const useProfile = () => {
    const [profileInfo, setProfileInfo] = useState({});
    useEffect(() => {
        getProfile();
        return () => {
            setProfileInfo({})
        }
    }, [])
    function getProfile() {
        UserAPI.getMe().then((results) => {
            setProfileInfo(results);
        }).catch((error) => console.log(error));
    }
    return { profileInfo }
}

export default useProfile;


