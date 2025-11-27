import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-[3px] border-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter hover:text-[var(--color-main)] transition-colors">
          MY_PORTFOLIO
        </Link>
        <nav className="hidden md:flex gap-8 font-bold">
          <Link href="#about" className="hover:underline decoration-[3px] decoration-[var(--color-main)] underline-offset-4">
            ABOUT
          </Link>
          <Link href="#projects" className="hover:underline decoration-[3px] decoration-[var(--color-accent)] underline-offset-4">
            PROJECTS
          </Link>
          <Link href="#experience" className="hover:underline decoration-[3px] decoration-[var(--color-main)] underline-offset-4">
            EXPERIENCE
          </Link>
          <Link href="#education" className="hover:underline decoration-[3px] decoration-[var(--color-secondary)] underline-offset-4">
            EDUCATION
          </Link>
          <Link href="#contact" className="hover:underline decoration-[3px] decoration-[var(--color-secondary)] underline-offset-4">
            CONTACT
          </Link>
        </nav>
        <button className="neo-button md:hidden">
          MENU
        </button>
      </div>
    </header>
  );
}
