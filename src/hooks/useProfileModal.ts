import { useContext } from 'react';
import { ProfileModalContext } from '../contexts/ProfileModalContext';

export const useProfileModal = () => {
	const context = useContext(ProfileModalContext);
	return context;
};
