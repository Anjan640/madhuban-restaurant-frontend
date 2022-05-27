import React from 'react'
import { Link } from 'react-router-dom';

const MenuDisplay = (props) => {
    let { id, name, price, catagory, stock, details, imageUrl } = props;
    return (
        <div>
                <img className="card-img-top " style={{backgroundColor:"grey",}} src={imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <div className="row">
                    <h5 className="card-title"><b>{name}</b></h5>
                    <h5 className="card-title mx-auto"><b>₹ {price}</b></h5>
                    </div>
                    {catagory==="Nonveg"? <div className="badge rounded-pill bg-success">Veg</div> : <div className="badge rounded-pill bg-danger">nonveg</div> }
                    <h5 className="card-text">{details}</h5>
                    
                    <button type="button" className="btn mx-1 btn-info">
                        <Link to={`menuedit/${id}`} >
                            <span className="glyphicon glyphicon-edit" />
                        </Link>
                    </button>
                    <button type="button" className="btn btn-danger mx-1">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
        </div>
    )
}

export default MenuDisplay
