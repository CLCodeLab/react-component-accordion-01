import React from 'react'
import accordionData from '../data//accordionData.json'
import Accordion from '../components/Accordion'

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