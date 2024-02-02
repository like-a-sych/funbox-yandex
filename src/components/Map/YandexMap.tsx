import React from "react";
import { Map, YMaps } from "@pbe/react-yandex-maps";

export default function YandexMap() {
	return (
		<YMaps>
			<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
		</YMaps>
	);
}
