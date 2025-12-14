import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    brand: {
      label: "MyApp",
      href: "/",
    },
    items: [
      {
        id: "home",
        label: "Home",
        href: "/",
      },
      {
        id: "products",
        label: "Products",
        href: "/products",
        children: [
          {
            id: "new",
            label: "New Arrivals",
            href: "/products/new",
          },
          {
            id: "popular",
            label: "Popular",
            href: "/products/popular",
          },
        ],
      },
      {
        id: "pricing",
        label: "Pricing",
        href: "/pricing",
      },
      {
        id: "about",
        label: "About",
        href: "/about",
      },
      {
        id: "contact",
        label: "Contact",
        href: "/contact",
      },
    ],
    actions: [
      {
        id: "login",
        label: "Log In",
        href: "/login",
        variant: "link",
      },
      {
        id: "signup",
        label: "Sign Up",
        href: "/signup",
        variant: "button",
      },
    ],
  },
];
const NavItem = () => {
  return (
    <>
      {menuItems[0].items.map((item, index) =>
        item.children ? (
          <li key={index}>
            <details>
              <summary>{item.label}</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                {item.children.map((dropItem, dropIndex) => (
                  <li key={dropIndex}>
                    <a href={dropItem.href}> {dropItem.label}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={index}>
            <a href={item.href}> {item.label}</a>
          </li>
        )
      )}
    </>
  );
};
const Brand = () => {
  const { brand } = menuItems[0];
  return (
    <>
      <a href={brand.href} className="btn btn-ghost text-xl">
        {brand.label}
      </a>
    </>
  );
};
const Action = () => {
  const { actions } = menuItems[0];
  return (
    <>
      {actions.map((acItem, acIndex) => (
        <a href={acItem.href} className="btn" key={acIndex}>
          {acItem.label}
        </a>
      ))}
    </>
  );
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavItem />
          </ul>
        </div>
        <Brand />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavItem />
        </ul>
      </div>
      <div className="navbar-end">
        <Action />
      </div>
    </div>
  );
};

export default Navbar;
