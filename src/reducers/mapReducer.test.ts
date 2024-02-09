import { Address } from "../interfaces/types";
import { reducer } from "./mapReducer";

const testData:Address[] = [
	{id:'1', address:'1'},
	{id:'2', address:'2'},
	{id:'3', address:'3'},
] 

const testDataFinal:Address[] = [
	{id:'3', address:'3'},
	{id:'1', address:'1'},
	{id:'2', address:'2'},
] 

describe("reducer test", () => {
	it("move item", () => {
		expect(reducer(testData, {type:'move', payload:{...testData[2], idEnd:'1'}})).toStrictEqual(testDataFinal)
	});
	it("move equal item", () => {
		expect(reducer(testData, {type:'move', payload:{...testData[2], idEnd:'3'}})).toStrictEqual(testData)
	});
});