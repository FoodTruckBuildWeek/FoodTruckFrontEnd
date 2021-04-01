export default function editTruckForm(props){

    const { values, submit, change, disabled} = props
    
    const onChange = (evt) =>{
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }
    const onSubmit = (evt)=>{
        evt.preventDefault();
        submit();
    }
    
    
        return (
        <form onSubmit={onSubmit}>
            <label>Image
                <input
                value={values.image}
                onChange={onChange}
                type='text'
                name='image'
                />
            </label>
            
            <label>Cuisine
                <input
                value = {values.cuisine}
                onChange={onChange}
                type='text'
                name='cuisine'/>
            </label>

            <label>Ratings

            </label>
            
            <label>Longitude
                <input
                value={values.longitude}
                onChange={onChange}
                type='text'
                name='longitude'
                />
            </label>
            <label>Latitude
                <input
                value={values.latitude}
                onChange={onChange}
                type='text'
                name='latitude'
                />
            </label>
    
            <label>Departure time
                <input
                value={values.departure}
                onChange={onChange}
                type='text'
                name='departure'
                />
            </label>
    
            <button disabled={disabled}>
                Submit
            </button>
    
        </form>
        )
    }