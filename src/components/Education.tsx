export default function Education() {
    return (
        <section id="education" className="scroll-mt-16 p-8 border-b-[3px] border-black bg-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-black mb-12 uppercase text-center">Education</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="neo-box p-8 bg-[var(--color-secondary)] mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h3 className="text-2xl font-black uppercase">Bachelor of Engineering (B.E.)</h3>
                            <span className="font-mono font-bold bg-white px-3 py-1 border-2 border-black mt-2 md:mt-0">
                                Currently in 7th Semester
                            </span>
                        </div>
                        <p className="text-xl font-bold mb-2">Computer Engineering</p>
                        <p className="font-mono mb-1">Gujarat Technological University (GTU)</p>
                        <p className="font-mono text-sm opacity-75">📍 Bhuj, Gujarat, India</p>
                    </div>

                    <div className="neo-box p-8 bg-white">
                        <h3 className="text-xl font-black uppercase mb-6">Relevant Coursework</h3>
                        <div className="grid md:grid-cols-2 gap-4 font-mono">
                            <ul className="list-disc list-inside space-y-2">
                                <li>Data Structures & Algorithms</li>
                                <li>Python for Data Science</li>
                                <li>Software Engineering</li>
                                <li>Computer Networks</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Artificial Intelligence</li>
                                <li>Professional Ethics</li>
                                <li>Database Management Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
