import { create } from 'zustand';
import { PostType } from '../types/types';

interface PostsState {
	posts: PostType[];
	setPosts: (data: PostType[]) => void;
	addOnePost: (data: PostType) => void;
}

export const usePostsStore = create<PostsState>((set, get) => ({
	posts: [],

	setPosts: (data: PostType[]) => {
		set({ posts: data });
	},

	addOnePost: (data: PostType) => {
		const prevPosts = get().posts;
		set({ posts: [...prevPosts, data] });
	},
}));
