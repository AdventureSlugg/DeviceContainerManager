import { ReactNode } from "react";
import "./Badge.css";

interface BadgeProps {
	innerContent: ReactNode;
}

function Badge (props: BadgeProps) {
	return (
		<div className="badge">
			{props.innerContent}
		</div>
	)
}

export default Badge;