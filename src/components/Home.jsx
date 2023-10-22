import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

  const counterGlobalState = useSelector( store => store.counterReducer.counter );

  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h2 className="display-4">Welcome to Our E-Commerce Store</h2>
        <p className="lead h3">We have <span className='h2 text-success'>{counterGlobalState}</span> customers shopping with us today.</p>
      </div>

      <h3>Shop by Category</h3>
      <ul className="list-group">
        <li className="list-group-item">Electronics</li>
        <li className="list-group-item">Clothing</li>
        <li className="list-group-item">Home & Garden</li>
      </ul>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Customer Testimonials</h5>
          <p className="card-text">"This store has the best selection of products!" - John Doe</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="col-md-6">
          <h3>Store Hours</h3>
          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
