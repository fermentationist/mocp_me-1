import React from 'react';

const infoStyle={
	background:'black',
	color:'white',
	marginLeft: '20px',
	padding:'30px',
	font:'avenir',
	borderRadius:'25px 0px 0px 25px',
	height:'60vh'
}

const Info = (props) => {
    return (
        <div className="info-wrapper" style={ infoStyle }>
            <h3>{props.title}</h3>
            <h4>{props.artist}</h4>
            <hr />
            {props.children}
        </div>
    );
}

export default Info;



