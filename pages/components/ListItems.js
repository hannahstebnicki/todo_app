import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {

        return <div className="list input-group mb-3" key={item.key}>
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" className="strikeThrough" aria-label="Checkbox for following text input" />



                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
            </div>
            <FontAwesomeIcon className="faicons row align-self-center" onClick={() => {
                props.deleteTask(item.key)
            }} icon="trash" />

        </div>
    })
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>


    </div>;

}

export default ListItems;