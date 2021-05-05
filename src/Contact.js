import React from 'react';
class Contact extends React.Component{
    constructor()
    {
        super();
        
        
    }
    componentDidMount()
    {
        console.warn("props",this.props.name );
    }
    componentDidUpdate()
    {
        console.warn("props Update",this.props.name );
        console.warn("update")
    }
    render(){
        return(
            <div>
                <h1>Contact Us Componet</h1>
                <h2>{this.props.name}</h2>
            </div>
        )
        
    }
}
export default Contact;