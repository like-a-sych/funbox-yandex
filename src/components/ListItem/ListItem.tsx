import React from "react";

import { Delete, Item } from "./ListIte.style";

import type { Address, IPayload } from "../../interfaces/types";

interface ListItemsProps {
	item: Address;
	deleteItem: (item: Address) => void;
	moveItem: (item: IPayload) => void;
}

export function ListItem({ item, deleteItem, moveItem }: ListItemsProps) {
	function handleDelete() {
		deleteItem(item);
	}

	function handleStart(e: React.DragEvent<HTMLLIElement>) {
		e.dataTransfer.setData("id", item.id);
		e.dataTransfer.effectAllowed = "move";
	}

	function handleDrop(e: React.DragEvent<HTMLLIElement>) {
		e.preventDefault();
		moveItem({
			id: e.dataTransfer.getData("id"),
			address: item.address,
			idEnd: item.id,
		});
	}

	function handleOver(e: React.DragEvent<HTMLLIElement>) {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
	}

	return (
		<Item
			draggable
			onDragStart={handleStart}
			onDrop={handleDrop}
			onDragOver={handleOver}
		>
			{item.address}
			<Delete onClick={handleDelete} id={item.id} type="button">
				x
			</Delete>
		</Item>
	);
}
