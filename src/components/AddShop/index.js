import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddShop = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkname = contacts.find(
      (contact)=> contact.name === name && contact);
      if(checkname){
        return toast.warning("Shop's Name already exists");
      }

    if (!area || !name || !category || !opening || !closing) {
      return toast.warning("Please fill in all fields!!");
    }
    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      name,
      area,
      category,
      opening,
      closing,

    };

    addContact(data);
    toast.success("Shop added successfully!!");
    history.push("/ReduxShopp/");
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center text-dark py-3 display-2"><strong>Add Shop Details</strong></h2>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label for="name"><h5>Enter Shop's Name:</h5></label>
              <input id="name"
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            
            <div className="form-group">
               <label for="area"><h5>Choose Area:</h5></label>
               <h5>You Selected:{area}</h5>
                <select id="area" name="area" size="3" value={area} onChange={e=>setArea(e.target.value)}>
                 <option >Thane</option>
                 <option >Pune</option>
                 <option >Mumbai</option>
                 <option >Nashik</option>
                 <option >Nagpur</option>
                 <option >Ahmednagar</option>
                 <option >Solapur</option>
                 <option >Delhi</option>
                 <option >Amritsar</option>
                 <option >Merut</option>

            </select><br/><br/>
          </div>

          <div className="form-group">
               <label for="category"><h5>Choose Category:</h5></label>
               <h5>You Selected:{category}</h5>
                <select id="category" name="category" size="3" value={category} onChange={e=>setCategory(e.target.value)}>
                 <option >Grocery</option>
                 <option >Butcher</option>
                 <option >Baker</option>
                 <option >Chemist</option>
                 <option >Stationary</option>
                 <option >Clothing</option>
                 
            </select><br/><br/>
          </div>

          <div className="form-group">
            <label for="opening"><h5>Opening date:</h5></label>
          <input id="opening"
                className="form-control"
                type="date"
                value={opening}
                onChange={(e) => setOpening(e.target.value)}
              />
           </div>

           <div className="form-group">
           <label for="closing"><h5>Closing date:</h5></label>
          <input
                id="closing"
                className="form-control"
                type="date"
                value={closing}
                onChange={(e) => setClosing(e.target.value)}
              />
           </div>

            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Details"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_SHOP", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddShop);
