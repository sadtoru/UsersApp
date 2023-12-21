import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const [visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();

    const getUsers = async () => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        });
    }


    const handlerAddForm = (user) => {
        dispatch({
            type: (user.id === 0) ? 'AddUser' : 'updateUser',
            payload: user,
        })

        Swal.fire(
            (user.id === 0) ?
                'Usuario creado' : 'Usuario actualizado',
            (user.id === 0) ?
                'El usuario ha sido creado' : 'El usuario ha sido actualizado',
            "success"
        );
        handlerCloseForm();
        navigate('/users')
    }

    const handlerUserSelectedForm = (user) => {
        setVisibleForm(true);
        setUserSelected({ ...user })
    }

    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: "¿Estás seguro?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'RemoveUser',
                    payload: id,
                })
                Swal.fire({
                    title: "Usuario eliminado",
                    text: "El usuario ha sido eliminado correctamente",
                    icon: "success"
                });
            }
        });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerUserSelectedForm,
        handlerAddForm,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}
