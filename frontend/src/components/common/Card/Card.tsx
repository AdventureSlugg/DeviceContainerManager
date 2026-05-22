import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
	innerContent: ReactNode;
	size?: 'small' | 'medium' | 'large' | 'fit';
	hoverable?: boolean;
	hidden?: boolean;
}

function Card (props: CardProps) {
	return (
		<div 
			className={
				`card ${props.size ? props.size : 'fit'} ${props.hoverable && 'hoverable'} ${props.hidden && 'hidden'}`
			}
		>
			{
				props.innerContent
			}
		</div>
	)
}

export default Card;