import { UserContext } from "./UserContext"
import { useUsers } from "../hooks/useUsers";


export const UserProvider = ({ children }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerUserSelectedForm,
        handlerAddForm,
        handlerRemoveUser,
        handlerCloseForm,
        handlerOpenForm,
        getUsers,
    } = useUsers();

    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
                handlerUserSelectedForm,
                handlerAddForm,
                handlerRemoveUser,
                handlerCloseForm,
                handlerOpenForm,
                getUsers,
            }
        }>
            {children}

        </UserContext.Provider>
    )
}
