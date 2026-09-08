'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  ExternalLink,
  Info,
  Mail,
  Newspaper,
  Shirt,
  ShoppingBasket,
  UsersRound,
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import site from '@/content/site.json';

const { club, hero, links, recruitment, news } = site;
const pitchero = links.pitchero;
const joinForm = links.joinForm;
const recruitmentAds = recruitment.ads;

const journeys = [
  {
    eyebrow: 'New to the club',
    title: 'I want to join TAFC',
    description: 'Find the right age group, learn about our teams and register your interest.',
    icon: UsersRound,
    className: 'journey-new',
    links: [
      { label: 'Join TAFC', href: joinForm, icon: ClipboardList },
      { label: 'Find a team', href: `${pitchero}/teams`, icon: UsersRound },
    ],
  },
  {
    eyebrow: 'Players & parents',
    title: 'I’m already a member',
    description: 'Sign in, pay subscriptions or order your official TAFC kit.',
    icon: CircleUserRound,
    className: 'journey-member',
    links: [
      { label: 'Pitchero login', href: links.pitcheroLogin, icon: CircleUserRound },
      { label: 'Pay subscriptions', href: `${pitchero}/payments`, icon: ShoppingBasket },
      { label: 'Kitlocker shop', href: links.kitShop, icon: Shirt, newTab: true },
    ],
  },
  {
    eyebrow: 'Useful resources',
    title: 'I’m looking for information',
    description: 'Training, documents, news and the right person to contact.',
    icon: Info,
    className: 'journey-info',
    links: [
      { label: 'Training schedule', href: `${pitchero}/d/documents.html?group_id=21745`, icon: CalendarDays },
      { label: 'Club handbook', href: `${pitchero}/d/documents.html?group_id=0`, icon: BookOpenText },
      { label: 'Contact the club', href: `${pitchero}/contact`, icon: Mail },
    ],
  },
];

