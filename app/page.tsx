import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  LockKeyhole,
  MapPin,
  Menu,
  Newspaper,
  ShieldCheck,
  Shirt,
  UsersRound,
} from 'lucide-react';

const pitchero = 'https://www.pitchero.com/clubs/teddingtonathleticfc2';
const joinForm = 'https://forms.gle/L49D2qA8ZgNzr2Dp7';

const recruiting = [
  { group: 'U13 Girls', message: 'Goalkeeper wanted', image: '/recruitment-u13-girls.png' },
  { group: 'U15 Boys', message: 'New players wanted', image: '/recruitment-u15-boys.png' },
  { group: 'New U6s', message: 'Boys & girls welcome', image: '/recruitment-u6-mixed.png' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
        <a className="header-brand" href="#top" aria-label="Teddington Athletic FC home">
          <img src="/tafc-logo.png" alt="Teddington Athletic FC crest" />
          <span><strong>Teddington Athletic FC</strong><small>Community football · Est. 2006</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href={joinForm} target="_blank" rel="noreferrer">Join us</a>
          <a href={`${pitchero}/teams`} target="_blank" rel="noreferrer">Teams</a>
          <a href={`${pitchero}/news`} target="_blank" rel="noreferrer">News</a>
          <a href={`${pitchero}/information`} target="_blank" rel="noreferrer">Club info</a>
          <a href={`${pitchero}/contact`} target="_blank" rel="noreferrer">Contact</a>
          <a className="nav-login" href="https://www.pitchero.com/login" target="_blank" rel="noreferrer">Member login</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu /></summary>
          <nav aria-label="Mobile navigation">
            <a href={joinForm}>Join us</a><a href={`${pitchero}/teams`}>Teams</a><a href={`${pitchero}/news`}>News</a>
            <a href={`${pitchero}/information`}>Club info</a><a href={`${pitchero}/contact`}>Contact</a><a href="https://www.pitchero.com/login">Member login</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-photo" src="/tafc-hero-mixed.png" alt="A mixed group of Teddington Athletic FC youth players together on the pitch" />
        <div className="hero-shade" />
        <div className="hero-inner">
          <img className="hero-crest" src="/tafc-logo.png" alt="" />
          <p className="eyebrow">One club · Every team · Everyone welcome</p>
          <h1 id="hero-title">Play local.<br />Dream big.</h1>
          <p className="hero-copy">Community football for boys and girls from U6 to U18, with teams for every stage of the game.</p>
          <div className="hero-actions">
            <a className="button button-red" href={joinForm} target="_blank" rel="noreferrer">Join TAFC <ArrowRight /></a>
            <a className="button button-ghost" href={`${pitchero}/teams`} target="_blank" rel="noreferrer">Find your team</a>
          </div>
        </div>
        <div className="hero-affiliations" aria-label="Club affiliations">
          <img src="/fa-respect.png" alt="The FA Respect" />
          <img src="/fa-accredited-3star.png" alt="England Football three-star accredited club" />
          <img src="/middlesex-fa.png" alt="Middlesex FA" />
        </div>
      </section>

      <section className="announcement" aria-labelledby="announcement-title">
        <p className="section-kicker">2026/27 season</p>
        <h2 id="announcement-title">Registration and waiting list now open</h2>
        <p>New to TAFC? Register your interest and we’ll help you find the right age group.</p>
        <a className="button button-blue" href={joinForm} target="_blank" rel="noreferrer">Join TAFC <ArrowRight /></a>
      </section>

      <section className="club-story" aria-labelledby="about-title">
        <div className="story-image-wrap"><img src="/tafc-match.jpg" alt="Teddington Athletic FC players in a match" /></div>
        <div className="story-copy">
          <p className="section-kicker">Our club</p>
          <h2 id="about-title">Football at the heart of Teddington</h2>
          <p>TAFC is a volunteer-led community club giving local children a place to enjoy football, build confidence and belong to a team.</p>
          <p>From a first session at U6 to competitive football at U18, our focus stays the same: a safe, positive environment where every player can develop.</p>
          <div className="club-stats" aria-label="Club facts"><span><strong>46</strong> teams</span><span><strong>U6–U18</strong> age groups</span><span><strong>3-star</strong> accredited</span></div>
          <a className="text-link" href={`${pitchero}/information`} target="_blank" rel="noreferrer">More about TAFC <ArrowRight /></a>
        </div>
      </section>

      <section className="recruiting" aria-labelledby="recruiting-title">
        <div className="section-heading">
          <div><p className="section-kicker">Places available</p><h2 id="recruiting-title">Teams recruiting now</h2></div>
          <a className="text-link" href={joinForm} target="_blank" rel="noreferrer">Join the waiting list <ArrowRight /></a>
        </div>
        <div className="recruiting-grid">
          {recruiting.map((item) => (
            <a className="recruit-card" href={joinForm} target="_blank" rel="noreferrer" key={item.group}>
              <img src={item.image} alt={`${item.group} players in action`} />
              <span className="recruit-overlay"><small>{item.group}</small><strong>{item.message}</strong><span>Apply now <ArrowRight /></span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="pathways" aria-label="Useful club links">
        <a className="pathway pathway-red" href={`${pitchero}/contact`} target="_blank" rel="noreferrer">
          <ShieldCheck /><span><small>Player welfare</small><strong>Safeguarding</strong><em>Policies, contacts and support</em></span><ArrowRight className="path-arrow" />
        </a>
        <a className="pathway pathway-blue" href="https://www.pitchero.com/login" target="_blank" rel="noreferrer">
          <LockKeyhole /><span><small>Players & parents</small><strong>Member area</strong><em>Login to Pitchero</em></span><ExternalLink className="path-arrow" />
        </a>
        <a className="pathway pathway-light" href="https://www.kitlocker.shop/teddingtonafc/match-kit" target="_blank" rel="noreferrer">
          <Shirt /><span><small>Official Nike kit</small><strong>Club shop</strong><em>Visit Kitlocker</em></span><ExternalLink className="path-arrow" />
        </a>
      </section>

      <section className="news" aria-labelledby="news-title">
        <div className="news-copy"><p className="section-kicker">Around the club</p><h2 id="news-title">Latest news & events</h2><p>Keep up with club announcements, match reports, events and everything happening across our teams.</p><a className="button button-red" href={`${pitchero}/news`} target="_blank" rel="noreferrer">Read club news <Newspaper /></a></div>
        <div className="quick-links">
          <a href={`${pitchero}/teams`} target="_blank" rel="noreferrer"><UsersRound /><span><strong>Teams & fixtures</strong><small>Find your age group</small></span><ArrowRight /></a>
          <a href={`${pitchero}/d/documents.html?group_id=21745`} target="_blank" rel="noreferrer"><CalendarDays /><span><strong>Training schedule</strong><small>Dates, times and venues</small></span><ArrowRight /></a>
          <a href={`${pitchero}/contact`} target="_blank" rel="noreferrer"><MapPin /><span><strong>Contact & location</strong><small>Find the right person</small></span><ArrowRight /></a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><img src="/tafc-logo.png" alt="" /><span><strong>Teddington Athletic FC</strong><small>Community football since 2006</small></span></div>
          <div className="footer-links"><a href={joinForm}>Join TAFC</a><a href={`${pitchero}/teams`}>Teams</a><a href={`${pitchero}/news`}>News</a><a href={`${pitchero}/contact`}>Contact</a><a href={`${pitchero}/contact`}>Safeguarding</a></div>
          <address>Teddington Cricket Club<br />Dora Jordan Road, Teddington · TW11 0EP</address>
        </div>
        <div className="footer-bottom"><span>© Teddington Athletic FC</span><span>FA affiliated · Middlesex FA</span></div>
      </footer>
    </main>
  );
}
