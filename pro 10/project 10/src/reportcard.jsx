import { useMemo, useState } from 'react';
import './reportcard.css';

const initialSubjects = [
	{ name: 'English', category: 'Language', marks: 86 },
	{ name: 'Mathematics', category: 'Core subject', marks: 92 },
	{ name: 'Science', category: 'Core subject', marks: 88 },
	{ name: 'Social Studies', category: 'Core subject', marks: 90 },
	{ name: 'Computer Science', category: 'Elective', marks: 96 },
	{ name: 'Tamil', category: 'Language', marks: 84 },
];

function getGrade(percentage) {
	if (percentage >= 90) return 'A+';
	if (percentage >= 80) return 'A';
	if (percentage >= 70) return 'B';
	if (percentage >= 60) return 'C';
	if (percentage >= 50) return 'D';
	if (percentage >= 35) return 'E';
	return 'F';
}

function ReportCard() {
	const [student, setStudent] = useState({
		name: 'Aarav Kumar',
		roll: 'ST-0248',
		grade: 'Grade 10 · Section A',
		term: 'Academic year 2025–2026',
	});
	const [subjects, setSubjects] = useState(initialSubjects);

	const results = useMemo(() => {
		const total = subjects.reduce((sum, subject) => sum + (Number(subject.marks) || 0), 0);
		const maximum = subjects.length * 100;
		const percentage = maximum ? (total / maximum) * 100 : 0;
		const passed = subjects.every((subject) => Number(subject.marks) >= 35);

		return { total, maximum, percentage, passed, grade: getGrade(percentage) };
	}, [subjects]);

	const updateStudent = (field, value) => {
		setStudent((current) => ({ ...current, [field]: value }));
	};

	const updateMarks = (subjectName, value) => {
		const marks = value === '' ? '' : Math.min(100, Math.max(0, Number(value)));
		setSubjects((current) => current.map((subject) => (
			subject.name === subjectName ? { ...subject, marks } : subject
		)));
	};

	return (
		<main className="report-page">
			<article className="report-sheet" aria-labelledby="report-title">
				<header className="report-topbar">
					<div className="school-mark" aria-hidden="true">N</div>
					<div className="school-details">
						<p className="report-eyebrow">Northstar learning community</p>
						<p className="school-caption">Student progress record</p>
					</div>
					<button className="report-print no-print" type="button" onClick={() => window.print()}>
						Print report
					</button>
				</header>

				<section className="report-heading">
					<div>
						<p className="report-eyebrow">End of term assessment</p>
						<h1 id="report-title">Report card<span>.</span></h1>
					</div>
					<label className="term-field">
						<span>School year</span>
						<input
							aria-label="Academic year"
							value={student.term}
							onChange={(event) => updateStudent('term', event.target.value)}
						/>
					</label>
				</section>

				<section className="student-details" aria-label="Student details">
					<label className="student-name-field">
						<span>Student</span>
						<input
							aria-label="Student name"
							value={student.name}
							onChange={(event) => updateStudent('name', event.target.value)}
						/>
					</label>
					<label>
						<span>Class</span>
						<input
							aria-label="Student class"
							value={student.grade}
							onChange={(event) => updateStudent('grade', event.target.value)}
						/>
					</label>
					<label>
						<span>Student ID</span>
						<input
							aria-label="Student ID"
							value={student.roll}
							onChange={(event) => updateStudent('roll', event.target.value)}
						/>
					</label>
				</section>

				<section className="marks-section" aria-labelledby="marks-heading">
					<div className="section-heading">
						<div>
							<p className="report-eyebrow">Academic overview</p>
							<h2 id="marks-heading">Subject results</h2>
						</div>
						<p className="edit-hint">Select a mark to edit</p>
					</div>

					<div className="marks-table-wrap">
						<table className="marks-table">
							<thead>
								<tr>
									<th scope="col">Subject</th>
									<th scope="col">Area</th>
									<th scope="col">Mark / 100</th>
									<th scope="col">Result</th>
								</tr>
							</thead>
							<tbody>
								{subjects.map((subject) => {
									const hasMark = subject.marks !== '';
									const passed = hasMark && Number(subject.marks) >= 35;

									return (
										<tr key={subject.name}>
											<th scope="row">{subject.name}</th>
											<td className="subject-category">{subject.category}</td>
											<td>
												<label className="mark-input-wrap">
													<span className="visually-hidden">{subject.name} mark</span>
													<input
														type="number"
														min="0"
														max="100"
														value={subject.marks}
														onChange={(event) => updateMarks(subject.name, event.target.value)}
													/>
												</label>
											</td>
											<td>
												<span className={`result-pill${hasMark ? (passed ? ' is-pass' : ' is-fail') : ''}`}>
													{hasMark ? (passed ? 'Pass' : 'Needs work') : 'Enter mark'}
												</span>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</section>

				<section className="report-summary" aria-label="Overall result">
					<div className="summary-grade">
						<span className="summary-label">Overall grade</span>
						<strong>{results.grade}</strong>
					</div>
					<div className="summary-score">
						<div className="summary-score-top">
							<span className="summary-label">Class average</span>
							<strong>{results.percentage.toFixed(1)}%</strong>
						</div>
						<div
							className="score-track"
							role="progressbar"
							aria-label="Overall percentage"
							aria-valuemin="0"
							aria-valuemax="100"
							aria-valuenow={results.percentage.toFixed(1)}
						>
							<span style={{ width: `${results.percentage}%` }} />
						</div>
						<span className="summary-total">{results.total} / {results.maximum} marks</span>
					</div>
					<div className="summary-status">
						<span className="summary-label">Standing</span>
						<strong className={results.passed ? 'standing-pass' : 'standing-support'}>
							{results.passed ? 'Promoted' : 'Support needed'}
						</strong>
					</div>
				</section>

				<footer className="report-footer">
					<p>{results.passed ? 'Strong work. Keep your curiosity moving forward.' : 'A little extra support can make a big difference.'}</p>
					<span>Generated for {student.name || 'student'}</span>
				</footer>
			</article>
		</main>
	);
}

export default ReportCard;
