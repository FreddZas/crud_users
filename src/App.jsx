import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)


const baseUrl = 'https://users-crud.academlo.tech'
const [
  users, 
  getAllUsers, 
  createNewUser, 
  deleteUserById, 
  updateUserById
] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <>
      <div>
        <h1>Users</h1>
        <button onClick={handleOpenForm} className='formuser__btn-open'><i className='bx bx-plus-medical'></i> Open Form</button>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          closeForm={closeForm}
          setCloseForm={setCloseForm}
        />
        <div className='users__list'>
          {
            users?.map(user => ( // "?"encadenamiento opcional o optional chaining (para evitar el undenifed)
              <UserCard
                key={user.id}
                user={user}
                deleteUserById = {deleteUserById}
                setUpdateInfo = {setUpdateInfo}
                handleOpenForm={handleOpenForm}
              />
            )) 
          }
        </div>
      </div>
      
    </>
  )
}

export default App
