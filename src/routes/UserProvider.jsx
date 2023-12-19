import { UserContext } from "../context/UserContext"
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
            }
        }>
            {children}

        </UserContext.Provider>
    )
}
