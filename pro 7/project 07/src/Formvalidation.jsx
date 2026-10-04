import { useState } from 'react';
import './Formvalidation.css';

function Formvalidation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    course: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (values) => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (values.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!values.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s()-]{10,15}$/.test(values.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!values.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else if (new Date(values.dateOfBirth) > new Date()) {
      newErrors.dateOfBirth = 'Date of birth cannot be in the future';
    }

    if (!values.gender) {
      newErrors.gender = 'Please select a gender';
    }

    if (!values.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (values.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters';
    }

    if (!values.course) {
      newErrors.course = 'Please select a course';
    }

    if (!values.password) {
      newErrors.password = 'Password is required';
    } else if (values.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      newErrors.password = 'Use uppercase, lowercase, and a number';
    }

    if (!values.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!values.terms) {
      newErrors.terms = 'You must accept the terms to continue';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        course: '',
        password: '',
        confirmPassword: '',
        terms: false,
      });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            autoComplete="name"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            autoComplete="email"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            autoComplete="tel"
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dateOfBirth">Date of birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="form-input"
          />
          {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {errors.gender && <div className="error-message">{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input form-textarea"
            autoComplete="street-address"
            rows="3"
          />
          {errors.address && <div className="error-message">{errors.address}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="course">Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a course</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="cybersecurity">Cybersecurity</option>
          </select>
          {errors.course && <div className="error-message">{errors.course}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            autoComplete="new-password"
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            autoComplete="new-password"
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
        </div>

        <div className="form-group">
          <label className="terms-label">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, terms: e.target.checked }));
                if (errors.terms) {
                  setErrors((prev) => ({ ...prev, terms: '' }));
                }
              }}
            />
            I agree to the terms and conditions
          </label>
          {errors.terms && <div className="error-message">{errors.terms}</div>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formvalidation;