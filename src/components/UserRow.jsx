import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const UserRow = ({ email, id, username }) => {

    const { handlerRemoveUser, handlerUserSelectedForm } = useContext(UserContext);

    return (
        <tr key={id}>
            <td>
                {id}
            </td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button className='btn btn-danger btn-sm' type='button'
                onClick={() => handlerUserSelectedForm({
                    id,
                    email,
                    username,

                })}
            >update</button></td>
            <td>
                <NavLink className={'btn-sm btn btn-secondary'} to={'/users/edit/' + id} >
                    update route
                </NavLink>
            </td>
            <td><button className='btn btn-danger btn-sm' type='button'
                onClick={() => handlerRemoveUser(id)}>remove</button></td>
        </tr>
    )
}
