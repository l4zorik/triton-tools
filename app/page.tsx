'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Download,
  FileUp,
  Gauge,
  Menu,
  Microscope,
  MoveRight,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const tools = [
  { number: '01', name: 'VHM frézy pro HPC / HSC', type: 'Monolitní karbidové frézy', material: 'Kalená ocel · nerez · hliník · titan', detail: 'Variabilní geometrie, TiAlN / DLC povlak, optimalizované jádro', benefit: 'Až o 30 % delší životnost', icon: '◒' },
  { number: '02', name: 'Vyměnitelné břitové destičky', type: 'Pro soustružení a frézování', material: 'Ocel · litina · nerez · slitiny', detail: 'Přesné utvářeče třísky, stabilní upnutí, široké spektrum jakostí', benefit: 'Méně výměn, vyšší produktivita', icon: '◇' },
  { number: '03', name: 'VHM vrtáky s vnitřním chlazením', type: 'Vysoce výkonné vrtání 3×D–12×D', material: 'Konstrukční ocel · nerez · titan', detail: '4 fazety, PVD povlak, vnitřní přívod chladiva', benefit: 'Vyšší posuv bez kompromisu', icon: '⊙' },
  { number: '04', name: 'Závitníky a závitové frézy', type: 'Průchozí i neprůchozí otvory', material: 'Ocel · hliník · nerez · plasty', detail: 'HSS-E / VHM provedení, přesný profil, volba pro každý závit', benefit: 'Čistý závit na první průchod', icon: '≋' },
  { number: '05', name: 'Srážecí a odjehlovací nástroje', type: 'Dokončovací operace', material: 'Univerzální použití', detail: 'Čelní i kuželové varianty, hladký odvod třísky', benefit: 'Perfektní hrana bez ruční práce', icon: '△' },
  { number: '06', name: 'Modulární vyvrtávací hlavy', type: 'Přesné vyvrtávací systémy', material: 'Ocel · nerez · litina', detail: 'Jemné radiální nastavení, modulární těla, opakovatelnost v μm', benefit: 'Tolerance otvoru od IT6', icon: '◎' },
  { number: '07', name: 'Custom tooling podle výkresu', type: 'Speciální tvarové nástroje', material: 'Podle konkrétní aplikace', detail: 'Návrh, simulace, prototyp i sériová dodávka', benefit: 'Řešení přesně pro váš proces', icon: '✦' },
]

