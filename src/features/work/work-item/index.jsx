import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

WorkItem.propTypes = {
  item: PropTypes.object,  
};

function WorkItem(props) {

    const {item} = props;

    return (
        <div className={`box-text st2 corner-box`}>
            <div className="number">{item.id}</div>
            <div className="h7">{item.title}</div>
            <p>{item.des}</p>
        </div>
    );
}

export default WorkItem;