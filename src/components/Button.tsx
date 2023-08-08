import React from "react";

interface MyComponentProps {
	children: React.ReactNode;
}

const Button = ({ children }: MyComponentProps) => {
	function handleOnClick() {
		alert("Hello, Astro!");
	}
	return <button onClick={handleOnClick}>{children}</button>;
};

export default Button;
