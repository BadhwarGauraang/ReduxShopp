import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const Home = ({ contacts, deleteContact }) => {

  
  return (
    <div className="container">
       <Link to="/ReduxShopp/add" className="btn btn-outline-success text-light btn-info my-5 ml-auto ">
          Add ShopDetails
        </Link>
        <h3>Shops Detailed Information</h3>
        <br/><br/>
     

      <div class="container ">
      
    <div class="row">

    {contacts.length > 0 ? (
                contacts.map((contact, id) => (

      <div class="col-sm-12 col-lg-3 col-md-4 mb-5">
       <div class="card text-bg-dark" >
        <div class="card-body mt-0"  key={id}>
      
        <h5 class="card-title">{contact.name}</h5><br/>
        <h6  key={id}>Id: {id + 1}</h6>
        <h6>Area: {contact.area}</h6>
        <h6>Category: {contact.category}</h6><br/>
        <h6>OpeningDate: {contact.opening}</h6>
        <h6>ClosingDate: {contact.closing} </h6><br />
                <Link
                        to={`/ReduxShopp/edit/${contact.id}`}
                        className="btn btn-sm btn-warning mr-1">
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger">                    
                        Delete
                      </button>
       </div>
      </div>
      </div>
       ))
       ) : (
         <h6>Shops Empty</h6>
       )}
      
      
    </div>
  </div>
    </div>
   
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_SHOP", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
