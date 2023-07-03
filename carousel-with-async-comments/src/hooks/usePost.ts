import { useQuery } from '@tanstack/react-query';
import usePostsFacade from './usePostsFacade';
import { isEmptyObject } from '../helpers/isEmptyObject';
import { fetchPost } from '../helpers/fetchPost';

export const usePost = (id: number) => {
	const { data, isLoading } = useQuery([`post${id}`], () => fetchPost(id), {});
	const { posts } = usePostsFacade();
	const postZus = posts.filter((el) => el.id === id)[0];

	const post = isEmptyObject(data) ? postZus : data;

	return { post, isLoading };
};
