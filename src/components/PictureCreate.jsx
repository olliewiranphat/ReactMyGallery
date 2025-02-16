import React, { useState } from 'react'

function PictureCreate({ createPicture }) {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        createPicture(title)
        setTitle("")
    }
    return (<div className='book-create'>
        <h3>Add a Picture</h3>
        <form onSubmit={handleSubmit} className='gap-2'>
            <label className='text-white'>Picture Name :</label>
            <input className='input' type="text" placeholder='What picture would you like to add?' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className='button m-auto hover:shadow-2xl hover:bg-amber-200 hover:text-[#00d1b2] hover:duration-300'>Add Picture</button>
        </form>

    </div>

    )
}

export default PictureCreate