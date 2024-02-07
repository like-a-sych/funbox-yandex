import React, { FormEvent, useEffect, useRef, useState } from "react";
import { ListItem } from "../ListItem/ListItem";

import { Flex } from "../../UI/UI.style";
import { Input, MarkList } from "./InputFields.style";

import type { Address, ListActionType } from "../../interfaces/types";
import { useItemList } from "../../hooks/useItemList";

export default function InputFields({
	appState,
	dispatch,
}: {
	appState: Address[];
	dispatch: React.Dispatch<ListActionType>;
}) {
	const [inputValue, setValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const { addItem, deleteItem, moveItem } = useItemList(dispatch);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		inputValue
			? addItem({ id: `id-${Math.random()}`, address: inputValue })
			: alert("пустая строка");
		setValue("");
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<Flex direction="column">
			<form onSubmit={handleSubmit}>
				<Input
					ref={inputRef}
					value={inputValue}
					onChange={() => {
						setValue(inputRef.current?.value ?? "");
					}}
				/>
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
