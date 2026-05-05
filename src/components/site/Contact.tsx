import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const ease = [0.22, 1, 0.36, 1] as const;

function Field({
  label,
  type = "text",
  textarea = false,
  name,
  required,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  name: string;
  required?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const [val, setVal] = useState("");
  const active = focus || val.length > 0;

  const common = {
    name,
    required,
    value: val,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: (e: any) => setVal(e.target.value),
    className:
      "w-full bg-transparent border-0 border-b border-border pt-7 pb-3 text-base outline-none focus:border-foreground transition-colors",
  };

  return (
    <label className="relative block">
      <motion.span
        animate={{
          y: active ? 0 : 24,
          fontSize: active ? "0.7rem" : "1rem",
          letterSpacing: active ? "0.2em" : "0em",
          opacity: active ? 0.6 : 0.5,
        }}
        transition={{ duration: 0.3, ease }}
        className="absolute left-0 top-0 uppercase pointer-events-none text-muted-foreground"
      >
        {label}
      </motion.span>
      {textarea ? <textarea rows={4} {...common} /> : <input type={type} {...common} />}
    </label>
  );
}

export default function Contact() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 border-t hairline">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">/ 06 — Contact</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="display text-4xl md:text-6xl font-light leading-[1.05]"
          >
            Let's make something quietly remarkable.
          </motion.h2>

          <div className="mt-12 space-y-4 text-sm text-muted-foreground">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] mb-1">Studio</div>
              hello@outof.office
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] mb-1">Press</div>
              press@outof.office
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="md:col-span-7 space-y-2"
        >
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Tell us about the project" name="message" textarea required />

          <div className="pt-8">
            <button
              type="submit"
              className="group inline-flex items-center gap-4 bg-foreground text-background pl-7 pr-3 py-3 text-sm tracking-wide hover:gap-6 transition-all"
            >
              Start Your Project
              <span className="h-8 w-8 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                →
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
