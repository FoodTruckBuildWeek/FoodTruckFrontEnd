import './editTruck.css';
import * as yup from 'yup';
import axios from 'axios';
import editTruckForm from './editTruckForm';
import React, {useEffect, useState} from 'react';

const initialValues = {
  image: '',
  cuisine: '',
  ratings: null,
  location: '',
  departure: '',
}
const initialDisabled = false;

function App() {

  const [value, setValue] = useState(initialValues);
  const [truck, setTruck] = useState([])
  const [disabled, setDisabled] = useState(initialDisabled);
  
const postEditedTruck = (newTruck) => {
  axios
    .post('https://', newTruck)
    .then(res => {
      setTruck([res.data, ...truck])
    })
    .catch(err => {
      console.log(err)
    })
  }
  const onSubmit = () => {
    const submitVariable = {
      image: value.image.trim(),
      cuisine: value.cuisine.trim(),
      ratings: value.ratings.trim(),
      location: value.location.trim(),
      departure: value.departure.trim(),
    }

    postEditedTruck(submitVariable)
  }
  const inputChange = (name, value1) => {
    setValue({...value, [name]: value1,}); /*this [name] part is probably wrong...*/
  };


  return (
    <div className="Truck">
      <editTruckForm 
      values={value}
      change={inputChange}
      submit={onSubmit}
      disabled={disabled}/>
    </div>
  );
}

export default editTruck;
