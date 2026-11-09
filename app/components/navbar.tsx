"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Heart, House, UserRound } from "lucide-react";
import { useFavorites } from "./favorites-provider";

const navigation = [
  { href: "/", label: "Home", Icon: House },
  { href: "/experiences", label: "Explore", Icon: Compass },
  { href: "/favorites", label: "Saved", Icon: Heart },
  { href: "/profile", label: "Profile", Icon: UserRound },
];

export function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Wanderlust Labs home">
          <span className="brand-mark" aria-hidden="true">w</span>
          <span className="brand-wordmark">wanderlust<span>labs</span></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ href, label, Icon }) => {
            const active = href === "/" ? pathname === href : pathname.startsWith(href);

            return (
              <Link
                className={`nav-link${active ? " is-active" : ""}`}
                href={href}
                key={href}
                aria-current={active ? "page" : undefined}
              >
                <span className="nav-icon-wrap">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  {label === "Saved" && favoriteIds.length > 0 && (
                    <span className="nav-count">{favoriteIds.length}</span>
                  )}
                </span>
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}