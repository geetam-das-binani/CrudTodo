import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { getItems, deleteItem } from "../api";
import { useNavigate } from "react-router-dom";
export default function SeeLists() {
	const [{ items }, dispatch] = useStateValue();
	const navigate = useNavigate();

	const getdata = async () => {
		const response = await getItems();

		dispatch({
			type: "GET MY ITEMS",
			Lists: response.data,
		});
	};
	useEffect(() => {
		getdata();
	}, []);

	const handleDelete = async (id) => {
		await deleteItem(id);
		getdata();
	};

	if (items.length === 0) {
		return (
			<h2 style={{ textAlign: "center", marginTop: "2rem" }}>
				{" "}
				Please Enter Something to Edit
			</h2>
		);
	}
	return (
		<div className="header">
			<h2
				style={{ textAlign: "center", color: "black", margin: "1rem 0 1rem 0" }}
			>
				Edit List
			</h2>
			<div className="container-fluid">
				<ul className="list-unstyled row m-2">
					{items
						.sort((a, b) => b.Date - a.Date)
						.map((data) => {
							return (
								<div key={data._id} style={{ display: "flex" }}>
									<h4 className="mylist_input">{data.mytext}</h4>
									<button
										onClick={() => navigate(`/${data._id}`)}
										className="btn btn-warning fw-bold text-dark"
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(data._id)}
										className="btn btn-danger fw-bold text-dark "
									>
										Delete
									</button>
								</div>
							);
						})}
				</ul>
			</div>
		</div>
	);
}
