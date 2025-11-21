export default function About() {
    return (
        <section id="about" className="p-8 border-b-[3px] border-black bg-[var(--color-accent)]">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                <div className="neo-box p-8 bg-white">
                    <h2 className="text-4xl font-black mb-6 uppercase">About Me</h2>
                    <p className="text-lg font-mono mb-4">
                        I'm a full-stack developer who believes in bold design and clean code.
                        I don't just build websites; I create digital experiences that leave a mark.
                    </p>
                    <p className="text-lg font-mono">
                        Based in the digital realm, available worldwide.
                    </p>
                </div>

                <div className="neo-box p-8 bg-black text-white">
                    <h2 className="text-4xl font-black mb-6 uppercase text-[var(--color-secondary)]">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {['React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'Design'].map((skill) => (
                            <span key={skill} className="border-2 border-white px-3 py-1 font-bold font-mono hover:bg-white hover:text-black transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
