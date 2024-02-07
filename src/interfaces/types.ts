interface Address {
	id:string;
	address: string;
};

interface IPayload extends Address {
	idEnd?:string;
}

type ListReducerType = "add" | "delete" | "move" ;

interface ListActionType {
	type: ListReducerType;
	payload: IPayload;
}
export type {Address, ListReducerType, ListActionType, IPayload}