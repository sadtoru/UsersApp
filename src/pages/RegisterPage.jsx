import { useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom"

export const RegisterPage = ({ users = [], handlerAddForm, initialUserForm }) => {

    const [userSelected, setUserSelected] = useState(initialUserForm)

    const { id } = useParams();

    useEffect(() => {
        const user = users.find(u => u.id == id) || initialUserForm;
        setUserSelected(user);
    }, [id])


    return (
        <div className="container my-3">
            <h3>Registro de usuarios</h3>
            <div className="row">
                <div className="col">
                    <UserForm
                        userSelected={userSelected}
                        handlerAddForm={handlerAddForm}
                        initialUserForm={initialUserForm}
                    />
                </div>
            </div>
        </div>
    )
}
