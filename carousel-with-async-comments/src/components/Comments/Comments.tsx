import { ReactNode } from 'react';
import { Accordion } from 'flowbite-react';
import { CommentType } from '../../types/types';

type DefaultCommentsProps = {
	data: CommentType[];
};

export function DefaultComments({ data }: DefaultCommentsProps) {
	return (
		<div className="max-w-md h-[340px] overflow-auto">
			{data && (
				<Accordion collapseAll className="h-72 border-none">
					<Accordion.Panel className="text-sm p-2">
						<Accordion.Title className=" text-sm">Comments</Accordion.Title>
						<Accordion.Content>
							{data.map((el): ReactNode => {
								return (
									<div
										className="mb-2 text-gray-500 dark:text-gray-400"
										key={el.id}
									>
										<p className=" text-sm text-ellipsis overflow-hidden whitespace-nowrap first-letter:uppercase">
											{el.body}
										</p>
										<p className=" text-xs overflow-hidden whitespace-nowrap">
											Author: {el.name}
										</p>
									</div>
								);
							})}
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			)}
		</div>
	);
}
