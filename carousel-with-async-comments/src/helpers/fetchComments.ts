const BASE_URL = import.meta.env.VITE_BASECOMMENTS_URL;

export async function fetchComments(id: number) {
	const response = await fetch(`${BASE_URL}posts/${id}/comments`);
	const jsonData = await response.json();
	return jsonData;
}
