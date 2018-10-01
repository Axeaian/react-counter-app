import React, { Component } from 'react';
import Counter from "./Counter"

class Counters extends Component {
    render() {
        const counters = ["KaiXin","Delp","Tim","Shun","Calvin","Brian","Huimin","Sebastian","Sheldon","XinFang"];
        return (
            <div>
                {counters.map((val) => <Counter name = {val}/>)}
            </div>
        );
    }
}

export default Counters;
