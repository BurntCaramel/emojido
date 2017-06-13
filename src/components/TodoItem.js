import React from 'react'

export default function TodoItem({
    completed,
    description,
    onToggleComplete,
    onChangeDescription
}) {
    return (
        <div>
            <input
                type='checkbox'
                checked={ completed }
                onChange={ onToggleComplete }
            />
            <input
                type='text'
                value={ description }
                onChange={ onChangeDescription }
            />
        </div>
    )
}