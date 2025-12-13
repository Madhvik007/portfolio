export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-16 p-8 border-b-[3px] border-black">
            <div className="container mx-auto">
                <h2 className="text-4xl font-black mb-12 uppercase text-center">Experience & Activities</h2>

                <div className="max-w-2xl mx-auto">
                    <div className="neo-box p-8 bg-white">
                        <h3 className="text-2xl font-black uppercase mb-4">Open Source Contributor</h3>
                        <div className="mb-4">
                            <span className="yellow font-mono font-bold bg-[var(--color-main)] px-2 py-1 border border-black text-sm">
                                Hacktoberfest 2022 • 2023 • 2025
                            </span>
                        </div>
                        <ul className="list-disc list-inside font-mono space-y-3">
                            <li>Contributed to open-source repositories</li>
                            <li>Worked with Git-based workflows</li>
                            <li>Collaborated asynchronously with global developers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
