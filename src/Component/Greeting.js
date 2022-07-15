import React from "react";

import "./Greeting.css";

let curDate = new Date();
curDate = curDate.getHours();

let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';


} else if (curDate >= 12 && curDate < 16) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'blue';

} else if (curDate >= 16 && curDate < 20) {
    greeting = 'Good Evening';
    cssStyle.color = 'blue';

}
else {
    greeting = 'Good Night';
    cssStyle.color = 'brown';
}

function Greeting() {
    return (
        <>
            <div className="main">

                <h1>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>

            </div>
        </>

    );
}

export default Greeting;