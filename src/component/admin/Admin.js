import React from 'react'
import { Route, Routes } from "react-router-dom"
import AddMenu from './AddMenu'
import AdminNavbar from './AdminNavbar'
import Login from './Login'
import Menu from './Menu'
import MenuEdit from './MenuEdit'

function Admin() {
    return (
        <>
        
            <AdminNavbar />
            <Routes>
                <Route exact path='' element={<Menu />} />
                <Route exact path='*/' element={<Menu />} />
                <Route exact path='menu' element={<Menu />} />
                <Route exact path='menu/addmenu' element={<AddMenu />} />
                <Route exact path='menu/edit/:id' element={<MenuEdit />} />
            </Routes>
        </>
    )
}

export default Admin
