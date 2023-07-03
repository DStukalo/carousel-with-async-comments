import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '../helpers/fetchComments';

export const useComments = (id: number, isVisible: boolean) => {
	const { data: comments } = useQuery(
		[`comments${id}`, id],
		() => fetchComments(id),
		{
			enabled: isVisible,
		}
	);
	return { comments };
};
