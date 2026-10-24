import Link from "next/link";
import { site } from "@/lib/site";

type NavItem = { href: string; label: string };

const homeNav: NavItem[] = [
  { href: "/#how", label: "How to play" },
  { href: "/#features", label: "Features" },
  { href: "/#bramble", label: "Bramble" },
  { href: "/support/", label: "Support" },
];

const innerNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/support/", label: "Support" },
];

export default function SiteHeader({ variant = "home" }: { variant?: "home" | "inner" }) {
  const items = variant === "home" ? homeNav : innerNav;
  return (
    <header className="site-header">
      <nav className="container" aria-label="Main">
        <Link href="/" className="brand">
          <img src="/images/icon.png" alt="" width={44} height={44} />
          <span>{site.shortName}</span>
        </Link>
        <div className="nav-links">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/#download" className="btn-play">
          Play free
        </Link>
      </nav>
    </header>
  );
}
