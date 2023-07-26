import "./styles/UserCard.css"

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }

  return (
    <div className="user__container">
        <article className="user__card">
            <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
            <hr />
            <ul className="user__info">
                <li>
                    <span className="user__info-label">
                        <span>EMAIL: </span>
                    </span>
                    <div className="user__info-value">
                        <span><i class='bx bx-envelope' ></i> {user.email}</span>
                    </div>
                </li>
                <li>
                    <span className="user__info-label">
                        <span>BIRTHDAY: </span>
                    </span>
                    <span className="user__info-value">
                        <span><i class='bx bxs-gift' ></i> {user.birthday}</span>
                    </span>
                </li>
            </ul>
            <hr />
            <footer>
                <span className="delete__btn">
                    <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
                </span>
                <div className="update__btn">
                    <button onClick={handleUpdate}><i className='bx bx-edit' ></i></button>
                </div>
            </footer>
        </article>
    </div>
  )
}

export default UserCard