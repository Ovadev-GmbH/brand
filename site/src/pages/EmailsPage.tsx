import { useEffect, useRef, useState } from "react";
import type { Pkg } from "../types";
import { PageHeader, SectionHeader } from "../components/PageHeader";
import { emailLangs, emails, emailsReadme, emailTenants, emailUrl, type EmailLang } from "../lib/emails";
import "../styles/asset-library.css";
import "../styles/emails.css";

/* Each mail in a frame across the column, scaled up from its 540 px so it
   fills the width, and as tall as the mail plus its 1 px border. The height follows the mail
   while its web font loads, so the frame never scrolls. */
function Mail({ src, title }: { src: string; title: string }) {
  const [height, setHeight] = useState(640);
  const observer = useRef<ResizeObserver | null>(null);
  useEffect(() => () => observer.current?.disconnect(), []);
  function fit(frame: HTMLIFrameElement) {
    const doc = frame.contentDocument;
    if (!doc) return;
    doc.documentElement.style.overflow = "hidden";
    const measure = () => {
      doc.documentElement.style.zoom = String(Math.max(1, frame.clientWidth / 620));
      setHeight(Math.ceil(doc.body.getBoundingClientRect().height) + 2);
    };
    measure();
    observer.current?.disconnect();
    observer.current = new ResizeObserver(measure);
    observer.current.observe(doc.body);
    observer.current.observe(frame);
  }
  return <iframe className="em-frame" src={src} title={title} scrolling="no" style={{ height }} onLoad={e => fit(e.currentTarget)} />;
}

export function EmailsPage({ pkg }: { pkg: Pkg }) {
  const [tenant, setTenant] = useState<string>(emailTenants[0].slug);
  const [lang, setLang] = useState<EmailLang>("de");
  return <article className="asset-library">
    <PageHeader title="E-mails" md={emailsReadme}>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">Every mail a visitor or a partner receives from a {pkg.name} shop. The mail wears the tenant's brand; {pkg.name} is the sender name and a line in the footer.</p>
      <div className="al-summary">Mails<span>{emails.length} per tenant</span><span>DE, EN</span><span>HTML</span></div>
    </PageHeader>
    <div className="al-filters mt-8"><div className="al-tabs" aria-label="Tenant">{emailTenants.map(t =>
      <button key={t.slug} aria-pressed={tenant === t.slug} onClick={() => setTenant(t.slug)}>{t.name}</button>)}</div>
      <div className="al-tabs" aria-label="Language">{emailLangs.map(l =>
      <button key={l.id} aria-pressed={lang === l.id} onClick={() => setLang(l.id)}>{l.name}</button>)}</div></div>
    {emails.map(mail => <section key={mail.file}>
      <SectionHeader title={mail.name} />
      <dl className="em-meta"><dt>Sent when</dt><dd>{mail.when}</dd><dt>Subject</dt><dd>{mail.subject[lang]}</dd><dt>From</dt><dd>TICKETOVA, Reply-To the tenant</dd></dl>
      <Mail key={`${tenant}-${lang}`} src={emailUrl(tenant, lang, mail.file)} title={`${mail.name}, ${tenant}, ${lang}`} />
    </section>)}
    <p className="al-note">Rendered from the 2026 templates with sample data. Türlersee writes du, Mettmenstetten Sie. The rules are in the <a href={emailsReadme}>README</a>.</p>
  </article>;
}
