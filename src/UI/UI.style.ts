import styled from "@emotion/styled";

import { IFlexProps } from "./interfaces";


const Container = styled.div`
	margin:0 auto;
	padding: 0 15px;
	height:100vh;
	display:flex;
	align-items:center;
	justify-content:center;
	width:100%;

	@media(min-width:1230px) {
		max-width:1200px;
	}
	@media(max-width:1230px) {
		max-width:100%;
	}
`

const Flex = styled.div<IFlexProps>`
	display:flex;
	align-items: ${props => props.align || 'stretch'};
	justify-content:  ${props => props.justify || 'flex-start'};
	flex-direction:  ${props => props.direction || 'row'};
	gap:  ${props => props.gap || undefined};
`

export {Container, Flex}