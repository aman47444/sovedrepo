import React from 'react';
const PropsEle = props =>
{
    return (
        <div>
            <h1>Name is {props.name}</h1>
            <h1>Age is {props.age}</h1>
            <h1>RollNo is {props.roll}</h1>
        </div>
    )
}
export default PropsEle;