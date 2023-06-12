import React from 'react';

const List = ({data}) => {
    return (
        <ul>
            {
                data?.length ? data.map((elem, idx)=>{
                    return (
                        <li key={idx}>
                            <span>{elem.title}</span>
                            <input 
                                type='checkbox'
                                checked={elem.isCompleted}
                            />
                        </li>
                    )
                }) : <div>There is nothing</div>
            }
        </ul>
    );
};

export default List;