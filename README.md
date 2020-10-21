# react-component-jumbotron-01

Demonstrates an **Accordion** feature.

## Purpose

This is a React component built with scalability in mind.

The Accordion in this repository is created as a **container** with components which make up this specific layout.

The explanation and details provided below are based on the references provided in this repository and hopefully can be used for referencing and education purposes.

## npm Packages Used

- styled-components

## In a Nutshell

The **App.js** references the container/component **AccordionContainer.js** located in the **src/container** folder.

The container loops through the information listed in the object of **accordionData.json** file located in the **src/data** folder, which is then displayed in the Accordion.

## Let’s Dive In

### Compound Component

The first thing to note is the use of the **compound component** to create the components that make up this specific layout.

In the **src/components** folder, a component folder named _Accordion_ is created. In this folder, the following are added:

- an **index.js** file, and
- a **styles** folder, which itself include the **AccordionStyles.js** file.

#### AccordionStyles.js

This file lists all the **styled components**, with the use of the `styled-components` package.

```javascript
import styled from 'styled-components/macro'
```

This simplifies the CSS process for the components used in this **container**.

> NOTE: The `macro` included in the import, simplifies the **class** naming convention when the HTML is inspected.

#### index.js

This file _references_ all the styled components in the **AccordionStyles.js** and provides all the functions needed to construct the _Accordion_.

The **default** function is used as the **container** or **component wrapper**:

```jsx
export default function Accordion({ children, ...restProps }) {
	return <Container>{children}</Container>
}
```

The props `children` and the `…restProps` (the _rest of props_) should always be included in this function.

To build a compound component, use the following format:

> NOTE: the use of the `children` prop.

#### Handling Dropdown Menu

##### Toggling Dropdown Menu (True/False)

The toggling of the dropdown menu is handled by the **useState** hook in the **Accordion.Item** component.

```javascript
const [toggleShow, setToggleShow] = useState(false)
```

To allow for this state to be accessable across all other components, a **context** is created within the **index.js** file.

```javascript
const ToggleContext = createContext()
```

The context **Provider** is then used to wrap the **Item** component so that all the components within the **Item** component can access the **toggleShow** state and **setToggleShow** which changes it:

```jsx
<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
	<Item {...restProps}>{children}</Item>
</ToggleContext.Provider>
```

To access these states from the sub-components of **Item**, the **useContext** hook is used:

```javascript
const { toggleShow, setToggleShow } = useContext(ToggleContext)
```

##### Handling Menu Opening and Closing Animation

The menu opening and closing animation is handled by the **Body** component.

The **Body** component is wrapped with a **Frame** component which includes a **CSS** transition (in the **styles/AccordionStyles.js** _styled-component_).

> Note: The **Frame** component wraps the **Body** component to fascilitate with a smooth _accordion_ animation effect.

This CSS transition, is effective when the **Frame** component **height** is changed.

> Including, and changing the **max-height** value, which is what commmonly is used, causes little delays during the opening and particularly the closing of the menu.
> Instead, the **height** of the **Frame** component is toggled, and hence the CSS transition taking effect!

However, since the **height** of the **Frame** component is dependent of the **height** of the **Body** component, and that in turn, depends on its content, the **height** will need to be **extracted** for each **Body** and **Frame** component.

This is done by using the **useRef** hook, referencing it to the **Body** component, which then allows us to extract its _div_'s **offsetHeight** value.
This is set into a state which updates whenever the **toggleShow** changes, controlled with a **useEffect** hook.

```jsx
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
```

### AccordionContainer.js

The constrcution of the _Accordion_ layout is done in the **AccordionContainer.js** with the use of **compound component** method as follows:

```jsx
export default function AccordionContainer() {
	const { title, description, list } = accordionData
	return (
		<Accordion>
			<Accordion.Section>
				<Accordion.Title>{title}</Accordion.Title>
				<Accordion.Description>{description}</Accordion.Description>
			</Accordion.Section>
			{list.map(item => {
				const { id, header, body } = item
				return (
					<Accordion.Item key={id}>
						<Accordion.Header>{header}</Accordion.Header>
						<Accordion.Body>{body}</Accordion.Body>
					</Accordion.Item>
				)
			})}
		</Accordion>
	)
}
```

> NOTE FOR NEWBIES: The **images** referenced in the **accordionData.json** actually refer to the those images located in the **public/images** folder (_since the **index.html** located in the public folder is the one being rendered..._).
