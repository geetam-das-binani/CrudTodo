import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../api";
const initialValue = {
	mytext: "",
};
function App() {
	const navigate = useNavigate();
	const [Text, setText] = useState(initialValue);
	
	console.log(Text);
	const handleChange = (e) => {
		setText((prev) => {
			return { ...prev, mytext: e.target.value };
		});
	};
	const addTodo = async () => {
		if (Text.mytext === "") {
			alert("Please Enter Something");
			return;
		} else {
			await addItem(Text);
			navigate("/see");
		}
	};
	return (
		<div className="container-fluid my-5">
			<div className="row ">
				<div className="col-sm-7 mx-auto text-light shadow-lg  p-2">
					<h2 className="text-center lh-lg"> TodoList</h2>
					<div className="row ">
						<div className="col-9">
							<input
								type="text"
								className="form-control"
								placeholder="Write Todo Here!"
								value={Text.mytext}
								onChange={handleChange}
							/>
						</div>
						<div className="col-3">
							<button
								onClick={addTodo}
								className="btn btn-primary fw-bold"
								id="addtodobtn"
							>
								Add 
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
