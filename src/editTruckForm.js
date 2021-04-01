export default function editTruckForm(props) {
  const { values, submit, change, disabled } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  console.log(values.image);
  return (
    <form onSubmit={onSubmit}>
      <label>Image</label>
      <input
        value={values.image}
        onChange={onChange}
        type="text"
        name="image"
      />

      <label> Cuisine </label>

      <input
        value={values.cuisine}
        onChange={onChange}
        type="text"
        name="cuisine"
      />

      <label>Ratings</label>

      <label>Longitude</label>

      <input
        value={values.longitude}
        onChange={onChange}
        type="text"
        name="longitude"
      />

      <label> Latitude </label>

      <input
        value={values.latitude}
        onChange={onChange}
        type="text"
        name="latitude"
      />

      <label> Departure time </label>

      <input
        value={values.departure}
        onChange={onChange}
        type="text"
        name="departure"
      />

      <button disabled={disabled}>Submit</button>
    </form>
  );
}
