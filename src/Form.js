import React from "react";
import "./form.css";

function Form() {
	return (
		<>
			<p className="rect-1"></p>
			<p className="rect-2"></p>

			<div className="form-main-logo">
				<img src="/photos/logo.svg" alt="logo" />
			</div>
			<div className="form-container">
				<div className="form-info">
					<div className="form-logo-design">
						<p className="form-logo l2"></p>
						<p className="form-logo l1"></p>
						<p className="form-logo l3"></p>
					</div>
					<h3 className="form-heading">It’s a delight to have you onboard</h3>
					<p className="form-para">
						Help us know you better.
						<br /> (This is how we optimize Wobot as per your business needs)
					</p>
				</div>
				<div className="form-info">
					<label className="form-label" for="company_name">
						Company name
					</label>
					<input
						className="form-field"
						type="text"
						id="company_name"
						name="company_name"
						placeholder="e.g. Example Inc"
					/>
					<label className="form-label" for="industry">
						Industry
					</label>
					<select className="form-field" id="industry">
						<option value="Google">Google</option>
						<option value="Tesla">Tesla</option>
					</select>

					<label className="form-label">Company size</label>
					<div className="form-company_size">
						<p>1-20</p>
						<p>21-50</p>
						<p>51-200</p>
						<p>201-500</p>
						<p>500+</p>
					</div>

					<button className="form-button">Get Started</button>
				</div>
			</div>
			<div className="form-policy">
				<p>Terms of use | Privacy policy </p>
			</div>
		</>
	);
}

export default Form;
