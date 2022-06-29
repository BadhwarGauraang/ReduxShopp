import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditShop = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setArea(currentContact.area);
    setCategory(currentContact.category);
    setOpening(currentContact.opening);
    setClosing(currentContact.closing);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");

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
      id: currentContact.id,
      name,
      area,
      category,
      opening,
      closing,
    };

    updateContact(data);
    toast.success("Shop updated successfully!!");
    history.push("/ReduxShopp/");
  };

  return (
    <div className="container">
       <h2 className="text-center text-dark py-3 display-2"><strong>Edit Shop Details</strong></h2>
      <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/ReduxShopp/")}
        >
          Go back
        </button>

      <div className="row d-flex flex-column">
        
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
               
              <div className="form-group">
               <label for="area"><h5>Choose The area</h5></label>
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
               <label for="category"><h5>Choose Category</h5></label>
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
                placeholder="Full name"
                value={opening}
                onChange={(e) => setOpening(e.target.value)}
              />
           </div>

           <div className="form-group">
           <label for="closing"><h5>Closing date:</h5></label>
          <input id="closing"
                className="form-control"
                type="date"
                placeholder="Full name"
                value={closing}
                onChange={(e) => setClosing(e.target.value)}
              />
           </div>

              
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Shop
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/ReduxShopp/")}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Shop Found</h1>
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
  updateContact: (data) => {
    dispatch({ type: "UPDATE_SHOP", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditShop);
