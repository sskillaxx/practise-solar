import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const FrameSubsection = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "Home", isActive: true },
    { label: "Trade", isActive: false },
    { label: "Shop", isActive: false },
    { label: "Contact Us", isActive: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-[150px] py-4 bg-[#0b9586]">
      {/* Logo placeholder */}
      <div className="w-[157px] h-[54px] relative">
        <img className="w-full h-full object-cover rounded-[15px]"  src="src/components/images/sunrise.jpg" alt="Logo" />
      </div>

      {/* Navigation menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-start gap-2">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild>
                <div
                  className={`inline-flex items-start gap-2.5 px-7 py-2 cursor-pointer ${
                    item.isActive
                      ? "bg-[#0000000f] rounded-[5px] border-b-[3px] border-[#0000004c]"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-fit mt-[-1.00px] font-['Inter',Helvetica] ${
                      item.isActive ? "font-semibold" : "font-normal"
                    } text-white text-lg tracking-[0.94px] leading-[normal]`}
                  >
                    {item.label}
                  </div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Contact information */}
      <div className="flex items-center justify-end gap-2">
        <div className="inline-flex flex-col items-end justify-center">
          <div className="relative w-fit mt-[-1.00px] font-['Inter',Helvetica] font-normal text-white text-lg tracking-[0.94px] leading-[normal]">
            Call Me
          </div>
          <div className="relative w-fit font-['Inter',Helvetica] font-bold text-white text-2xl tracking-[0.94px] leading-7 whitespace-nowrap">
            +79184506506
          </div>
        </div>
      </div>
    </header>
  );
};