const values = [
  { icon: Sparkles, title: 'Povlaky nové generace', text: 'TiAlN, AlCrN, DLC a další povlaky pro vyšší řezné rychlosti a tepelnou stabilitu.' },
  { icon: Microscope, title: 'Kontrola pod mikroskopem', text: 'Každý nástroj ověřujeme v kritických místech. Geometrie, ostří i povlak bez kompromisů.' },
  { icon: Gauge, title: 'Geometrie pro HSC / HPC', text: 'Optimalizované nástroje, které zkracují strojní čas a drží přesnost i při vysokém zatížení.' },
  { icon: ShieldCheck, title: 'Výkon, na který se dá spolehnout', text: 'Dohledatelná kvalita, opakovatelné výsledky a technická podpora od prvního řezu.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <div className="bg-grid pointer-events-none fixed inset-0 opacity-30" aria-hidden="true" />
      <header className="relative z-20 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Triton Tools domů">
            <span className="brand-mark"><span /></span>
            <span className="text-lg font-black tracking-tight">TRITON<span className="text-primary">/</span>TOOLS</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Hlavní navigace">
            <a href="#reseni" className="transition-colors hover:text-foreground">Řešení</a>
            <a href="#sortiment" className="transition-colors hover:text-foreground">Sortiment</a>
            <a href="#proces" className="transition-colors hover:text-foreground">Jak pracujeme</a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <a href="tel:+420222451780" className="flex items-center gap-2 text-sm font-medium"><Phone size={15} /> +420 222 451 780</a>
            <a href="#kontakt" className="button-primary">Poptat nástroje <ArrowRight size={15} /></a>
          </div>
          <button className="rounded-md p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-border px-5 py-6 md:hidden" aria-label="Mobilní navigace">
          <a href="#reseni" onClick={() => setMenuOpen(false)}>Řešení</a><a href="#sortiment" onClick={() => setMenuOpen(false)}>Sortiment</a><a href="#proces" onClick={() => setMenuOpen(false)}>Jak pracujeme</a><a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>}
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="hero-orbit" aria-hidden="true"><div className="hero-tool">◒</div></div>
        <div className="relative max-w-4xl">
          <div className="eyebrow"><span className="live-dot" /> Přesné nástroje pro náročné obrábění</div>
          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-black leading-[.96] tracking-[-0.06em] sm:text-7xl lg:text-[6.4rem]">Méně času ve stroji.<br /><span className="text-primary">Více hotových dílů.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">Prémiové CNC nástroje pro frézování, vrtání a soustružení. Navržené pro výkon, stabilitu a přesnost, která se opakuje v každém cyklu.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="button-primary justify-center">Poptat nástroje na míru <ArrowRight size={17} /></a>
            <a href="#sortiment" className="button-secondary justify-center"><Download size={16} /> Prohlédnout sortiment</a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><span className="flex items-center gap-2"><Check size={14} className="text-primary" /> ISO 9001</span><span className="flex items-center gap-2"><Check size={14} className="text-primary" /> Made in EU</span><span className="flex items-center gap-2"><Check size={14} className="text-primary" /> Expedice do 24 h</span></div>
        </div>
        <div className="absolute bottom-10 right-8 hidden w-56 border-l border-primary/50 pl-4 text-xs leading-relaxed text-muted-foreground lg:block"><span className="mb-2 block font-mono text-primary">01 / 04 — PRECISION</span>Každý detail nástroje má svůj důvod. Každý řez svůj výsledek.</div>
      </section>

      <section id="reseni" className="relative border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_2fr] lg:px-8 lg:py-24"><div><p className="section-kicker">Výkon bez odhadů</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] lg:text-5xl">Nástroj je součást<br /><span className="text-muted-foreground">vašeho procesu.</span></h2></div><div className="grid gap-7 sm:grid-cols-2">{values.map((item) => { const Icon = item.icon; return <div key={item.title} className="border-t border-border pt-5"><Icon className="text-primary" size={22} /><h3 className="mt-5 font-bold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div> })}</div></div>
      </section>

      <section id="sortiment" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Sortiment / 07 kategorií</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.05em] lg:text-6xl">Nástroje, které<br /><span className="text-primary">drží tempo.</span></h2></div><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Od standardního katalogu po nástroj navržený od nuly podle vašeho výkresu.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <article key={tool.number} className="group relative bg-background p-6 transition-colors hover:bg-card lg:p-7"><div className="flex items-start justify-between"><span className="font-mono text-xs text-primary">{tool.number}</span><span className="tool-glyph" aria-hidden="true">{tool.icon}</span></div><p className="mt-12 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{tool.type}</p><h3 className="mt-2 text-xl font-bold leading-tight">{tool.name}</h3><p className="mt-4 text-sm text-muted-foreground">{tool.material}</p><div className="mt-6 border-t border-border pt-4"><p className="text-xs leading-relaxed text-muted-foreground">{tool.detail}</p><p className="mt-4 flex items-center gap-2 text-sm font-bold text-primary"><ArrowDownRight size={15} /> {tool.benefit}</p></div></article>)}</div></section>

      <section id="proces" className="bg-foreground text-background"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]"><div><p className="section-kicker text-primary">Servis & podpora</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] lg:text-6xl">Dodáme nástroj.<br /><span className="text-primary">Pohlídáme výsledek.</span></h2><p className="mt-6 max-w-md leading-relaxed text-background/60">Když nestačí katalogové řešení, zapojíme naše technology přímo u vás ve výrobě.</p></div><div className="grid gap-4 sm:grid-cols-2"><div className="support-card"><PackageCheck className="text-primary" /><h3>Renovace & re-coating</h3><p>Obnovíme původní výkon nástroje za zlomek ceny nového. Přesné přebroušení, kontrola a nový povlak.</p></div><div className="support-card"><Clock3 className="text-primary" /><h3>Odladění u zákazníka</h3><p>Technické poradenství, volba řezných podmínek a ověření výsledku přímo na vašem stroji.</p></div></div></div><div className="mt-20 border-t border-background/15 pt-8"><p className="section-kicker text-background/50">Spolupráce / 04 kroky</p><div className="mt-8 grid gap-8 md:grid-cols-4">{['Výkres nebo poptávka','Návrh řešení','Výroba & kontrola','Expedice + podpora'].map((step, i) => <div key={step} className="relative"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-5 text-lg font-bold">{step}</h3><p className="mt-2 text-sm leading-relaxed text-background/55">{['Projdeme aplikaci, materiál a vaše cíle.','Doporučíme geometrii, povlak a parametry.','Každý kus ověříme před expedicí.','Skladové kusy posíláme do 24 hodin.'][i]}</p>{i < 3 && <MoveRight className="absolute right-0 top-0 hidden text-primary/50 md:block" size={18} />}</div>)}</div></div></div></section>

      <section id="kontakt" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><div><p className="section-kicker">Začněme konkrétně</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] lg:text-6xl">Máte operaci,<br /><span className="text-primary">která drhne?</span></h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Pošlete nám výkres nebo specifikaci materiálu. Ozveme se s konkrétním návrhem nástroje a doporučenými řeznými podmínkami.</p><div className="mt-10 flex flex-col gap-3 text-sm"><a href="mailto:technologie@tritontools.cz" className="font-semibold underline decoration-primary underline-offset-4">technologie@tritontools.cz</a><a href="tel:+420222451780" className="text-muted-foreground">+420 222 451 780</a></div></div><form className="rounded-lg border border-border bg-card p-6 lg:p-8" onSubmit={(e) => { e.preventDefault(); setSent(true) }}><div className="grid gap-5 sm:grid-cols-2"><label>Jméno a firma<input required placeholder="Jan Novák · Kovovýroba s.r.o." /></label><label>E-mail<input required type="email" placeholder="jan@firma.cz" /></label><label className="sm:col-span-2">Co potřebujete řešit?<textarea required rows={4} placeholder="Materiál, typ operace, požadovaná tolerance..." /></label><label className="file-drop sm:col-span-2"><FileUp className="text-primary" /><span><b>Přiložit výkres</b><small>STP / STEP / PDF · max. 20 MB</small></span><input type="file" accept=".stp,.step,.pdf" /></label></div><button className="button-primary mt-6 w-full justify-center" type="submit">{sent ? 'Děkujeme, ozveme se brzy' : 'Odeslat poptávku'} <ArrowRight size={16} /></button><p className="mt-4 text-center text-xs text-muted-foreground">Odesláním souhlasíte se zpracováním údajů pro účely odpovědi na poptávku.</p></form></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8"><span className="font-bold tracking-tight text-foreground">TRITON<span className="text-primary">/</span>TOOLS</span><span>© 2026 Triton Tools s.r.o. · Přesnost, která se počítá.</span><span>Brno · Česká republika</span></div></footer>
    </main>
  )
}
