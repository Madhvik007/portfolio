export default function About() {
    return (
        <section id="about" className="scroll-mt-16 p-8 border-b-[3px] border-black bg-[var(--color-accent)]">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                <div className="neo-box p-8 bg-white">
                    <h2 className="text-4xl font-black mb-6 uppercase">About Me</h2>
                    <p className="text-lg font-mono mb-4">
                        Hi, I’m Madhvik, a Computer Engineering student and backend-focused web developer who’s slowly but steadily upgrading into full-stack territory.
                    </p>
                    <p className="text-lg font-mono mb-4">
                        I like building things that actually work, not just things that look pretty in screenshots. My main interests are web development, system design basics, and using programming to solve real problems instead of tutorial examples that add two numbers and call it a day.
                    </p>
                    <p className="text-lg font-mono">
                        I’m currently studying Computer Engineering while actively working on projects, hackathons, and independent learning to sharpen my development skills.
                    </p>
                </div>

                <div className="neo-box p-8 bg-black text-white">
                    <h2 className="text-4xl font-black mb-6 uppercase text-[var(--color-secondary)]">Skills</h2>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-main)]">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {['JavaScript', 'TypeScript', 'Python', 'SQL'].map((skill) => (
                                <span key={skill} className="border-2 border-white px-2 py-1 font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-main)]">Web Development</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs', 'JWT Auth'].map((skill) => (
                                <span key={skill} className="border-2 border-white px-2 py-1 font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-main)]">Tools & Exploring</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Git & GitHub', 'VS Code', 'Postman', 'Linux', 'Full-stack Arch', 'AI Apps', 'System Design'].map((skill) => (
                                <span key={skill} className="border-2 border-white px-2 py-1 font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
