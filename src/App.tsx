import React from "react";
import { Global, css } from "@emotion/react";
import { Container, Flex } from "./UI/UI.style";
import YandexMap from "./components/Map/YandexMap";
import InputFields from "./components/InputFields/InputFields";
import { reducer } from "./reducers/mapReducer";

function App() {
	const [state, dispatch] = React.useReducer(reducer, []);

	return (
		<div className="App">
			<Global
				styles={css`
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
							"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
							"Helvetica Neue", sans-serif;
					}
					body {
						background-color: #ddd;
					}
					button {
						border: none;
						font-family: inherit;
					}
				`}
			/>
			<Container>
				<Flex align="flex-start" justify="center" gap="50px">
					<Flex>
						<InputFields appState={state} dispatch={dispatch} />
					</Flex>
					<Flex align="center">
						<YandexMap />
					</Flex>
				</Flex>
			</Container>
		</div>
	);
}

export default App;
