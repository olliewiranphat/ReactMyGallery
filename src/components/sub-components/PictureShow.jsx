import React, { useState } from 'react'
import PictureEdit from './PictureEdit'

function PictureShow({ picture, editPicByID, deletePicByID }) {
    // console.log('book', book);
    const { id, title } = picture
    // console.log('title', title);

    const [showEdit, setShowEdit] = useState(false)
    // console.log('showEdit', showEdit);

    const handleEdit = (newTitle) => {
        setShowEdit(!showEdit)
        // console.log('id', id);

        editPicByID(id, newTitle)
    }
    return (
        <div className='book-show'>
            <div className="action flex justify-end">
                <button className='edit' onClick={() => setShowEdit(!showEdit)}>Edit</button>
                <button className='delete' onClick={() => deletePicByID(id)}>Delete</button>
            </div>
            <img src={`https://picsum.photos/seed/${title}/300/200`} alt={title} />
            <div className="mt-2 flex justify-center">
                {showEdit === false ? <h3>{title}</h3> : <PictureEdit picture={picture} handleEdit={handleEdit} />}
            </div>
        </div >
    )
}

export default PictureShow