import React, { useState } from 'react'

function PictureEdit({ picture, handleEdit }) {
    const [newTitle, setNewTitle] = useState("")
    const [placeholder, setPlaceholder] = useState(picture.title)

    // ///// For Form :
    // const SubmitEdit = (e) => {
    //     e.preventDefault()
    //     console.log('newTitle', newTitle);
    // }

    const hdlClickEdit = () => {
        newTitle && handleEdit(newTitle)
    }

    return (
        <div className='flex flex-col gap-2' >
            <label>New Title</label>
            <input type="text" placeholder={placeholder} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className='border border-slate-500 px-3 py-1 rounded-md' />
            <button className='bg-[#00d1b2] px-2 py-1 rounded-md m-auto text-white  hover:bg-amber-200 hover:text-[#00d1b2] hover:duration-300 hover:shadow-2xl' onClick={hdlClickEdit}>Save</button>

        </div >
    )
}

export default PictureEdit