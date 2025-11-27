export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center p-8 bg-[var(--color-secondary)] border-b-[3px] border-black">
            <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Madhvik<span className="animate-blink">_</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl font-mono bg-white p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
                Computer Engineering Student & Full-Stack Developer
            </p>
            <div className="flex gap-6">
                <a href="#projects" className="neo-button text-xl px-8 py-4 bg-[var(--color-main)]">
                    VIEW WORK
                </a>
                <a href="#contact" className="neo-button text-xl px-8 py-4 bg-white hover:bg-gray-100">
                    CONTACT ME
                </a>
            </div>
        </section>
    );
}
