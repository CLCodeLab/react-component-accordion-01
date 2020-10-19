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

In the **src/components** folder, a component folder named *Accordion* is created. In this folder, the following are added:

- an **index.js** file, and
- a **styles** folder, which itself include the **AccordionStyles.js** file.

#### AccordionStyles.js

This file lists all the **styled components**, with the use of the ```styled-components``` package.

```javascript
import styled from 'styled-components/macro'
```

This simplifies the CSS process for the components used in this **container**.

> NOTE: The ```macro``` included in the import, simplifies the **class** naming convention when the HTML is inspected.

#### index.js

This file *references* all the styled components in the **AccordionStyles.js** and provides all the functions needed to construct the *Accordion*.

The **default** function is used as the **container** or **component wrapper**:

```jsx
export default function Accordion({ children, ...restProps }) {
 return <Container>{children}</Container>
}
```

The props ```children``` and the ```…restProps``` (the *rest of props*) should always be included in this function.

To build a compound component, use the following format:


> NOTE: the use of the ```children``` prop.

The constrcution of the *Accordion* layout is done in the **AccordionContainer.js** with the use of **compound component** method as follows:

```jsx
export default function AccordionContainer() {
 const { title, description, list } = accordionData
 return (
  <Accordion>
   <Accordion.Section>
    <Accordion.Title>{title}</Accordion.Title>
    <Accordion.Description>{description}</Accordion.Description>
   </Accordion.Section>
  {list.map(item=>{
   const {id, header, body} = item
   return(
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

> NOTE FOR NEWBIES: The **images** referenced in the **accordionData.json** actually refer to the those images located in the **public/images** folder (*since the **index.html** located in the public folder is the one being rendered...*).
