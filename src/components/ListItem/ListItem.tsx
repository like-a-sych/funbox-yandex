import React from "react";

import { Delete, Item } from "./ListIte.style";

import type { Address } from "../../interfaces/types";

interface ListItemsProps {
	address: string;
	id: string;
	deleteItem: (item: Address) => void;
}

export function ListItem({ address, id, deleteItem }: ListItemsProps) {
	function handleDelete() {
		deleteItem({ id, address });
	}

	return (
		<Item draggable>
			{address}
			<Delete onClick={handleDelete} id={id} type="button">
				x
			</Delete>
		</Item>
	);
}
