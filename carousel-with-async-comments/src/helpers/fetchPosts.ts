import { PostType } from '../types/types';
const BASE_URL = import.meta.env.VITE_BASEPOSTS_URL;

export async function fetchPosts(): Promise<PostType[]> {
	const response = await fetch(`${BASE_URL}posts`);
	const jsonData = await response.json();
	return jsonData;
}
