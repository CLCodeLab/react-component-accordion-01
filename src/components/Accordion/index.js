import React, {
	useState,
	useContext,
	createContext,
	useEffect,
	useRef
} from 'react'
import {
	Container,
	Section,
	Title,
	Description,
	Item,
	Header,
	Image,
	Frame,
	Body
} from './styles/AccordionStyles'

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
	return <Container>{children}</Container>
}

Accordion.Section = function AccordionSection({ children, ...restProps }) {
	return <Section {...restProps}>{children}</Section>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Accordion.Description = function AccordionDescription({
	children,
	...restProps
}) {
	return <Description {...restProps}>{children}</Description>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false)
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	)
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext)
	const headerStyle ={
		borderBottomLeftRadius: toggleShow ? '0px' : '5px',
		borderBottomRightRadius: toggleShow ? '0px' : '5px',
	}
	const imageStyle = {
		transform: toggleShow ? 'rotate(45deg)' : 'rotate(0deg)'
	}

	return (
		<Header style={headerStyle} onClick={() => setToggleShow(!toggleShow)} {...restProps}>
			{children}
			<Image style={imageStyle} src='/images/add.png' alt='expand-collapse' />
		</Header>
	)
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext)
	const [menuHeight, setMenuHeight] = useState(0)
	const menuHeightRef = useRef(null)

	useEffect(() => {
		if (menuHeightRef.current.offsetHeight) {
			setMenuHeight(menuHeightRef.current.offsetHeight)
		}
	}, [toggleShow])
	

	const style = {
		height: toggleShow ? menuHeight : '0'
	}

	return (
		<Frame style={style}>
			<Body ref={menuHeightRef} {...restProps}>
				{children}
			</Body>
		</Frame>
	)
}