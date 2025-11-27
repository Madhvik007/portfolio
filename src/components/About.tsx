import { FaGithub, FaLinkedin, FaJs, FaPython, FaReact, FaNode, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import { MdApi, MdSecurity } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
export default function About() {
    const languages = [
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Python', icon: FaPython }
    ];
    const webDev = [
        { name: 'React.js', icon: FaReact },
        { name: 'Node.js', icon: FaNode },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'REST APIs', icon: MdApi },
        { name: 'JWT Auth', icon: MdSecurity }
    ];
    const tools = [
        { name: 'Git & GitHub', icon: FaGitAlt },
        { name: 'VS Code', icon: VscCode },
        { name: 'Postman', icon: SiPostman },
        { name: 'Linux', icon: FaLinux },
        { name: 'System Design', icon: AiOutlineDeploymentUnit }
    ];

    return (
        <section id="about" className="scroll-mt-16 p-8 border-b-[3px] border-black bg-[var(--color-accent)]">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                <div className="neo-box p-8 bg-white">
                    <h2 className="text-4xl font-black mb-6 uppercase">About Me</h2>
                    <p className="text-lg font-mono mb-4">
                        I'm Madhvik, a Computer Engineering student and full-stack developer. I build things that work and solve real problems.
                    </p>
                    <p className="text-lg font-mono mb-6">
                        Focused on web development and system design. Always learning, always building.
                    </p>

                    <div className="flex gap-4 justify-end">
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/Madhvik007" className="text-3xl hover:text-[var(--color-main)] transition-all duration-500 hover:rotate-[360deg]" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/madhvikkathiria/" className="text-3xl hover:text-[var(--color-accent)] transition-all duration-500 hover:rotate-[360deg]" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="neo-box p-8 bg-black text-white">
                    <h2 className="text-4xl font-black mb-6 uppercase text-[var(--color-secondary)]">Skills</h2>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-main)]">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((skill) => (
                                <span key={skill.name} className="border-2 border-white px-3 py-2 font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default flex items-center gap-2">
                                    <skill.icon className="text-lg" />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-main)]">Web Development</h3>
                        <div className="flex flex-wrap gap-2">
                            {webDev.map((skill) => (
                                <span key={skill.name} className="border-2 border-white px-3 py-2 font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default flex items-center gap-2">
                                    <skill.icon className="text-lg" />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-main)]">Tools & Exploring</h3>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((skill) => (
                                <span key={skill.name} className="border-2 border-white px-3 py-2 font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default flex items-center gap-2">
                                    <skill.icon className="text-lg" />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
