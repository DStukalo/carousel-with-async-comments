import { PostType } from '../types/types';

export function isEmptyObject(obj: PostType | undefined) {
	if (obj === undefined) return true;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}
