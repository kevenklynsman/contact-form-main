export default function App() {
  return (
    <main className="min-h-screen bg-[hsl(148,38%,91%)] p-4 text-[hsl(187,24%,22%)] md:grid md:place-items-center md:p-6">
      <section className="mx-auto w-full max-w-[736px] rounded-2xl bg-white p-6 md:p-8 font-karla">
        <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>

        <form className="space-y-5">
          {/* Linha 1: First Name + Last Name */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name <span className="text-[hsl(169,82%,27%)]">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full cursor-pointer rounded-lg border border-[hsl(0,66%,54%)] px-3 py-2 outline-none"
              />
              <p className="text-sm text-[hsl(0,66%,54%)]">This field is required</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name <span className="text-[hsl(169,82%,27%)]">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full cursor-pointer rounded-lg border border-[hsl(0,66%,54%)] px-3 py-2 outline-none"
              />
              <p className="text-sm text-[hsl(0,66%,54%)]">This field is required</p>
            </div>
          </div>

          {/* Linha 2: Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full cursor-pointer rounded-lg border border-[hsl(0,66%,54%)] px-3 py-2 outline-none"
            />
            <p className="text-sm text-[hsl(0,66%,54%)]">Please enter a valid email address</p>
          </div>

          {/* Linha 3: Query Type com 2 checkboxes */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">
              Query Type <span className="text-[hsl(169,82%,27%)]">*</span>
            </legend>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 transition has-[:checked]:border-[hsl(169,82%,27%)] has-[:checked]:bg-[hsl(148,38%,91%)]">
                <input type="checkbox" name="queryType" value="general-enquiry" className="peer sr-only" />
                <span
                  aria-hidden="true"
                  className="h-5 w-5 rounded-full border border-slate-300 bg-white bg-center bg-no-repeat transition peer-checked:border-[hsl(169,82%,27%)] peer-checked:bg-[url('/assets/images/icon-radio-selected.svg')]"
                />
                <span>General Enquiry</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 transition has-[:checked]:border-[hsl(169,82%,27%)] has-[:checked]:bg-[hsl(148,38%,91%)]">
                <input type="checkbox" name="queryType" value="support-request" className="peer sr-only" />
                <span
                  aria-hidden="true"
                  className="h-5 w-5 rounded-full border border-slate-300 bg-white bg-center bg-no-repeat transition peer-checked:border-[hsl(169,82%,27%)] peer-checked:bg-[url('/assets/images/icon-radio-selected.svg')]"
                />
                <span>Support Request</span>
              </label>
            </div>
            <p className="text-sm text-[hsl(0,66%,54%)]">Please select a query type</p>
          </fieldset>

          {/* Linha 4: Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-[hsl(0,66%,54%)] px-3 py-2 outline-none"
            />
            <p className="text-sm text-[hsl(0,66%,54%)]">This field is required</p>
          </div>

          {/* Linha 5/6: Consentimento */}
          <label className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" name="consent" className="peer sr-only" />
            <span
              aria-hidden="true"
              className="h-[18px] w-[18px] rounded border border-slate-300 bg-white bg-center bg-no-repeat transition peer-checked:border-[hsl(169,82%,27%)] peer-checked:bg-[url('/assets/images/icon-checkbox-check.svg')]"
            />
            <span>
              I consent to being contacted by the team{" "}
              <span className="text-[hsl(169,82%,27%)]">*</span>
            </span>
          </label>
          <p className="text-sm text-[hsl(0,66%,54%)]">
            To submit this form, please consent to being contacted
          </p>

          {/* Botão Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[hsl(169,82%,27%)] px-4 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}
