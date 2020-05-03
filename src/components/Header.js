import React from 'react';

function Header(props) {
	return (
		<div style={{textAlign:'center', fontSize: '1.3rem', fontFamily: 'Montserrat'}}>
			<h1 className="text-uppercase">{props.title}</h1>
			<p>{props.heading}</p>
		</div>
	);
}

Header.defaultProps = {
  title: "Indecision App",
  heading: "Put your decisions in the hands of a computer"
}

export default Header;