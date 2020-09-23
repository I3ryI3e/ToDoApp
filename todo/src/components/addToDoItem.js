import React from 'react';

const AddToDoItem = () => {
    return (
        <div className="add">
            <div className="add__items">
                <div className="add__title">
                    <h4>Insert your task</h4>
                </div>
                <textarea name="ToDo" cols="50" rows="1"></textarea>
            </div>
        </div>
    );
};

export default AddToDoItem;