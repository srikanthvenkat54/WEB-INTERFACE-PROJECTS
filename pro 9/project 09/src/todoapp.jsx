import { useEffect, useMemo, useState } from 'react';
import './todoap.css';

const STORAGE_KEY = 'daily-list-tasks';

function readSavedTasks() {
	try {
		const savedTasks = localStorage.getItem(STORAGE_KEY);
		const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
		return Array.isArray(parsedTasks) ? parsedTasks : [];
	} catch {
		return [];
	}
}

function TodoApp() {
	const [tasks, setTasks] = useState(readSavedTasks);
	const [title, setTitle] = useState('');
	const [query, setQuery] = useState('');
	const [filter, setFilter] = useState('all');
	const [editingId, setEditingId] = useState(null);
	const [editTitle, setEditTitle] = useState('');

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	const remainingCount = tasks.filter((task) => !task.completed).length;
	const completedCount = tasks.length - remainingCount;
	const visibleTasks = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();

		return tasks.filter((task) => {
			const matchesFilter = filter === 'all'
				|| (filter === 'active' && !task.completed)
				|| (filter === 'completed' && task.completed);
			return matchesFilter && task.title.toLowerCase().includes(normalizedQuery);
		});
	}, [filter, query, tasks]);

	const addTask = (event) => {
		event.preventDefault();
		const taskTitle = title.trim();
		if (!taskTitle) return;

		setTasks((currentTasks) => [
			...currentTasks,
			{ id: crypto.randomUUID(), title: taskTitle, completed: false },
		]);
		setTitle('');
	};

	const toggleTask = (taskId) => {
		setTasks((currentTasks) => currentTasks.map((task) => (
			task.id === taskId ? { ...task, completed: !task.completed } : task
		)));
	};

	const deleteTask = (taskId) => {
		setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
		if (editingId === taskId) setEditingId(null);
	};

	const startEditing = (task) => {
		setEditingId(task.id);
		setEditTitle(task.title);
	};

	const saveEdit = (event) => {
		event.preventDefault();
		const updatedTitle = editTitle.trim();
		if (!updatedTitle) return;

		setTasks((currentTasks) => currentTasks.map((task) => (
			task.id === editingId ? { ...task, title: updatedTitle } : task
		)));
		setEditingId(null);
	};

	const clearCompleted = () => {
		setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
	};

	return (
		<main className="todo-page">
			<section className="todo-panel" aria-labelledby="todo-heading">
				<header className="todo-header">
					<div>
						<p className="todo-kicker">YOUR SPACE, IN ORDER</p>
						<h1 id="todo-heading">Daily list<span>.</span></h1>
						<p className="todo-subtitle">A little progress adds up.</p>
					</div>
					<div className="todo-count" aria-label={`${remainingCount} tasks remaining`}>
						<strong>{String(remainingCount).padStart(2, '0')}</strong>
						<span>left to do</span>
					</div>
				</header>

				<form className="todo-add-form" onSubmit={addTask}>
					<label className="visually-hidden" htmlFor="new-task">Add a task</label>
					<input
						id="new-task"
						type="text"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						placeholder="What needs your attention?"
						maxLength={120}
					/>
					<button type="submit" disabled={!title.trim()}>Add task</button>
				</form>

				<div className="todo-tools">
					<label className="todo-search">
						<span aria-hidden="true">⌕</span>
						<span className="visually-hidden">Search tasks</span>
						<input
							type="search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Find a task"
						/>
					</label>
					<div className="todo-filters" role="group" aria-label="Filter tasks">
						{['all', 'active', 'completed'].map((option) => (
							<button
								type="button"
								key={option}
								className={filter === option ? 'is-selected' : ''}
								aria-pressed={filter === option}
								onClick={() => setFilter(option)}
							>
								{option[0].toUpperCase() + option.slice(1)}
							</button>
						))}
					</div>
				</div>

				<ul className="todo-list" aria-live="polite">
					{visibleTasks.map((task) => (
						<li className={`todo-item${task.completed ? ' is-complete' : ''}`} key={task.id}>
							<input
								className="todo-check"
								type="checkbox"
								checked={task.completed}
								onChange={() => toggleTask(task.id)}
								aria-label={`${task.completed ? 'Mark incomplete' : 'Complete'}: ${task.title}`}
							/>
							{editingId === task.id ? (
								<form className="todo-edit-form" onSubmit={saveEdit}>
									<label className="visually-hidden" htmlFor={`edit-${task.id}`}>Edit task</label>
									<input
										id={`edit-${task.id}`}
										autoFocus
										value={editTitle}
										onChange={(event) => setEditTitle(event.target.value)}
										maxLength={120}
									/>
									<button type="submit" disabled={!editTitle.trim()}>Save</button>
									<button type="button" className="todo-cancel" onClick={() => setEditingId(null)}>Cancel</button>
								</form>
							) : (
								<>
									<span className="todo-task-title">{task.title}</span>
									<div className="todo-item-actions">
										<button type="button" onClick={() => startEditing(task)} aria-label={`Edit ${task.title}`}>
											Edit
										</button>
										<button type="button" className="todo-delete" onClick={() => deleteTask(task.id)} aria-label={`Delete ${task.title}`}>
											Delete
										</button>
									</div>
								</>
							)}
						</li>
					))}
				</ul>

				{visibleTasks.length === 0 && (
					<div className="todo-empty">
						<span aria-hidden="true">✳</span>
						<p>{query ? 'No tasks match your search.' : tasks.length ? 'Nothing in this view.' : 'Your list is clear. Add a task to get started.'}</p>
					</div>
				)}

				<footer className="todo-footer">
					<span>{remainingCount} active · {completedCount} completed</span>
					<button type="button" onClick={clearCompleted} disabled={completedCount === 0}>
						Clear completed
					</button>
				</footer>
			</section>
		</main>
	);
}

export default TodoApp;
