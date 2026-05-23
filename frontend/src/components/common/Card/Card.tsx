import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
	id?: string;
	innerContent: ReactNode;
	size?: 'small' | 'medium' | 'large' | 'fit';
	hoverable?: boolean;
	hidden?: boolean;
	customColor?: string;
	margin?: string;
	selectionOutline?: boolean
}

function Card (props: CardProps) {
	return (
		<div 
			id={props.id}
			className={
				`card ${props.size ? props.size : 'fit'} ${props.hoverable && 'hoverable'} ${props.hidden && 'hidden'} ${props.selectionOutline && 'selected'}`
			}
			style={{
				backgroundColor: props.customColor,
				margin: props.margin
			}}
		>
			{
				props.innerContent
			}
		</div>
	)
}

export default Card;