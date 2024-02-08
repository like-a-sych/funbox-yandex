import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { InputFields } from "./InputFields";

const appState = [
	{
		id: "testId1",
		address: "52.684758, 32.738521",
	},
];

const onChange = jest.fn();

describe("InputFields component", () => {
	it("rendered", () => {
		render(<InputFields appState={appState} dispatch={onChange} />);

		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});
});
