export function NewsletterSignup() {
  return (
    <section className="border-t border-mist">
      <div className="container-editorial py-20 sm:py-24">
        <div className="mx-auto max-w-lg text-center">
          <p className="kicker">The Conscious Note</p>
          <h2 className="mt-3 font-serif text-3xl text-forest sm:text-4xl">
            A quiet letter, when it is ready.
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            The newsletter is not connected yet. This form is a placeholder until
            a mailing service is chosen.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" action="/api/newsletter" method="post">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              disabled
              placeholder="Coming soon"
              className="h-12 flex-1 border border-mist bg-ivory px-4 text-sm text-ink placeholder:text-stone disabled:cursor-not-allowed disabled:opacity-70"
            />
            <button
              type="button"
              disabled
              className="h-12 bg-forest/40 px-6 text-xs uppercase tracking-wideish text-ivory"
            >
              Coming soon
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
