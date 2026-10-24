import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StoreButtons from "@/components/StoreButtons";

const cards = [
  { src: "/images/card_flower.png", alt: "Flower card" },
  { src: "/images/card_tea.png", alt: "Tea card" },
  { src: "/images/card_cat.png", alt: "Cat card" },
  { src: "/images/card_fruit.png", alt: "Fruit card" },
];

const steps = [
  { title: "Plant a seed packet", text: "Tap or drag a seed‑packet card onto an empty garden bed." },
  { title: "Sort the pictures", text: "Stack picture cards of the same category onto that bed." },
  { title: "Fill the bed, watch it bloom", text: "Complete the set to clear the bed and free up space." },
  { title: "Clear the board", text: "Sort every category before your moves run out." },
];

const shots = [
  {
    src: "/images/st_gp6.jpg",
    alt: "Gameplay: four columns of picture cards, a Gardening seed packet in a garden bed, and the four garden tools along the bottom",
    caption: "Sort picture cards by category",
  },
  {
    src: "/images/st_bloom2545.jpg",
    alt: "A completed garden bed closing into a kraft seed bag with petals flying",
    caption: "Fill the bed, watch it bloom",
  },
  {
    src: "/images/st_win5523.jpg",
    alt: "Level complete screen with Bramble the hedgehog celebrating",
    caption: "Win levels, earn daisy coins",
  },
  {
    src: "/images/st_journey.jpg",
    alt: "Garden journey map with newly planted flower beds",
    caption: "Grow your garden through the seasons",
  },
];

const features = [
  {
    title: "Hundreds of hand‑drawn cards",
    text: "Fruit, flowers, teacups, kittens and many more, in a soft storybook style. Big, clear cards that are easy on the eyes.",
  },
  {
    title: "960+ levels",
    text: "From gentle warm‑ups to tricky super‑hard boards. Vine‑locked and frosted cards add new puzzles as you progress.",
  },
  {
    title: "Garden tools when you're stuck",
    text: "Sprout, Bee Magnet, Seed Pick and Bouquet each give you a different way out of a tight spot.",
  },
  {
    title: "A garden that grows with you",
    text: "Every win plants something new. Watch your cottage garden fill in through the seasons.",
  },
  {
    title: "Daily gifts & seasonal events",
    text: "Come back each day for a gift, join seasonal events and climb the Garden Pass reward track.",
  },
  { title: "No ads mid‑level, ever", text: "Nothing interrupts a level. Pour a cup. Take your time." },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="home" />

      <section id="top" className="hero">
        <img src="/images/bg_rose.jpg" alt="" aria-hidden="true" className="hero-bg" />
        <div className="hero-tint" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <img src="/images/logo.png" alt="Cottage Solitaire: Card Sort" className="hero-logo" />
            <h1>A cozy twist on solitaire.</h1>
            <p className="hero-lead">
              Sort hand‑drawn picture cards by category, clear the board and watch your cottage garden
              bloom. No ads in the middle of a level, ever.
            </p>
            <StoreButtons id="download" />
            <div className="hero-facts">
              <span>960+ levels</span>
              <span aria-hidden="true">·</span>
              <span>Hundreds of picture cards</span>
              <span aria-hidden="true">·</span>
              <span>Free to play</span>
            </div>
          </div>
          <div className="hero-art">
            <img
              src="/images/hog_keyart.png"
              alt="Bramble the hedgehog in a straw hat holding three picture cards in front of a stone cottage"
            />
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Card categories">
        <div className="container">
          <p>Sort by category, not by suit:</p>
          <div className="cards">
            {cards.map((c) => (
              <div className="card" key={c.src}>
                <img src={c.src} alt={c.alt} />
              </div>
            ))}
          </div>
          <p>…and hundreds more.</p>
        </div>
      </section>

      <section id="how" className="container how">
        <div className="section-head">
          <span className="eyebrow">How to play</span>
          <h2>Easy to learn. Plenty to think about.</h2>
          <p>
            If you know word association solitaire, this is the same satisfying sorting — with pictures
            instead of words.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step-num">{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shots-section" aria-label="Screenshots">
        <div className="container shots">
          {shots.map((s) => (
            <figure key={s.src}>
              <div className="shot">
                <img src={s.src} alt={s.alt} loading="lazy" />
              </div>
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="features" className="container features">
        <div className="section-head">
          <span className="eyebrow">Why you&apos;ll love it</span>
          <h2>Made for relaxing</h2>
          <p>A few minutes with your morning coffee, a long evening wind‑down, or a brain teaser on the train.</p>
        </div>
        <div className="feats">
          {features.map((f) => (
            <div className="feat" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="bramble" className="bramble">
        <div className="container bramble-grid">
          <div className="bramble-art">
            <img src="/images/hog_win.png" alt="Bramble the hedgehog waving" loading="lazy" />
          </div>
          <div className="bramble-copy">
            <span className="eyebrow">Meet Bramble</span>
            <h2>The cheerful hedgehog who tends your garden</h2>
            <p>
              Bramble shows you the ropes, cheers every cleared bed and hands out the daily gifts. Straw
              hat, green dungarees, always a seed packet in a pocket.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container inner">
          <img src="/images/icon.png" alt="" className="icon" width={96} height={96} />
          <h2>Your daily moment of calm</h2>
          <p>Free to download on Android. iPhone and iPad coming soon.</p>
          <StoreButtons center />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
