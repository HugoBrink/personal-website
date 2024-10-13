const experience = [
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
			'Developed and maintained web applications using Angular and .NET Core, focusing on performance and security.',
		techs: {
			Python: 'skill-icons:python-light',
			JavaScript: 'material-symbols:javascript',
			Angular: 'skill-icons:angular-light',
			Excel: 'vscode-icons:file-type-excel',
			JMeter: 'simple-icons:apachejmeter',
			Java: 'skill-icons:java-light',
			'Java Spring Boot': 'skill-icons:spring-light',
			Git: 'logos:git-icon',
		},
	},
	{
		date: '2022 - Present',
		title: (
			<p className="font-semibold">
				Freelancer @ -{' '}
				<p className="text-gray-500 text-sm">Portugal, Remote</p>
			</p>
		),
		summary:
			'Developed and maintained web applications using Angular and .NET Core, focusing on performance and security.',
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
					<img src="assets/line.svg" alt="line" />
					<div className="flex flex-col text-white ">
						{item.title}
						<p className="font-semibold py-1">Summary:</p>
						<li className="text-sm ">{item.summary}</li>
						<p className="font-semibold py-1">Techs:</p>
						<div className="flex flex-wrap gap-2">
							{Object.keys(item.techs).map((tech, index) => (
								<a href={urls[tech]} target="_blank">
									<div
										key={index}
										className="flex items-center bg-gray-800 rounded-md p-2"
									>
										<iconify-icon
											icon={`${item.techs[tech].toLowerCase()}`}
											width="20"
											height="20"
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
