import React, { FormEvent, useEffect, useRef, useState } from "react";
import { ListItem } from "../ListItem/ListItem";

import { Flex } from "../../UI/UI.style";
import { Input, MarkList } from "./InputFields.style";

import type { Address } from "../../interfaces/types";
import { useItemList } from "../../hooks/useItemList";

export default function InputFields() {
	const [inputValue, setValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const { state, addItem, deleteItem } = useItemList();

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
					{state.map((list: Address) => {
						return (
							<ListItem
								key={list.id}
								id={list.id}
								address={list.address}
								deleteItem={deleteItem}
							/>
						);
					})}
				</MarkList>
			</form>
		</Flex>
	);
}
