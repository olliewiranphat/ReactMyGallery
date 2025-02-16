import React, { useState } from 'react'

function PictureCreate({ createPicture }) {
    const [title, setTitle] = useState("")

    ///// For Form :
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    // }

    const hdlClickCreate = () => {
        createPicture(title)
        setTitle("")
    }

    return (<div className='book-create'>
        <div className="flex flex-col gap-2">
            <h3>Add a Picture</h3>
            <label className='text-white'>Picture Name :</label>
            <input className='input' type="text" placeholder='What picture would you like to add?' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className='button m-auto hover:shadow-2xl hover:bg-amber-200 hover:text-[#00d1b2] hover:duration-300' onClick={hdlClickCreate}>Add Picture</button>
        </div>

    </div>

    )
}

export default PictureCreate