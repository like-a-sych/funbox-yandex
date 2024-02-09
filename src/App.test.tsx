import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import { TEST_ID } from "./constants/constants";

const coordinate = "text";

describe("InputFields component", () => {
	it("rendered", () => {
		render(<App />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("Input test text", () => {
		render(<App />);

		const input = screen.getByRole("textbox");
		userEvent.click(input);
		userEvent.type(input, coordinate);
		userEvent.keyboard("[Enter]");
		expect(screen.getByText(coordinate)).toBeInTheDocument();

		userEvent.click(screen.getByTestId(TEST_ID.deleteButton));
		expect(screen.queryByText(coordinate)).not.toBeInTheDocument();
	});
});
