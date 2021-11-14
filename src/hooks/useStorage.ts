import { useContext } from 'react';
import { StorageContext } from '../contexts/StorageContext';

export const useStorage = () => {
	const context = useContext(StorageContext);
	return context;
};
