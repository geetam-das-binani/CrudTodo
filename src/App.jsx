import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seelists from './components/Seelists'
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import EditTodo from "./components/EditTodo";
export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Todo />} />
				<Route path="/see" element={<Seelists />} />
				<Route path="/:id" element={<EditTodo/>} />
			</Routes>
		</BrowserRouter>
	);
}
