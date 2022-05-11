const people = [
  {
    name: "Jason Anthony",
    role: "Product Owner",
    imageUrl: "/JasonA.jpg",
    githubUrl: "https://github.com/Janthony125",
    linkedinUrl: "https://www.linkedin.com/in/janthony125/",
  },
  {
    name: "David Harboyan",
    role: "Scrum Master",
    imageUrl: "/DavidH.jpg",
    githubUrl: "https://github.com/dharbo",
    linkedinUrl: "https://www.linkedin.com/in/david-harboyan-9b62b6208/",
  },
  {
    name: "Clemente Solorio",
    role: "Lead Developer",
    imageUrl: "/Clemente.jpg",
    githubUrl: "https://github.com/clxmente",
    linkedinUrl: "https://www.linkedin.com/in/clementesolorio/",
  },
  {
    name: "Matthew Iversen",
    role: "Developer",
    imageUrl: "/Matthew.jpg",
    githubUrl: "https://github.com/matthewiversen?tab=stars",
    linkedinUrl: "https://www.linkedin.com/in/matthewiversen/",
  },
  {
    name: "Patrick Phe",
    role: "Developer",
    imageUrl: "/Patrick.jpg",
    githubUrl: "https://github.com/Patrickphe",
    linkedinUrl: "https://www.linkedin.com/in/patrick-phe-65a842222/",
  },
];

export default function Team() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-500">
              Meet the Tender team
            </h2>
            <p className="text-xl text-black">
              If you&apos;re ever in need of figuring out what your next meal
              should be, feel free to contact us and we&apos;ll do our best to
              help you with that!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 sm:h-72 sm:w-72 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={person.githubUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Github</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 64 64"
                          >
                            <path d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
