import { useQuery } from '@tanstack/react-query';
import usePostsFacade from './usePostsFacade';
import { fetchPosts } from '../helpers/fetchPosts';

export const usePosts = () => {
	const { posts, setPosts } = usePostsFacade();
	const { isLoading, isError } = useQuery(['posts'], fetchPosts, {
		refetchOnWindowFocus: false,
		onSuccess: (data) => setPosts(data),
	});
	return { posts, isLoading, isError };
};
