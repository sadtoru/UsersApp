import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"

export const UserRoutes = ({ login, handlerLogout }) => {

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
        <>
            <Navbar login={login} handlerLogout={handlerLogout} />
            <Routes>
                <Route path='users' element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddForm={handlerAddForm}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />
                <Route path='users/register' element={<RegisterPage
                    handlerAddForm={handlerAddForm}
                    initialUserForm={initialUserForm} />} />
                <Route path='users/edit/:id' element={<RegisterPage
                    users={users}
                    handlerAddForm={handlerAddForm}
                    initialUserForm={initialUserForm} />} />
                <Route path='/' element={<Navigate to={'/users'} />} />
            </Routes>
        </>
    )
}
