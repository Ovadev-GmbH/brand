import { useState } from "react";
import type { Pkg } from "../types";
import { PageHeader, SectionHeader } from "../components/PageHeader";
import { emails, emailsReadme, emailTenants, emailUrl } from "../lib/emails";
import "../styles/asset-library.css";
import "../styles/emails.css";

/* Each mail in a frame as tall as the mail, so it reads the way an inbox
   shows it. */
function Mail({ src, title }: { src: string; title: string }) {
  const [height, setHeight] = useState(640);
  return <iframe className="em-frame" src={src} title={title} style={{ height }}
    onLoad={e => { const doc = e.currentTarget.contentDocument; if (doc) setHeight(doc.documentElement.scrollHeight); }} />;
}

export function EmailsPage({ pkg }: { pkg: Pkg }) {
  const [tenant, setTenant] = useState<string>(emailTenants[0].slug);
  return <article className="asset-library">
    <PageHeader title="E-mails" md={emailsReadme}>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-900">Every mail a visitor or a partner receives from a {pkg.name} shop. The mail wears the tenant's brand; {pkg.name} is the sender name and a line in the footer.</p>
      <div className="al-summary">Mails<span>{emails.length} per tenant</span><span>HTML</span></div>
    </PageHeader>
    <div className="al-filters mt-8"><div className="al-tabs" aria-label="Tenant">{emailTenants.map(t =>
      <button key={t.slug} aria-pressed={tenant === t.slug} onClick={() => setTenant(t.slug)}>{t.name}</button>)}</div></div>
    {emails.map(mail => <section key={mail.file}>
      <SectionHeader title={mail.name} />
      <dl className="em-meta"><dt>Sent when</dt><dd>{mail.when}</dd><dt>Subject</dt><dd>{mail.subject}</dd><dt>From</dt><dd>TICKETOVA, Reply-To the tenant</dd></dl>
      <Mail key={tenant} src={emailUrl(tenant, mail.file)} title={`${mail.name}, ${tenant}`} />
    </section>)}
    <p className="al-note">Rendered from the 2026 templates with sample data. Türlersee writes du, Mettmenstetten Sie. The rules are in the <a href={emailsReadme}>README</a>.</p>
  </article>;
}
