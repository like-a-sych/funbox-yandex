interface Address {
	id:string;
	address: string;
};

interface Order extends Address {
	order: number
}

type ListReducerType = "add" | "delete" | "move";

interface ListActionType {
	type: ListReducerType;
	payload: Address;
}
export type {Address, ListReducerType, ListActionType, Order}