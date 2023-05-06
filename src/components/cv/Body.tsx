import { Education, Experience } from "../../types/cv_interface";
import "./styles/body.css";

interface BodyProps {
	summary: string;
	education: Education[];
	experience: Experience[];
}
const Body = ({ summary, education, experience }: BodyProps) => {
	return (
		<main className="body">
			<section className="body-section">
				<h4>SUMMARY</h4>
				<small>{summary}</small>
			</section>
			<section className="body-section">
				<h4>EDUCATION</h4>
				<ul>
					{education.map((item) => (
						<li className="section-item" key={item.id}>
							<span className="section-date">
								{item.from} - {item.to}
							</span>
							<div className="section-body">
								<h5>
									{item.course}, {item.institute}
								</h5>
								<small>{item.description}</small>
							</div>
						</li>
					))}
				</ul>
			</section>
			<section className="body-section">
				<h4>EXPERIENCE</h4>
				<ul>
					{experience.map((item) => (
						<li className="section-item" key={item.id}>
							<span className="section-date">
								{item.from} - {item.to}
							</span>
							<div className="section-body">
								<h5>
									{item.position}, {item.company}
								</h5>
								<small>{item.description}</small>
							</div>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default Body;
