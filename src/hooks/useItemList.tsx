import React from "react";

import type { Address, ListActionType, IPayload } from "../interfaces/types";

export function useItemList(dispatch: React.Dispatch<ListActionType>) {
	const addItem = (item: Address) => {
		dispatch({
			type: "add",
			payload: item,
		});
	};

	const deleteItem = (item: Address) => {
		dispatch({
			type: "delete",
			payload: item,
		});
	};

	const moveItem = (item: IPayload) => {
		console.log(item);
		dispatch({
			type: "move",
			payload: item,
		});
	};

	return {
		deleteItem,
		addItem,
		moveItem,
	};
}
