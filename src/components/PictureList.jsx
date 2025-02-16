import React from 'react'
import PictureShow from './sub-components/PictureShow'

function PictureList({ pictures, editPicByID, deletePicByID }) {


    return (
        <div className='book-list'>

            {
                pictures.map(picture => <PictureShow key={picture.id} picture={picture} editPicByID={editPicByID} deletePicByID={deletePicByID} />)
            }</div>
    )
}

export default PictureList