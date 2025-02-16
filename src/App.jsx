import { useEffect, useState } from "react"
import PictureList from "./components/PictureList"
import PictureCreate from "./components/PictureCreate"
import axios from "axios"


function App() {
  const [pictures, setPictures] = useState([])
  ///// Open Web : get all pictures in DB to show first
  const getAllPictures = async () => {
    const response = await axios.get('http://localhost:3001/pictures')
    // console.log('response', response);
    // console.log('response.data', response.data); //=[]
    setPictures(response.data)

  }
  // console.log('pictures', pictures);

  // getAllPictures() XXXXX will loop to get and Error Server down!!!
  useEffect(() => {
    getAllPictures()
  }, [])


  const createPicture = async (title) => {
    // setPictures([...pictures, { id: pictures.length + 1, title }])
    //// Create data by sending API and keep in Server
    const response = await axios.post('http://localhost:3001/pictures', { title })
    // console.log('response', response);
    // console.log('response.data', response.data); //={}

    setPictures([...pictures, response.data])

  }
  // console.log('pictures', pictures);


  const editPicByID = async (id, newTitle) => {
    const response = await axios.patch(`http://localhost:3001/pictures/${id}`, { title: newTitle })
    // console.log('response', response);
    console.log('response.data', response.data); //={idEdit, title}
    console.log('pictures', pictures);
    const updatedPic = pictures.map(pic => {
      if (pic.id == id) return { ...pic, ...response.data } //last result
      return pic
    })
    console.log('updatedPic', updatedPic);
    setPictures(updatedPic)

    // const updatedPic = pictures.map(el => {
    //   if (el.id === id) return { ...el, title: newTitle }
    //   return el
    // })
    // setPictures(updatedPic)


  }

  const deletePicByID = async (id) => {
    const deleleted = await axios.delete(`http://localhost:3001/pictures/${id}`)
    // console.log('deleleted', deleleted);
    console.log('deleleted.data', deleleted.data); //={}
    console.log('pictures', pictures);
    const afterDeleted = pictures.filter(pic => pic.id != id)
    setPictures(afterDeleted)
    // const afterDeleted = pictures.filter(picture => picture.id !== id) //= [!=id]
    // setPictures(afterDeleted)
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
