import { Button, Modal } from 'flowbite-react';
import { ReactNode } from 'react';

type ModalProps = {
	children: ReactNode;
	showTitle: string;
	modalTitle: string;
	openModal: string | undefined;
	setOpenModal: (arg0: string | undefined) => void;
	BTNClose: boolean;
	BTNCloseTitle?: string;
	colorBTNClose?: 'success' | 'gray' | 'failure' | 'warning';
};

export function DefaultModal({
	children,
	showTitle,
	modalTitle,
	openModal,
	setOpenModal,
	BTNClose,
	BTNCloseTitle,
	colorBTNClose,
}: ModalProps) {
	const props = { openModal, setOpenModal };

	return (
		<>
			<Button onClick={() => props.setOpenModal('default')}>{showTitle}</Button>
			<Modal
				show={props.openModal === 'default'}
				onClose={() => props.setOpenModal(undefined)}
			>
				<Modal.Header>{modalTitle}</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				{BTNClose && (
					<Modal.Footer className="flex items-start justify-center">
						<Button
							onClick={() => props.setOpenModal(undefined)}
							color={colorBTNClose}
						>
							{BTNCloseTitle ? BTNCloseTitle : 'Close modal'}
						</Button>
					</Modal.Footer>
				)}
			</Modal>
		</>
	);
}
