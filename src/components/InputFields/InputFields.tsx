import React, { FormEvent, useEffect, useRef } from "react";
import { ListItem } from "../ListItem/ListItem";

import { Flex } from "../../UI/UI.style";
import { Input, MarkList } from "./InputFields.style";

import type { Address, ListActionType } from "../../interfaces/types";
import { useItemList } from "../../hooks/useItemList";

export function InputFields({
	appState,
	dispatch,
}: {
	appState: Address[];
	dispatch: React.Dispatch<ListActionType>;
}) {
	const inputRef = useRef<HTMLInputElement>(null);

	const { addItem, deleteItem, moveItem } = useItemList(dispatch);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		inputRef.current?.value
			? addItem({ id: `id-${Math.random()}`, address: inputRef.current?.value })
			: alert("пустая строка");

		inputRef.current?.value && (inputRef.current.value = "");
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<Flex direction="column">
			<form onSubmit={handleSubmit}>
				<Input ref={inputRef} />
				<MarkList>
					{appState.map((list: Address) => {
						return (
							<ListItem
								key={list.id}
								item={list}
								deleteItem={deleteItem}
								moveItem={moveItem}
							/>
						);
					})}
				</MarkList>
			</form>
		</Flex>
	);
}
