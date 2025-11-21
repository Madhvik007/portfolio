export default function Contact() {
    return (
        <section id="contact" className="p-8 bg-[var(--color-main)] border-b-[3px] border-black">
            <div className="container mx-auto max-w-4xl">
                <div className="neo-box p-8 md:p-12 bg-white">
                    <h2 className="text-5xl font-black mb-8 uppercase text-center">Let's Talk</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="font-bold uppercase block">Name</label>
                                <input type="text" className="neo-input" placeholder="YOUR NAME" />
                            </div>
                            <div className="space-y-2">
                                <label className="font-bold uppercase block">Email</label>
                                <input type="email" className="neo-input" placeholder="YOUR@EMAIL.COM" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="font-bold uppercase block">Message</label>
                            <textarea className="neo-input h-32 resize-none" placeholder="TELL ME ABOUT YOUR PROJECT"></textarea>
                        </div>
                        <button type="button" className="neo-button w-full text-xl py-4 bg-black text-white hover:bg-gray-800">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
