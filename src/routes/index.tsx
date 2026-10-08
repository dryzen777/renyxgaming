import { createFileRoute } from "@tanstack/react-router";
import logoSrc from "@/assets/renyx-logo.png";
import worldSrc from "@/assets/renyx-world.png";
const logo = { url: logoSrc };
const world = { url: worldSrc };
import { Navbar } from "@/components/renyx/Navbar";
import { Loader, Particles, Petals, Reveal, useParallax } from "@/components/renyx/Effects";
import { PlatformIcon } from "@/components/renyx/Icons";
import { latestContent, socials } from "@/lib/renyx-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RENYX88 — Streamer • Gaming Creator" },
      { name: "description", content: "Gaming, live e contenuti. Entra nel mondo di Renyx88: YouTube, Twitch, TikTok e Instagram." },
      { property: "og:title", content: "RENYX88 — Streamer • Gaming Creator" },
      { property: "og:description", content: "Gaming, live e contenuti. Entra nel mondo di Renyx88." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center md:mb-16">
      <p className="font-jp text-sm tracking-[0.5em] text-primary">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.15em] sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-pink" />
    </Reveal>
  );
}

function Index() {
  const p = useParallax(0.25);
  const thumbs = { logo: logo.url, world: world.url };

  return (
    <div className="relative">
      <Loader />
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-110" style={{ transform: `translateY(${p}px) scale(1.15)` }}>
          <img src={world.url} alt="" className="size-full object-cover opacity-40 blur-[2px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_75%)]" />
        <div className="animate-fog absolute inset-x-[-10%] bottom-0 h-1/2 bg-gradient-to-t from-background via-secondary/40 to-transparent" />
        <Particles />
        <Petals />
        <div className="relative z-10 flex flex-col items-center px-5 pt-20 text-center" style={{ transform: `translateY(${p * -0.3}px)` }}>
          <img
            src={logo.url}
            alt="Logo Renyx Gaming"
            className="animate-pulse-glow aspect-square w-56 rounded-3xl border object-cover sm:w-72 md:w-80"
          />
          <h1 className="mt-8 font-display text-5xl font-black tracking-[0.12em] text-gradient text-glow sm:text-7xl md:text-8xl">RENYX88</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.4em] text-primary-glow sm:text-base">Streamer • Gaming Creator</p>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">Gaming, live e contenuti. Entra nel mondo di Renyx88.</p>
          <a href="#social" className="mt-9 rounded-full bg-gradient-pink px-9 py-4 font-display text-sm font-bold tracking-[0.3em] text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-strong">
            SEGUIMI
          </a>
        </div>
      </section>

      {/* PROFILO */}
      <section id="about" className="relative px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="relative mx-auto w-64 sm:w-80">
              <div className="absolute -inset-4 rounded-full bg-gradient-pink opacity-30 blur-3xl" />
              <img src={logo.url} alt="Avatar Renyx88" loading="lazy" className="relative aspect-square w-full rounded-full border-2 border-primary/50 object-cover shadow-glow" />
            </div>
          </Reveal>
          <Reveal delay={150} className="text-center md:text-left">
            <p className="font-jp text-sm tracking-[0.5em] text-primary">プロフィール</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[0.12em] md:text-5xl">RENYX88</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-primary-glow">Streamer • Gaming Creator</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Benvenuto nel mio mondo. Live, gameplay, clip e tante risate con la community. Tra fiori di ciliegio e luci al neon,
              qui trovi tutto quello che creo: unisciti e diventa parte della squadra.
            </p>
            <a href="#social" className="mt-8 inline-block rounded-full border border-primary px-8 py-3.5 font-display text-sm font-bold tracking-[0.3em] transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow">
              SEGUIMI
            </a>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="relative overflow-hidden px-5 py-24 md:py-32">
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <SectionTitle kicker="フォロー" title="CONNECT WITH RENYX" />
        <div className="relative mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {socials.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/70 hover:shadow-glow-strong sm:p-7"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-pink text-primary-foreground shadow-glow">
                  <PlatformIcon id={s.id} className="size-7" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl font-bold tracking-wider">{s.name}</span>
                  <span className="block text-sm text-muted-foreground">{s.desc}</span>
                </span>
                <span className="text-2xl text-primary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THE RENYX WORLD */}
      <section className="relative px-5 py-24 md:py-32">
        <SectionTitle kicker="世界" title="THE RENYX WORLD" />
        <Reveal className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border shadow-glow">
            <img
              src={world.url}
              alt="Renyx World — tempio giapponese sotto la luna rosa"
              loading="lazy"
              className="aspect-[1672/941] w-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* ULTIMI CONTENUTI */}
      <section id="contenuti" className="px-5 py-24 md:py-32">
        <SectionTitle kicker="最新" title="ULTIMI CONTENUTI" />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {latestContent.map((c, i) => {
            const s = socials.find((x) => x.id === c.platform)!;
            return (
              <Reveal key={i} delay={i * 120}>
                <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={thumbs[c.thumb]} alt="" loading="lazy" style={{ objectPosition: c.position }} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="glass absolute left-3 top-3 flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-widest">
                      <PlatformIcon id={c.platform} className="size-3.5" /> {s.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary-glow transition-colors hover:text-primary">
                      Guarda ora →
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t px-5 py-14 text-center">
        <p className="font-display text-2xl font-bold tracking-[0.25em] text-gradient">RENYX88</p>
        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">Streamer • Gaming Creator</p>
        <div className="mt-7 flex justify-center gap-4">
          {socials.map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="glass flex size-12 items-center justify-center rounded-full transition-all hover:-translate-y-1 hover:text-primary hover:shadow-glow">
              <PlatformIcon id={s.id} className="size-5" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">© 2026 Renyx88. All rights reserved.</p>
      </footer>
    </div>
  );
}
