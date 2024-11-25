import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const ItemsList = ({ items, handleCheck, handleDelete }) => (
    <ul>
        {items.map((item) => (
            <li className='item' key={item.id}>
                <input
                    type="checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                />
                <label>{item.item}</label>
                <FaTrashAlt
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(item.id)}
                />
            </li>
        ))}
    </ul>
);

const Content = ({ items, handleCheck, handleDelete }) => (
    <main>
        {items.length ? (
            <ItemsList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{ marginTop: '2rem' }}>Your list is empty</p>
        )}
    </main>
);

export default Content;
