import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditItem ,getEditData} from "../api";

const initialValue = {
	mytext: "",
};
function App() {
	const navigate = useNavigate();
	const [Text, setText] = useState(initialValue);
    const {id}=useParams()

	

	const handleChange = (e) => {
		setText((prev) => {
			return { ...prev, mytext: e.target.value };
		});
	};
    useEffect(()=>{
       getEditItem()
    },[id])
    const getEditItem=async()=>{
      const response= await getEditData(id)
      
      setText((prev) => {
        return { ...prev, mytext:response.data.mytext  };
    });
    }
	const EditTodo = async () => {
		
			await EditItem(Text,id);
			navigate("/see");
		
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
								onClick={EditTodo}
								className="btn btn-primary fw-bold"
								id="addtodobtn"
							>
								Edit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
