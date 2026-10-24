import { site } from "@/lib/site";

/**
 * Official store badges. Google Play's PNG carries its own transparent margin,
 * so it is rendered taller with a negative margin to visually match Apple's SVG.
 * While `site.appStoreUrl` is null the App Store badge is shown disabled.
 */
export default function StoreButtons({ center = false, id }: { center?: boolean; id?: string }) {
  return (
    <div id={id} className={`store-row${center ? " center" : ""}`}>
      <a href={site.googlePlayUrl} className="store-link" rel="noopener">
        <img src="/badges/google-play-badge.png" alt="Get it on Google Play" className="google" />
      </a>
      {site.appStoreUrl ? (
        <a href={site.appStoreUrl} className="store-link" rel="noopener">
          <img src="/badges/app-store-badge.svg" alt="Download on the App Store" className="apple" />
        </a>
      ) : (
        <span className="store-soon" aria-disabled="true" title="Coming soon to the App Store">
          <img src="/badges/app-store-badge.svg" alt="App Store — coming soon" />
          <small>Coming soon</small>
        </span>
      )}
    </div>
  );
}
