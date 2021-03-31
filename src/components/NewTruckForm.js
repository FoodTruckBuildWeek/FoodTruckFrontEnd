import React, { useState } from "react";
import "./NewTruckForm.css";

const NewTruckForm = (props) => {
    const formSchema = {
      name: "",
      information: "",
      image: "",
      bbq: false,
      sliders: false,
      tacos: false,
      pizza: false,
      sandwich: false,
      donut: false,
    };

const [formValues, setFormValues] = useState(formSchema);



const onChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
    });
    console.log(formValues);
};  
      
const onCheckBoxChange = event => {
    const {name, checked} = event.target;
    setFormValues({
        ...formValues,
        [name]: checked
    })
}

const onSubmit = (evt) => {
        evt.preventDefault();
        console.log("IT works");
};

return (
    <form className="truck_form" onSubmit={onSubmit}>
        <div className="truck_title">
            <h3>Create Your Food Truck Here!</h3>
        </div>

        <div className="food_truck_name">
            <h4>The Name of Your Food Truck?</h4>
                <label>
                <input
                value={formValues.name}
                type="text"
                name="name"
                onChange={onChange}
                />
                </label>
        </div>

        <div className="type_of_cuisine">
            <h4>What Is Your Cuisine Type?</h4>

                <label>BBQ&nbsp;
                <input
                name="BBQ"
                type="checkbox"
                onChange={onCheckBoxChange}
                checked={formValues.bbq}
                />
                </label>

                <label>Sliders&nbsp;
                <input
                name="sliders"
                type="checkbox"
                onChange={onCheckBoxChange}
                checked={formValues.sliders}
                />
                </label>

                <label>Tacos&nbsp;
                <input
                name="tacos"
                type="checkbox"
                onChange={onCheckBoxChange}
                checked={formValues.tacos}
                />
                </label>

                <label>Pizza&nbsp;
                <input
                name="pizza"
                type="checkbox"
                onChange={onCheckBoxChange}
                checked={formValues.pizza}
                />
                </label>

                <label>Sandwich&nbsp;
                <input
                name="sandwich"
                type="checkbox"
                onChange={onCheckBoxChange}
                checked={formValues.sandwich}
                />
                </label>

                <label>Donut&nbsp;
                <input
                name="donut"
                type="checkbox"
                onChange={onCheckBoxChange}
                checked={formValues.donut}
                />
                </label>
        </div>

        <div className="cuisine_input">
            <h4>Do you offer another type of cuisine not listed?</h4>
        
                <label>
                <input
                value={formValues.information}
                onChange={onChange}
                name="information"
                type="text"
                />
                </label>               
        </div>

            <button className="myButton" type="submit"  onClick={onSubmit}>Submit</button>   
    </form>  
);
};
export default NewTruckForm;