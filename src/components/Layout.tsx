import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Colección",
    "href": "#products"
  },
  {
    "name": "Nuestra Filosofía",
    "href": "#about"
  },
  {
    "name": "Contacto",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="AriasCreative"
      ctaButton={{
        text: "Comprar Ahora",
        href: "#products",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="AriasCreative © 2024"
      columns={[
        {
          items: [
            {
              label: "Inicio",
              href: "#hero",
            },
            {
              label: "Colección",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "Políticas",
              href: "#",
            },
            {
              label: "Privacidad",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
