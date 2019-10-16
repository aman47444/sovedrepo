import React,{Component} from 'react';
class ClassCompo extends Component
{
    render()
    {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}
export default ClassCompo;
//remember one thing what we have to export we have to export class name or our function component or our comonent