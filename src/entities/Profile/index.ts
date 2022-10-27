import { ProfileSchema, Profile } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadOnly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export { ProfileSchema, Profile, profileActions, profileReducer };

export { fetchProfileData, ProfileCard };
export {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm
};
export { updateProfileData };
