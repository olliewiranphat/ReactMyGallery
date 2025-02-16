import { useState } from "react"
import PictureList from "./components/PictureList"
import PictureCreate from "./components/PictureCreate"


function App() {
  const [pictures, setPictures] = useState([])

  const createPicture = (title) => {
    setPictures([...pictures, { id: pictures.length + 1, title }])

  }


  const editPicByID = (id, newTitle) => {
    const updatedPic = pictures.map(el => {
      if (el.id === id) return { ...el, title: newTitle }
      return el
    })
    setPictures(updatedPic)


  }

  const deletePicByID = (id) => {
    const afterDeleted = pictures.filter(picture => picture.id !== id) //= [!=id]
    setPictures(afterDeleted)
  }




  return (
    <div className="app">
      <div className="bg-[#00d1b2] text-amber-200 text-center font-bold text-2xl py-2">Gallery</div>
      <PictureList pictures={pictures} editPicByID={editPicByID} deletePicByID={deletePicByID} />
      <PictureCreate createPicture={createPicture} />
    </div>
  )
}

export default App