export default function Home() {
  const recruitmentTrack = useRef<HTMLDivElement>(null);
  const recruitmentIndex = useRef(0);
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);
  const [recruitmentPaused, setRecruitmentPaused] = useState(false);

  const moveRecruitment = useCallback((direction: number) => {
    const track = recruitmentTrack.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (!cards.length) return;
    recruitmentIndex.current = (recruitmentIndex.current + direction + cards.length) % cards.length;
    const card = cards[recruitmentIndex.current];
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!recruitmentOpen || recruitmentPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => moveRecruitment(1), 5200);
    return () => window.clearInterval(timer);
  }, [moveRecruitment, recruitmentOpen, recruitmentPaused]);

  const syncRecruitmentIndex = () => {
    const track = recruitmentTrack.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    recruitmentIndex.current = cards.reduce((closest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
      const closestDistance = Math.abs(cards[closest].offsetLeft - track.offsetLeft - track.scrollLeft);
      return currentDistance < closestDistance ? index : closest;
    }, 0);
  };

  return (
    <main>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Teddington Athletic FC home">
          <img src="/tafc-logo.png" alt="Teddington Athletic FC crest" />
          <span><strong>{club.name}</strong><small>{club.strapline}</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href={joinForm}>Join</a>
          <a href={`${pitchero}/teams`}>Teams</a>
          <a href={`${pitchero}/news`}>News &amp; events</a>
          <a href={`${pitchero}/contact`}>Contact</a>
          <a className="login-link" href={links.pitcheroLogin}>Member login</a>
        </nav>
      </header>

      <section className="hero">
        <img className="hero-image" src={hero.image} alt={hero.imageAlt} />
        <div className="hero-content">
          <span className="hero-kicker">{club.ageRange}</span>
          <h1>{hero.headlineLine1}<br />{hero.headlineLine2}</h1>
          <p>{hero.supportingCopy}</p>
          <div className="hero-actions">
            <a className="button button-red" href={joinForm}>Join TAFC <ArrowRight size={18} /></a>
            <a className="button button-white" href={`${pitchero}/teams`}>Find your team</a>
          </div>
        </div>
        <div className="hero-badge"><strong>{hero.badgeTitle}</strong><span>{hero.badgeCopy}</span></div>
      </section>

      <aside className="recruitment-board" aria-labelledby="recruitment-title">
        <Collapsible open={recruitmentOpen} onOpenChange={setRecruitmentOpen}>
          <CollapsibleTrigger className="recruitment-trigger">
            <span className="recruitment-heading-copy">
              <span className="recruitment-kicker">Recruiting now</span>
              <strong id="recruitment-title">{recruitment.heading}</strong>
              <span>{recruitment.summary}</span>
            </span>
            <span className="recruitment-trigger-cta">
              {recruitmentOpen ? 'Hide recruiting teams' : 'See which teams are recruiting'}
              <ChevronDown className={recruitmentOpen ? 'is-open' : ''} aria-hidden="true" />
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="recruitment-content">
            <div className="recruitment-content-heading">
              <span>{recruitmentAds.length} teams currently have spaces</span>
              <div className="carousel-controls" aria-label="Recruitment carousel controls">
                <button type="button" onClick={() => moveRecruitment(-1)} aria-label="Previous recruiting team"><ChevronLeft /></button>
                <button type="button" onClick={() => moveRecruitment(1)} aria-label="Next recruiting team"><ChevronRight /></button>
              </div>
            </div>
            <div
              className="recruitment-ads"
              ref={recruitmentTrack}
              aria-label="Teams currently recruiting"
              onScroll={syncRecruitmentIndex}
              onMouseEnter={() => setRecruitmentPaused(true)}
              onMouseLeave={() => setRecruitmentPaused(false)}
              onFocusCapture={() => setRecruitmentPaused(true)}
              onBlurCapture={() => setRecruitmentPaused(false)}
              onPointerDown={() => setRecruitmentPaused(true)}
              onPointerUp={() => setRecruitmentPaused(false)}
            >
              {recruitmentAds.map((advert) => (
                <a className="recruitment-ad" href={joinForm} key={advert.group}>
                  <span className="recruitment-ad-copy"><small>{advert.group}</small><strong>{advert.message}</strong><span className="recruitment-apply">Apply <ArrowRight size={15} /></span></span>
                  <span className="recruitment-ad-image"><img src={advert.image} alt={`${advert.group} recruitment`} /></span>
                </a>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </aside>

      <section className="journeys" aria-labelledby="journeys-title">
        <div className="section-intro">
          <span>Start here</span>
          <h2 id="journeys-title">How can we help?</h2>
          <p>Choose the option that best describes you. We’ll take you straight to the right place.</p>
        </div>
        <div className="journey-grid">
          {journeys.map((journey) => {
            const JourneyIcon = journey.icon;
            return (
              <article className={`journey-card ${journey.className}`} key={journey.title}>
                <div className="journey-heading">
                  <span className="journey-icon"><JourneyIcon /></span>
                  <span className="journey-eyebrow">{journey.eyebrow}</span>
                </div>
                <h3>{journey.title}</h3>
                <p>{journey.description}</p>
                <div className="journey-links">
                  {journey.links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <a href={link.href} target={'newTab' in link && link.newTab ? '_blank' : undefined} rel={'newTab' in link && link.newTab ? 'noreferrer' : undefined} key={link.label}>
                        <LinkIcon size={18} /><span>{link.label}</span><ChevronRight size={17} />
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
        <p className="new-tab-note"><ExternalLink size={14} /> The Kitlocker shop opens in a new tab.</p>
      </section>

      <section className="latest">
        <div className="latest-inner">
          <span className="latest-icon"><Newspaper /></span>
          <div><span>From across the club</span><h2>{news.heading}</h2><p>{news.copy}</p></div>
          <a className="button button-outline" href={`${pitchero}/news`}>Visit club news <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/tafc-logo.png" alt="" /><span><strong>{club.name}</strong><small>{club.teamCount}</small></span></div>
        <address>{club.address[0]}<br />{club.address[1]}</address>
        <div className="footer-logos" aria-label="Football affiliations">
          <img src="/fa-respect.png" alt="The FA Respect" />
          <img src="/fa-accredited-3star.png" alt="England Football three-star accredited club" />
          <img src="/middlesex-fa.png" alt="Middlesex County Football Association" />
        </div>
        <div className="footer-nav"><a className="safeguarding-link" href={`${pitchero}/contact`}>Safeguarding</a><a href={`${pitchero}/information`}>Information</a><a href={`${pitchero}/contact`}>Contact</a><a href={links.pitcheroLogin}>Pitchero login</a></div>
      </footer>
    </main>
  );
}
