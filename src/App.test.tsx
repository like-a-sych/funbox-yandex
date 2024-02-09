import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import { TEST_ID } from "./constants/constants";

// const coordinate = "text";

describe("InputFields component", () => {
	it("rendered", () => {
		render(<App />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("Input test text", async () => {
		render(<App />);
		function addItem(coordinate: string) {
			userEvent.click(input);
			userEvent.type(input, coordinate);
			userEvent.keyboard("[Enter]");
		}
		const input = screen.getByRole("textbox");
		addItem("delete");
		expect(screen.getByText("delete")).toBeInTheDocument();

		userEvent.click(screen.getByTestId(TEST_ID.deleteButton));
		expect(screen.queryByText("delete")).not.toBeInTheDocument();
	});
});
