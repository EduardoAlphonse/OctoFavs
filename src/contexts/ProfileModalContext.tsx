import React, {
	useState,
	createContext,
	useRef,
	ReactNode,
	RefObject,
} from 'react';
import { Modalize } from 'react-native-modalize';
import { IHandles } from 'react-native-modalize/lib/options';

type ProfileModalContextData = {
	username: string;
	isModalOpen: boolean;
	modalRef: RefObject<IHandles>;
	openModal: () => void;
	closeModal: () => void;
	handleSetUsername: (username: string) => void;
};

export const ProfileModalContext = createContext({} as ProfileModalContextData);

type ProfileModalContextProviderProps = {
	children: ReactNode;
};

export const ProfileModalContextProvider = ({
	children,
}: ProfileModalContextProviderProps) => {
	const [username, setUsername] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalRef = useRef<Modalize>(null);

	const openModal = () => modalRef.current?.open();

	const closeModal = () => modalRef.current?.close();

	const handleSetUsername = (user: string) => {
		setUsername(user);
	};

	return (
		<ProfileModalContext.Provider
			value={{
				username,
				isModalOpen,
				modalRef,
				openModal,
				closeModal,
				handleSetUsername,
			}}
		>
			{children}
		</ProfileModalContext.Provider>
	);
};
