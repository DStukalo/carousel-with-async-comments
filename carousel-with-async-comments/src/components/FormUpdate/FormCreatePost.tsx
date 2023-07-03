import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import usePostsFacade from '../../hooks/usePostsFacade';

type Inputs = {
	title: string;
	text: string;
};
type FormCreateProps = {
	setOpenModal: (arg0: undefined) => void;
};

export function FormCreate({ setOpenModal }: FormCreateProps) {
	const { addOnePost } = usePostsFacade();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		fetch(
			'https://my-json-server.typicode.com/DStukalo/jsonplaceholder-server/posts',
			{
				method: 'POST',
				body: JSON.stringify({
					title: data.title,
					body: data.text,
					userId: 1,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}
		)
			.then((response) => response.json())
			.then((json) => addOnePost(json))
			.then(() => reset())
			.then(() => setOpenModal(undefined))
			.catch(() => console.log(errors));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
			<div className=" h-20">
				<div className="mb-1 block">
					<Label htmlFor="title" value="Title*"></Label>
				</div>
				<TextInput
					id="title"
					placeholder="Please enter your title"
					{...register('title', {
						required: {
							value: true,
							message: 'You have not entered anything',
						},
						minLength: {
							value: 5,
							message: 'You title is too short',
						},
						maxLength: {
							value: 150,
							message: 'You title is too long',
						},
						pattern: {
							value: /^[a-zA-Zа-яА-Я].*$/,
							message: 'The first character must be a letter',
						},
					})}
				/>
				{errors.title && (
					<span className=" text-sm text-red-600">{errors.title.message}</span>
				)}
			</div>
			<div className=" h-32">
				<div className="mb-1 block">
					<Label htmlFor="post" value="Post*" />
				</div>
				<Textarea
					id="post"
					className="h-20"
					placeholder="Please enter your post"
					{...register('text', {
						required: {
							value: true,
							message: 'You have not entered anything',
						},
						minLength: {
							value: 5,
							message: 'You post is too short',
						},
						maxLength: {
							value: 1000,
							message: 'You post is too long',
						},
						pattern: {
							value: /^[a-zA-Zа-яА-Я].*$/,
							message: 'The first character must be a letter',
						},
					})}
				/>
				{errors.text && (
					<span className=" text-sm text-red-600">{errors.text.message}</span>
				)}
			</div>
			<Button type="submit">Send</Button>
		</form>
	);
}
