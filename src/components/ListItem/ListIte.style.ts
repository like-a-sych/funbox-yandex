import styled from "@emotion/styled";

const Item = styled.li`
	padding: 3px 10px;
	margin-top: 5px;
	font-size:14px;
	border:1px solid yellow;
	background-color: #f1f125;
	position:relative;
	cursor:grab;
`

const Delete = styled.button`
	position:absolute;
	right:0;
	top:0;
	bottom:0;
	max-width:30px;
	width:100%;
	height: 100%;
	cursor:pointer;
	line-height:1;
`

export {Item, Delete}