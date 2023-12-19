import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const {initialUserForm, handlerAddForm} = useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, email, password, id } = userForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setUserForm({
            ...userForm,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && id == 0) || !email) {
            alert('Debe completar los campos!')
            return;
        }
        handlerAddForm(userForm);
        setUserForm(initialUserForm);
    }

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        })
    }, [userSelected])

    const onCloseForm = () => {
        handlerCloseForm(initialUserForm);
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                className='form-control my-3 w-75'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            {id > 0 || <input
                className='form-control my-3 w-75'
                placeholder='Password'
                name='password'
                type='password'
                value={password}
                onChange={onInputChange}
            />}
            <input
                className='form-control my-3 w-75'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input type="hidden"
                name="id"
                value={id} />
            <button className='btn btn-primary btn-sm' type='submit'>
                {id > 0 ? "Editar" : "Crear"}
            </button>
            {!handlerCloseForm ||
                <button className="btn btn-sm btn-primary mx-2"
                    type="button"
                    onClick={() => onCloseForm()}>
                    Cerrar
                </button>
            }

        </form>
    )
}
