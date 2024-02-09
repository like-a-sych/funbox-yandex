import { Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import { Address } from "../../interfaces/types";

export function YandexMap({ appState }: { appState: Address[] }) {
	const parsedArray: number[][] = appState.map((item) => {
		const coordinates = item.address.split(",");
		return coordinates.map((coordinate: string) => parseFloat(coordinate));
	});

	// const coordinate = [
	// 	[55.684758, 37.738521],
	// 	[55.684758, 35.738521],
	// 	[55.684758, 34.738521],
	// 	[52.684758, 32.738521],
	// ];

	return (
		<Map
			defaultState={{
				center: [55.751574, 37.573856],
				zoom: 5,
			}}
		>
			{parsedArray.map((element) => (
				<Placemark key={`id=${Math.random()}`} geometry={element} />
			))}
			<Polyline
				geometry={parsedArray}
				// options={{
				// 	balloonCloseButton: false,
				// 	strokeColor: "#000",
				// 	strokeWidth: 4,
				// 	strokeOpacity: 0.5,
				// }}
			/>
		</Map>
	);
}
