import { useState } from 'react';
import { FormCreate } from '../FormUpdate/FormCreatePost';
import { DefaultModal } from '../Modal/Modal';

export const AddPost = () => {
	const [openModal, setOpenModal] = useState<string | undefined>();
	return (
		<DefaultModal
			children={<FormCreate setOpenModal={setOpenModal} />}
			showTitle="Add post"
			modalTitle="Create new post"
			openModal={openModal}
			setOpenModal={setOpenModal}
			BTNClose={false}
		/>
	);
};
