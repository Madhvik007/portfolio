export default function Projects() {
    const projects = [
        {
            title: "Project Alpha",
            description: "A radical approach to e-commerce.",
            tags: ["Next.js", "Stripe"],
            color: "bg-[var(--color-main)]"
        },
        {
            title: "Neon Dash",
            description: "Real-time analytics dashboard.",
            tags: ["React", "D3.js"],
            color: "bg-[var(--color-secondary)]"
        },
        {
            title: "Brutal UI",
            description: "Open source component library.",
            tags: ["Tailwind", "NPM"],
            color: "bg-[var(--color-accent)]"
        }
    ];

    return (
        <section id="projects" className="p-8 border-b-[3px] border-black bg-white">
            <div className="container mx-auto">
                <h2 className="text-5xl font-black mb-12 uppercase text-center">Selected Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="neo-box p-0 flex flex-col h-full transition-transform hover:-translate-y-2">
                            <div className={`h-48 ${project.color} border-b-[3px] border-black flex items-center justify-center`}>
                                <span className="text-4xl font-black opacity-50">IMG</span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-black mb-2 uppercase">{project.title}</h3>
                                <p className="font-mono mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold border border-black px-2 py-1 bg-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="neo-button w-full">
                                    VIEW PROJECT
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
