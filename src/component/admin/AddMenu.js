import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const placeorder = "http://localhost:9999/addmenu";
function AddMenu() {
    const navigate = useNavigate();
    const [Id, setId] = useState(Math.floor(Math.random()*10000))
    const [Name, setName] = useState("")
    const [Price, setPrice] = useState(10)
    const [Catagory, setCatagory] = useState("veg")
    const [Dish, setDish] = useState("")
    const [stock, setstock] = useState(true)
    const [Details, setDetails] = useState("")
    const [Image, setImage] = useState("")
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleCatagory = (event) => {
        setCatagory(event.target.value)
    }
    const handleDish = (event) => {
        setDish(event.target.value)
    }
    const handleStock = (event) => {
        setstock(event.target.value)
    }
    const handleDetails = (event) => {
        setDetails(event.target.value)
    }
    const handleImage = (event) => {
        setImage(event.target.value)
    }
    const handleSubmit = () => {
        console.log(`${Name}, ${Price}, ${Catagory}, ${Dish}, ${stock}, ${Details}, ${Image}`)
        // alert(`${Name}, ${Price}, ${Catagory}, ${Dish}, ${stock}, ${Details}, ${Image}`)
        let stringid = Id.toString();
        let body = {
            name: Name,
            id:stringid,
            price: Price,
            Catagory: Catagory,
            Dish: Dish,
            stock: stock,
            details: Details,
            image: Image
        }
        fetch(placeorder, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        })
            .then(() => {
                alert("data added");
                navigate('/admin/menu')

            })

    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="panel panel-info bookingpannel bg-light">
                        <div className="panel-heading">
                            <h3><center>Add New Item</center></h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" name="Product_name"
                                    className="form-control" onChange={handleName} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" name="Price"
                                    className="form-control" onChange={handlePrice} />
                            </div>
                            <div className="form-group">
                                <label>Catagory</label>
                                <select type="text" name="person"
                                    className="form-control" onChange={handleCatagory} required>
                                    <option value="veg">Veg</option>
                                    <option value="Nonveg">NonVeg</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Dish</label>
                                <input type="text" placeholder="Enter name" name="dish"
                                    className="form-control" onChange={handleDish} />
                            </div>
                            <div className="form-group">
                                <label>stock</label>
                                <input type="number" placeholder="Enter Phone Number" name="phone"
                                    className="form-control" onChange={handleStock} />
                            </div>
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                            </div>
                            <div className="form-group">
                                <label> Details</label>
                                <input type="text" placeholder="Enter Address" name="details"
                                    className="form-control" required onChange={handleDetails} />
                            </div>
                            <div className="form-group">
                                <label> Image</label>
                                <input type="text" placeholder="Enter Address" name="details"
                                    className="form-control" required onChange={handleImage} />
                            </div>

                            <Link to="" className="btn btn-danger">Back</Link> &nbsp;
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddMenu;
