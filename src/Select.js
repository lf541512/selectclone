import React, { Component } from 'react';
class Select extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this)
    }


    change(val) {
        console.log('clicked',val)
    }
  render() {
        // debugger
        return (<div>
            {this.props.children.map((child) => {
                // debugger
                <child.tag></child.tag>
                //     return React.cloneElement(child, {
                //         onClick: this.change.bind(null,child.props.value)
                //     });

                }
            )}
        </div>)

    }
}
export default Select;