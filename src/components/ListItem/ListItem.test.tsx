import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ListItem } from "./ListItem";

const item = {
	id: "testId1",
	address: "52.684758, 32.738521",
};
const deleteItem = jest.fn();
const moveItem = jest.fn();

describe("ListItem component", () => {
	it("ListItem renders", () => {
		render(
			<ListItem item={item} deleteItem={deleteItem} moveItem={moveItem} />
		);

		expect(screen.getByRole("listitem")).toBeInTheDocument();
		expect(screen.getByText("52.684758, 32.738521")).toBeInTheDocument();
	});

	//желтый цвет
	//нажатие на кнопку delete
});
