import {  FieldErrors, useForm } from "react-hook-form";

import {  ToastContainer } from "react-toastify";
import { showToast } from "./components/Toast/toast";

type QueryType = "general" | "support";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: QueryType | "";
  message: string;
  consent: boolean;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
  });

  const onValid = (data: FormData) => {
    console.log("Dados válidos:", data);
    showToast("Mensagem enviada com sucesso!", "success");
    reset();
  };

  const onInvalid = (errors: FieldErrors<FormData>) => {
    console.log("Dados inválidos:", errors);
  };

  return (
    <main className="min-h-screen bg-[hsl(148,38%,91%)] p-4 text-[hsl(187,24%,22%)] md:grid md:place-items-center md:p-6">
      <section className="mx-auto w-full max-w-[736px] rounded-2xl bg-white p-6 font-karla md:p-8">
        <h2 className="mb-6 text-3xl font-bold">Fale Conosco</h2>

        <form className="space-y-5" onSubmit={handleSubmit(onValid, onInvalid)}>
          {/* Linha 1: Nome + Sobrenome */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                Nome <span className="text-[hsl(169,82%,27%)]">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full cursor-pointer rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-[hsl(169,82%,27%)]"
                {...register("firstName", {
                  required: "Nome é obrigatório",
                })}
              />
              {errors.firstName && (
                <p className="text-sm text-[hsl(0,66%,54%)]">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Sobrenome <span className="text-[hsl(169,82%,27%)]">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full cursor-pointer rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-[hsl(169,82%,27%)]"
                {...register("lastName", {
                  required: "Sobrenome é obrigatório",
                })}
              />
              {errors.lastName && (
                <p className="text-sm text-[hsl(0,66%,54%)]">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Linha 2: Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Endereço de Email{" "}
              <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full cursor-pointer rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-[hsl(169,82%,27%)]"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-[hsl(0,66%,54%)]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Linha 3: Query Type com 2 checkboxes */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">
              Tipo de Consulta{" "}
              <span className="text-[hsl(169,82%,27%)]">*</span>
            </legend>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 transition has-[:checked]:border-[hsl(169,82%,27%)] has-[:checked]:bg-[hsl(148,38%,91%)]">
                <input
                  type="radio"
                  value="general"
                  {...register("queryType", {
                    required: "Tipo de consulta é obrigatório",
                  })}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="h-5 w-5 rounded-full border border-slate-300 bg-white bg-center bg-no-repeat transition peer-checked:border-[hsl(169,82%,27%)] peer-checked:bg-[url('/assets/images/icon-radio-selected.svg')]"
                />
                <span>Consulta Geral</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 transition has-[:checked]:border-[hsl(169,82%,27%)] has-[:checked]:bg-[hsl(148,38%,91%)]">
                <input
                  type="radio"
                  value="support"
                  {...register("queryType", {
                    required: "Tipo de consulta é obrigatório",
                  })}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="h-5 w-5 rounded-full border border-slate-300 bg-white bg-center bg-no-repeat transition peer-checked:border-[hsl(169,82%,27%)] peer-checked:bg-[url('/assets/images/icon-radio-selected.svg')]"
                />
                <span>Solicitação de Suporte</span>
              </label>
            </div>
            {errors.queryType && (
              <p className="text-sm text-[hsl(0,66%,54%)]">
                {errors.queryType?.message}
              </p>
            )}
          </fieldset>

          {/* Linha 4: Mensagem */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Mensagem <span className="text-[hsl(169,82%,27%)]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full cursor-pointer rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-[hsl(169,82%,27%)]"
              {...register("message", {
                required: "Mensagem é obrigatória",
                minLength: {
                  value: 10,
                  message: "A mensagem deve conter no mínimo 10 caracteres",
                },
              })}
            />

            {errors.message && (
              <p className="text-sm text-[hsl(0,66%,54%)]">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Linha 5/6: Consentimento */}
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="peer sr-only"
              {...register("consent", {
                required: "You must consent to be contacted",
              })}
            />
            <span
              aria-hidden="true"
              className="h-[18px] w-[18px] rounded border border-slate-300 bg-white bg-center bg-no-repeat transition peer-checked:border-[hsl(169,82%,27%)] peer-checked:bg-[url('/assets/images/icon-checkbox-check.svg')]"
            />
            <span>
              I consent to being contacted by the team{" "}
              <span className="text-[hsl(169,82%,27%)]">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="text-sm text-[hsl(0,66%,54%)]">
              {errors.consent.message}
            </p>
          )}

          {/* Botão Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[hsl(169,82%,27%)] px-4 py-3 font-semibold text-white transition hover:opacity-90"
            disabled={isSubmitting || !isValid}
          >
            Submit
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </main>
  );
}
