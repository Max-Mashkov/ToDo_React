import React, {Component} from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

    render () {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-info sd">All</button>
                <button type="button"
                        className="btn btn-outline-secondary sd">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary sd">Done</button>
            </div>
        );
    }

}


