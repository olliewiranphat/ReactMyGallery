import React, { useState } from 'react'

function PictureEdit({ picture, handleEdit }) {
    const [newTitle, setNewTitle] = useState("")
    const [placeholder, setPlaceholder] = useState(picture.title)

    const SubmitEdit = (e) => {
        e.preventDefault()
        console.log('newTitle', newTitle);
        newTitle && handleEdit(newTitle)


    }
    return (
        <form onSubmit={SubmitEdit} className='flex flex-col gap-2' >
            <label>New Title</label>
            <input type="text" placeholder={placeholder} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className='border border-slate-500 px-3 py-1 rounded-md' />
            <button className='bg-[#00d1b2] px-2 py-1 rounded-md m-auto text-white  hover:bg-amber-200 hover:text-[#00d1b2] hover:duration-300 hover:shadow-2xl'>Save</button>

        </form >
    )
}

export default PictureEdit