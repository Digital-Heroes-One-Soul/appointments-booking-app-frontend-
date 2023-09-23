import React, { useRef } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addEmporiums } from '../../store/emporiumsSlice';
import axios from 'axios';

export default function AmazingForm() {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const ownerRef = useRef();
  const picturesRef = useRef();
  const phone_numberRef = useRef();
  const locationRef = useRef();
  const open_timeRef = useRef();
  const close_timeRef = useRef();
  const descriptionRef = useRef();
  const categoriesRef = useRef();
  const social_media_linkRef = useRef();
  const payment_methodRef = useRef();
  const discountsRef = useRef();
  // const availabilityRefs = {
  //   Sunday: useRef(),
  //   Monday: useRef(),
  //   Tuesday: useRef(),
  //   Wednesday: useRef(),
  //   Thursday: useRef(),
  //   Friday: useRef(),
  //   Saturday: useRef(),
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myData = {
      name: nameRef.current.value,
      owner:parseInt(ownerRef.current.value),
      // pictures: picturesRef.current.value,
      phone_number: phone_numberRef.current.value,
      location: locationRef.current.value,
      open_time: open_timeRef.current.value,
      close_time: close_timeRef.current.value,
      description: descriptionRef.current.value,
      categories: categoriesRef.current.value,
      social_media_link: social_media_linkRef.current.value,
      payment_method: payment_methodRef.current.value,
      discounts: discountsRef.current.value,
      // availability: Object.keys(availabilityRefs).filter(
      //   (day) => availabilityRefs[day].current.checked
      // ),
    }
    
    dispatch(addEmporiums(myData))
  };



  return (
    <div className="form-container">
      <h1>Amazing Form</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        {/* Form input fields */}
        {/* ... */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input
            type="number"
            id="owner"
            name="owner"
            ref={ownerRef}
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            ref={phone_numberRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            ref={locationRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="open_time">Open Time</label>
          <input
            type="time"
            id="open_time"
            name="open_time"
            ref={open_timeRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="close_time">Close Time</label>
          <input
            type="time"
            id="close_time"
            name="close_time"
            ref={close_timeRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            ref={descriptionRef}

          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            id="categories"
            name="categories"
            ref={categoriesRef}

          />
        </div>
        <div className="form-group">
          <label htmlFor="social_media_link">Social Media Link</label>
          <input
            type="text"
            id="social_media_link"
            name="social_media_link"
            ref={social_media_linkRef}


          />
        </div>
        <div className="form-group">
          <label htmlFor="payment_method">Payment Method</label>
          <select
            id="payment_method"
            name="payment_method"
            ref={payment_methodRef}

          >
            <option value="cash">Cash</option>
            <option value="visa">Visa</option>
            <option value="e_wallet">E-wallet</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="discounts">Discounts</label>
          <input
            type="text"
            id="discounts"
            name="discounts"
            ref={discountsRef}

          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <div className="availability-checkboxes">
            {Object.keys(availabilityRefs).map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  name={day}
                  ref={availabilityRefs[day]}
                />
                {day}
              </label>
            ))}
          </div> */}
        {/* </div> */}
        {/* ... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}









































