import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MenuDisplay from './MenuDisplay';
const menuUrl = "http://localhost:9999/menu";

function Menu() {
    const [menu, setmenu] = useState([])

    const updateMenu = async () => {
        let data = await fetch(menuUrl);
        let parsedata = await data.json()
        setmenu(parsedata)
    }
    useEffect(() => {
        updateMenu();
    }, [])
    console.log(menu)
    return (
        <div className="container">
            <h1 style={{ color: "white", textAlign: "center" }}>Menu</h1>
                <Link to="addmenu" className="btn btn-primary">Add Menu</Link>
                <div className="row">
                    {menu.map((element) => {
                        return (
                            <div className="card mx-2 mb-3 col-md-3" key={`${element._id}`}>
                                <MenuDisplay id={element.id} name={element.name} price={element.price} catagory={element.catagory} stock={element.stock} details={element.details} imageUrl={element.image}     />
                            </div>
                        )
                    })}
                </div>
            
        </div>
    )


}

export default Menu
