import { shallow } from 'zustand/shallow';
import { usePostsStore } from '../store/store';

const usePostsFacade = () => {
	const { posts, setPosts, addOnePost } = usePostsStore(
		(state) => ({
			posts: state.posts,
			setPosts: state.setPosts,
			addOnePost: state.addOnePost,
		}),
		shallow
	);

	return {
		posts,
		setPosts,
		addOnePost,
	};
};

export default usePostsFacade;
