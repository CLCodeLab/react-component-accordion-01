import styled from 'styled-components/macro'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	color: #1d1d1f;
`
export const Section = styled.section`
	padding: 0 24px;
`
export const Title = styled.h1`
	width: 100%;
	text-align: center;
	font-size: 40px;
	line-height: 1.1;
	margin-top: 30px;
	margin-bottom: 20px;
	@media (max-width: 600px) {
		font-size: 35px;
	}
`

export const Description = styled.p`
	text-align: left;
	font-size: 16px;
	margin-bottom: 24px;
`

export const Item = styled.div`
	width: 100%;
	margin-bottom: 10px;
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2px;
	padding: 0.5em 1.2em;
	border-radius: 5px;
	font-size: 26px;
	background-color: rgba(0, 0, 0, 0.15);
	user-select: none;
	z-index: 1;
	cursor: pointer;

	@media (max-width: 600px) {
		font-size: 16px;
	}
`

export const Image = styled.img`
	transition: all 500ms ease;
	width: 24px;
	@media (max-width: 600px) {
		width: 16px;
	}
`

export const Frame = styled.div`
	display: flex;
	align-items: flex-end;
	overflow: auto;
	transition: all 500ms ease;
`

export const Body = styled.div`
	padding: 1em 2.2em;
	font-size: 20px;
	text-align: left;
	white-space: pre-wrap;
	background-color: rgba(0, 0, 0, 0.1);
	user-select: none;
	overflow: hidden;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`
