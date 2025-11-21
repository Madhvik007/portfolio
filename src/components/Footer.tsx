export default function Footer() {
    return (
        <footer className="p-8 bg-black text-white text-center border-t-[3px] border-black">
            <div className="container mx-auto">
                <p className="font-mono font-bold mb-4">
                    © {new Date().getFullYear()} NEO_BRUTAL_PORTFOLIO. ALL RIGHTS RESERVED.
                </p>
                <div className="flex justify-center gap-6 font-bold">
                    <a href="#" className="hover:text-[var(--color-main)]">TWITTER</a>
                    <a href="#" className="hover:text-[var(--color-secondary)]">GITHUB</a>
                    <a href="#" className="hover:text-[var(--color-accent)]">LINKEDIN</a>
                </div>
            </div>
        </footer>
    );
}
