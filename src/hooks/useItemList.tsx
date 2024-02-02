import React from "react";

import type { Address, ListActionType, Order } from "../interfaces/types";

export function useItemList() {
	const [state, dispatch] = React.useReducer(reducer, []);

	function reducer(state: Order[], action: ListActionType) {
		const { type, payload } = action;
		switch (type) {
			case "add":
				return [...state, { ...payload, order: state.length + 1 }];
			case "delete":
				return state.filter((item) => item.id !== payload.id);
			default:
				return state;
		}
	}

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

	return { deleteItem, addItem, state };
}
