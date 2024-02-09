import { Address, ListActionType } from "../interfaces/types";


const initialState:Address[] = [];

function reducer(state: Address[], action: ListActionType) {
	const { type, payload } = action;
	switch (type) {
		case "add":
			return [...state, payload];
		case "delete":
			return state.filter((item) => item.id !== payload.id);
		case "move":
			if (payload.id === payload.idEnd) {
				return state;
			}
			const dragElement = state.find((element) => element.id === payload.id);
			const indexEndElement = state.reduce((index, element, currentIndex) => {
				if (element.id === payload.idEnd) {
					return currentIndex;
				}
				return index;
			}, -1);
			if (dragElement) {
				const sortedArr = state.reduce(
					(arr: Address[], element, currentIdex) => {
						// if (currentIdex + 1 === indexEndElement) {
						// 	return [...arr, element, dragElement];
						// } 
						if (currentIdex === indexEndElement ) {
							return [...arr, dragElement, element];
						} 
						if (element.id === payload.id) {
							return arr;
						}
						return [...arr, element];
					},
					[]
				);
				return sortedArr;
			}
			return state;
		default:
			return state;
	}
}

export {reducer, initialState}