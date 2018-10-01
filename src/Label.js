import React from 'react';

const Label = (props) => {
    return (
        <div>
            { props.value>0?"positive":
              props.value<0?"negative":
              "zero"
            }
        </div>
    );
}
export default Label;
