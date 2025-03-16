
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const MenuItems = () => (
    <NavigationMenuList className="hidden md:flex">
      <NavigationMenuItem>
        <Link to="/" className={navigationMenuTriggerStyle()}>
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/about" className={navigationMenuTriggerStyle()}>
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  to="/products"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    All Collections
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Browse our complete catalog of handcrafted furniture
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  to="/custom"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Custom</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Request custom pieces tailored to your needs
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  to="/gallery"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Gallery</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    View our portfolio of completed projects
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={navigationMenuTriggerStyle()}>
          Contact
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Rustic Charm Woodworks
            </span>
          </Link>
          <NavigationMenu>
            <MenuItems />
          </NavigationMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        to="/products"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/custom"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Custom Orders
      </Link>
      <Link
        to="/gallery"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Gallery
      </Link>
      <Link
        to="/contact"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Contact
      </Link>
    </div>
  );
}
