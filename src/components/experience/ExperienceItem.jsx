const experience = [
	{
		date: '2025 - Present',
		title: (
			<p className="font-semibold">
				Fullstack Developer @ <a href="https://www.ethiack.com/">Ethiack</a> {' '}
				<p className="text-gray-500 text-sm">Portugal, Remote</p>
			</p>
		),
		summary:
			'I work as a Fullstack Developer at Ethiack, a cybersecurity company that combines AI-powered pentesting with expert insights to continuously uncover, validate and prioritize real risks. improve security posture. I am responsible for developing the company\'s portal applications.',
		techs: {
			Python: 'skill-icons:python-light',
			NextJS: 'logos:nextjs-icon',
			React: 'logos:react',
			PostgresSQL: 'logos:postgresql',
			Git: 'logos:git-icon',
		},
	},
	
	{
		date: '2022 - 2025',
		title: (
			<p className="font-semibold">
				Freelancer @ -{' '}
				<p className="text-gray-500 text-sm">Portugal, Remote</p>
			</p>
		),
		summary:
			'I began my freelance journey to challenge myself and explore new languages and approaches. Developed several websites and platforms using the latest tech stacks to stay updated and continuously learn new technologies, delivering dynamic and responsive solutions to clients.',
		techs: {
			NextJS: 'logos:nextjs-icon',
			TailwindCSS: 'skill-icons:tailwindcss-light',
			React: 'logos:react',
			Remix: 'skill-icons:remix-light',
			PostgresSQL: 'logos:postgresql',
			Heroku: 'simple-icons:heroku',
			Wordpress: 'skill-icons:wordpress',
			Figma: 'skill-icons:figma-light',
			Astro: 'logos:astro-icon',
			Vercel: 'logos:vercel-icon',
			Git: 'logos:git-icon',
			Hostinger: 'simple-icons:hostinger',
		},
	},
	{
		date: '2020 - 2022',
		title: (
			<p className="font-semibold">
				Web Developer @{' '}
				<a href="https://www.accenture.com/pt-pt">Accenture</a>
				<p className="text-gray-500 text-sm">Portugal, Remote</p>
			</p>
		),
		summary:
			'Worked on various projects, ranging from automation/load testing to web development. Initially focused on Python scripting and automation testing using JMeter, alongside data analysis in Excel. Later transitioned to an outsourcing role for Valvoline, developing a platform with Angular and Java Spring Boot, following best coding practices and Git conventions. Gained experience working with Agile methodologies.',
		techs: {
			Python: 'skill-icons:python-light',
			JavaScript: 'material-symbols:javascript',
			Angular: 'skill-icons:angular-light',
			Excel: 'vscode-icons:file-type-excel',
			JMeter: 'simple-icons:apachejmeter',
			Java: 'skill-icons:java-light',
			'Spring Boot': 'skill-icons:spring-light',
			Git: 'logos:git-icon',
		},
	},
];

const urls = {
	Angular: 'https://angular.io',
	Excel: 'https://www.microsoft.com/en-us/microsoft-365/excel',
	JMeter: 'https://jmeter.apache.org/',
	NextJS: 'https://nextjs.org',
	React: 'https://react.dev',
	Remix: 'https://remix.run',
	Python: 'https://www.python.org/',
	Java: 'https://www.java.com/en/',
	'Java Spring Boot': 'https://spring.io/projects/spring-boot',
	PostgresSQL: 'https://www.postgresql.org/',
	Heroku: 'https://www.heroku.com/',
	Wordpress: 'https://wordpress.org/',
	Figma: 'https://www.figma.com/',
	Astro: 'https://astro.build/',
	JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	Hostinger: 'https://www.hostinger.com/',
};

function ExperienceItem() {
	return (
		<div className="flex flex-col gap-y-2 max-w-3xl">
			{experience.map((item, i) => (
				<div
					key={i}
					className="flex items-start justify-start gap-x-2  "
				>
					<p className="text-white min-w-28">{item.date}</p>
					<img
						className="hidden md:block"
						src="assets/line.svg"
						alt="line"
					/>
					<div className="flex flex-col text-white ">
						{item.title}

						<p className="text-sm text-gray-400">
							{item.summary}
						</p>
						<p className="font-semibold py-1">Techs:</p>
						<div className="flex flex-wrap gap-2">
							{Object.keys(item.techs).map((tech, index) => (
								<a href={urls[tech]} target="_blank">
									<div className="flex items-center bg-gray-800 rounded-md px-2 py-1 ">
										<iconify-icon
											icon={`${item.techs[tech].toLowerCase()}`}
											width="15"
											height="15"
										/>
										<span className="ml-2 text-sm">
											{tech}
										</span>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ExperienceItem;
