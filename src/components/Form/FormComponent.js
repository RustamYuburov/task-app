import React from 'react';

const FormComponent = (props) => {
  return (
    <main>
      <form>
          <input 
              name="firstName" 
              value={props.data.firstName} 
              onChange={(e) => props.handleChange(e)} 
              placeholder="First Name" 
          />
          <br />
          
          <input 
              name="lastName" 
              value={props.data.lastName}
              onChange={(e) => props.handleChange(e)} 
              placeholder="Last Name" 
          />
          <br />
          
          <input 
              name="age" 
              value={props.data.age}
              onChange={(e) => props.handleChange(e)} 
              placeholder="Age" 
          />
          <br />

          {/* Create radio buttons for gender here */}
          <label>
              <input 
                  type="radio" 
                  name="gender"
                  value="male"
                  checked={props.data.gender === "male"}
                  onChange={(e) => props.handleChange(e)}
              /> Male
          </label>
          <br />
          
          <label>
              <input 
                  type="radio" 
                  name="gender"
                  value="female"
                  checked={props.data.gender === "female"}
                  onChange={(e) => props.handleChange(e)}
              /> Female
          </label>
          <br />

          {/* Create select box for location here */}
          <select 
              value={props.data.destination} 
              name="destination" 
              onChange={(e) => props.handleChange(e)}
          >
              <option value="">-- Please Choose a destination --</option>
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
          </select> 
          <br />
          
          {/* Create check boxes for dietary restrictions here */}
          <label>
              <input 
                  type="checkbox"
                  name="isVegan"
                  onChange={(e) => props.handleChange(e)}
                  checked={props.data.isVegan}
              /> Vegan?
          </label>
          <br />
          
          <label>
              <input 
                  type="checkbox"
                  name="isKosher"
                  onChange={(e) => props.handleChange(e)}
                  checked={props.data.isKosher}
              /> Kosher?
          </label>
          <br />
          
          <label>
              <input 
                  type="checkbox"
                  name="isLactoseFree"
                  onChange={(e) => props.handleChange(e)}
                  checked={props.data.isLactoseFree}
              /> Lactose Free?
          </label>
          <br />
          
          <button>Submit</button>
      </form>

      <hr />
      
      <h2>Entered information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dietary restrictions:</p>
      
      <p>{props.data.isVegan ? "Vegan" : null}</p>
      <p>{props.data.isKosher ? "Kosher" : null}</p>
      <p>{props.data.isLactoseFree ? "Lactose Free" : null}</p>
      
    </main> 
  )
}

export default FormComponent