import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FrameWrapperSubsection = (): JSX.Element => {
  const features = [
    { id: "01", text: "Collaborate with 100+ leading" },
    { id: "02", text: "100+ leading universities and companies" },
    { id: "03", text: "leading universities and companies" },
    { id: "04", text: "universities and companies" },
  ];

  const solarKits = [
    {
      title: "Off Grid",
      description:
        "WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,",
      image: "/solar-panels-meadow 2.png",
    },
    {
      title: "On Grid",
      description:
        "WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,",
      image: "/solar-panels-meadow 3.png",
    },
    {
      title: "Hybrid",
      description:
        "WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,",
      image: "/solar-panels-meadow 4.png",
    },
  ];

  const energyInnovators = [
    {
      title: "SoliTek - The European Manufacturer of Solar Panels",
      description: (
        <>
          We work closely importing solar panels from Solitek, they offer 30
          year warranties on their panels and are constantly coming up with new
          ideas - including their{" "}
          <span className="underline">solar greenhouse</span>.
        </>
      ),
      logo: "/sunrise.jpg",
    },
    {
      title: "BYD - Electrifying Transport",
      description:
        "We use battery cells made by BYD, a market leader in lithium batteries. BYD batteries are in cars, trucks, and buses - they build robust batteries.",
      logo: "/sunrise2.jpg",
    },
    {
      title: "Sunsynk - No Power No Problem",
      description:
        "Sunsynk build the most versatile hybrid inverter on the market, designed to take up to 7kW of solar on a standard domestic supply - for simultaneous battery charging and household usage.",
      logo: "/sunrise3.jpg",
    },
    {
      title: "REC - Solar's Most Trusted",
      description:
        "REC - Renewable Energy Corporation, are one of the longest trading names in solar. They know how to be truly sustainable in this industry - their panels are 100% lead free and have the most trusted warranty in solar.",
      logo: "/sunrise4.jpg",
    },
  ];

  const values = [
    {
      title: "Customer Care",
      description:
        "We're here to help you with solar panel installation in Devon and Cornwall. If we were to sum ourselves up in a few words, those would be \"reliable, honest and friendly.\" We find our customers agree! We're with you from the start of the project to the finish.",
      icon: "/Customer Loyalty.png",
    },
    {
      title: "Price",
      description:
        "As I'm sure you'll have seen, solar systems don't tend to come cheap. Our aim is to make solar power accessible to everyone, so we price ourselves in a way that makes solar energy more affordable. We're focused on helping you and on helping the environment, rather than on turning a profit.",
      icon: "/Price Tag.png",
    },
    {
      title: "Sustainability",
      description:
        "As we've said, we do this because we truly care about the planet and about seeing people embrace a greener, more eco-friendly approach to power. The world of green energy can be jargon-filled and opaque, so we want to help educate people on the big and little things they can do to protect our planet!",
      icon: "/Environment.png",
    },
  ];

  return (
    <section className="flex flex-col w-full">
      {/* Friendly Installers Section */}
      <div className="flex flex-col md:flex-row items-start gap-6 py-20 px-4 md:px-8 lg:px-20">
        <div className="flex flex-col items-start gap-[50px] w-full md:w-1/2">
          <div className="flex flex-col w-full items-center gap-6">
            <h2 className="self-stretch font-['Inter'] font-semibold text-gray-900 text-4xl md:text-[42px] tracking-[-0.84px] leading-tight">
              The Friendliest Installers in the South-West
            </h2>

            <p className="self-stretch font-text-md-regular text-gray-600">
              At Solidarity Solar our aims are to help our customers towards a
              sustainable future and genuinely care about the quality of
              products we use for our installs. We never sell you equipment you
              don&#39;t need and will always advise to the best of our ability,
              No hard sell or pushy sales tactics ever. We take pride in our
              work and do our best to make sure that we meet, or exceed, our
              customers&#39; expectations.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            {features.map((feature) => (
              <div key={feature.id} className="flex w-full items-start gap-2.5">
                <div className="font-['Akazan-Bold'] font-bold text-[#84bd3a] text-xl tracking-[4.00px]">
                  {feature.id}/
                </div>
                <div className="font-text-xl-semibold text-gray-900">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[552px] mt-8 md:mt-0">
          <img
            className="absolute w-[90%] h-[552px] top-0 right-0 object-cover rounded-[40px]"
            alt="Solar installation"
            src="/Rectangle 30.png"
          />

          <Card className="flex flex-col w-[266px] items-start gap-7 p-6 absolute top-[292px] left-0 bg-[#ffbb1c] rounded-xl">
            <CardContent className="p-0">
              <img
                className="w-[90px] h-[90px]"
                alt="Solar charging"
                src="/Solar Charging.png"
              />

              <p className="mt-7 font-['Akazan-Regular'] text-[#2a3334] text-lg tracking-[0.94px]">
                The Piece That Sold Me On This Polarizing Trend
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Power that Doesn't Cost the Earth Banner */}
      <div className="relative w-full h-[505px]">
        <img
          className="w-full h-[505px] object-cover rounded-[35px]"
          alt="Solar panels landscape"
          src="/vents.png"
        />

        <div className="flex flex-col w-full md:w-[678px] items-start justify-center gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[150px] md:translate-x-0 p-6 md:p-0">
          <h2 className="self-stretch font-['Inter'] font-semibold text-white text-3xl md:text-[42px] tracking-[-0.84px]">
            Power that Doesn&#39;t Cost the Earth
          </h2>

          <p className="self-stretch font-['Inter'] font-medium text-white text-lg md:text-xl leading-7">
            If you need advice then give us a call on 07745593882 or hit the
            button below to request a call back!
          </p>

          <Button className="px-[34px] py-3 rounded-[109px] bg-[#ffbb1c] hover:bg-[#e6a919] text-[#2a3334] shadow-md">
            Call Us Today
          </Button>
        </div>
      </div>

      {/* Solar Kits Section */}
      <div className="flex flex-col items-center gap-10 py-20 px-4 md:px-8 lg:px-20">
        <div className="flex flex-col w-full max-w-[936px] items-center gap-6">
          <h2 className="self-stretch font-['Inter'] font-semibold text-gray-900 text-3xl md:text-[42px] text-center tracking-[-0.84px]">
            Solar Kits
          </h2>

          <p className="self-stretch font-text-md-regular text-gray-600 text-center">
            Complete solar system kits, ready for installation. They can be used
            to supplement on-grid housing, a complete self-sustaining home or
            some combination of the two.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1140px]">
          {solarKits.map((kit, index) => (
            <Card
              key={index}
              className="flex flex-col items-start bg-white shadow-[0px_4px_30px_#0000000d]"
            >
              <img
                className="w-full h-60 object-cover"
                alt={`${kit.title} solar panels`}
                src={kit.image}
              />

              <CardContent className="flex flex-col items-start gap-6 p-5 w-full">
                <h3 className="self-stretch font-text-xl-semibold text-gray-900">
                  {kit.title}
                </h3>

                <p className="self-stretch h-[72px] font-text-md-regular text-gray-600 overflow-hidden text-ellipsis line-clamp-3">
                  {kit.description}
                </p>

                <div className="flex items-center gap-2 text-[#3bab8f] cursor-pointer">
                  <span className="font-text-md-semibold">View Products</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Repairs Over Replacement Banner */}
      <div className="relative w-full h-[505px]">
        <img
          className="w-full h-[505px] object-cover"
          alt="Solar panels landscape"
          src="/office.png"
        />

        <Card className="flex flex-col w-[90%] max-w-[858px] items-center justify-center gap-8 p-8 md:p-11 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00000091] rounded-xl backdrop-blur-md">
          <CardContent className="p-0 w-full">
            <h2 className="self-stretch font-['Inter'] font-semibold text-white text-3xl md:text-[42px] text-center tracking-[-0.84px]">
              Repairs Over Replacement
            </h2>

            <p className="mt-8 self-stretch font-['Inter'] font-medium text-white text-lg md:text-xl text-center leading-7">
              We approach every aspect of our business with sustainability in
              mind. That&#39;s why we believe it&#39;s always worth trying to
              fix a system before outright replacing it, wherever possible – it
              requires fewer materials and is easier on the planet, as well as
              your wallet! If another company tells you that your system needs
              to be replaced, just give us a call and we&#39;ll see if we can
              repair it first.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Energy Innovators Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-[150px] py-20 bg-[#ffbb1c0d]">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="relative w-[119px] h-[119px] bg-[#3bab8f] rounded-[10px] border-[21px] border-solid border-[#3bab8f26] flex items-center justify-center">
              <img
                className="w-[78px] h-[78px]"
                alt="Zap fast"
                src="/zaprrr.svg"
              />
            </div>

            <h2 className="font-['Inter'] font-semibold text-gray-900 text-3xl md:text-[42px] tracking-[-0.84px]">
              Energy Innovators - the products we love
            </h2>
          </div>

          <p className="font-text-lg-regular text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Suspendisse suspendisse
            tempor et ipsum sit egestas nunc. Diam in cum a in.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {energyInnovators.map((innovator, index) => (
              <Card
                key={index}
                className="flex flex-col items-start gap-8 p-6 bg-[#3bab8f0d] rounded-xl border border-solid border-[#3bab8f] shadow-[0px_4px_30px_#0000000d]"
              >
                <div className="flex items-center justify-center w-full bg-[#3bab8f26] rounded-[25px] h-[106px]">
                  <img
                    className="w-full h-full object-cover rounded-[25px]"
                    alt={innovator.title}
                    src={innovator.logo}
                  />
                </div>

                <CardContent className="p-0 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="font-text-xl-semibold text-gray-900">
                      {innovator.title}
                    </h3>

                    <p className="font-text-md-regular text-gray-600">
                      {innovator.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-5 text-[#3bab8f] cursor-pointer">
                    <span className="font-text-md-semibold">
                      View integration
                    </span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="flex flex-col items-center gap-8 px-4 md:px-8 lg:px-[150px] py-20">
        <div className="flex flex-col items-center gap-7 w-full">
          <h2 className="font-['Inter'] font-semibold text-gray-900 text-3xl md:text-[42px] text-center tracking-[-0.84px]">
            Our values
          </h2>

          <p className="font-text-lg-regular text-gray-600 text-center max-w-[1140px]">
            More than 3000 users have been helped by World Online Course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1140px]">
          {values.map((value, index) => (
            <Card
              key={index}
              className="flex flex-col h-full items-start gap-5 p-8 bg-[#3bab8f0d] rounded-xl border border-solid border-[#3bab8f]"
            >
              <CardContent className="p-0 w-full">
                <img
                  className="w-[70px] h-[70px]"
                  alt={value.title}
                  src={value.icon}
                />

                <h3 className="mt-5 font-text-xl-semibold text-[#0f1728]">
                  {value.title}
                </h3>

                <p className="mt-5 font-text-md-regular text-[#475466]">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-8 lg:px-[150px] py-20">
        <div className="flex flex-col w-full md:w-[400px] items-start gap-7">
          <img className="w-[58.33px] h-12" alt="Quote" src="/quotes.png" />

          <h2 className="font-['Inter'] font-bold text-[#1c1c1c] text-3xl md:text-5xl leading-tight">
            what they say about WOC
          </h2>

          <p className="font-['Inter'] text-[#1c1c1c] text-lg leading-8">
            More than 3000 users have been helped by World Online Course.
          </p>
        </div>

        <Card className="flex flex-col items-end gap-[87px] p-10 w-full bg-[#3bab8f0f] rounded-3xl">
          <CardContent className="p-0 w-full">
            <div className="flex flex-col md:flex-row items-start gap-10 w-full">
              <div className="flex flex-col items-start gap-[52px] flex-1">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[#3bab8f] text-base">
                  What they say
                </span>

                <p className="font-['Inter'] text-gray-900 text-xl md:text-2xl leading-9">
                  &quot;Studying at WOC is fun, the curriculum is complete, the
                  instructors are competent, and the assignments given are also
                  relevant to the current scope of work.&quot;
                </p>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0">
                <div className="w-2 h-2 bg-[#6b6b6b] rounded" />
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
                <div className="w-2 h-2 bg-[#d9d9d9] rounded" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full mt-[87px]">
              <div className="flex items-center gap-2">
                <img
                  className="w-[60px] h-[60px] object-cover rounded-full"
                  alt="Resky Fernanda"
                  src="/PJq4SKeab8s.jpg"
                />

                <div className="flex flex-col items-start gap-[9px]">
                  <span className="font-['Inter'] font-bold text-[#1c1c1c] text-base">
                    Max Kutimskiy
                  </span>

                  <span className="font-['Inter'] text-[#1c1c1c] text-base">
                    Product Developer
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-full border border-solid border-[#1c1c1c]"
                >
                  <ArrowRightIcon className="w-5 h-5 rotate-180" />
                </Button>

                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-full border border-solid border-[#1c1c1c]"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col w-full items-start gap-[54px] px-4 md:px-8 lg:px-[150px] py-20 bg-[#283646]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8">
          <div className="flex flex-col items-start gap-[38px]">
            <img
              className="w-[185px] h-16 object-cover rounded-[15px]"
              alt="Logo"
              src="/sunrise.jpg"
            />

            <div className="flex flex-wrap gap-6 md:gap-10">
              <span className="font-['Inter'] text-white text-base tracking-[0.30px] leading-6">
                About
              </span>
              <span className="font-['Inter'] text-white text-base tracking-[0.30px] leading-6">
                Careers
              </span>
              <span className="font-['Inter'] text-white text-base tracking-[0.30px] leading-6">
                Press
              </span>
              <span className="font-['Inter'] text-white text-base tracking-[0.30px] leading-6">
                Customer Care
              </span>
              <span className="font-['Inter'] text-white text-base tracking-[0.30px] leading-6">
                Services
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 w-full md:w-auto">
            <span className="font-['Inter'] text-white text-base tracking-[0.30px] leading-6">
              Get the freshest news from us
            </span>

            <div className="flex flex-col md:flex-row items-center w-full md:w-auto bg-[#ffffff17] rounded-[38px] border border-solid border-[#b3bdc7] overflow-hidden">
              <input
                type="email"
                placeholder="Your email address…"
                className="w-full md:w-[239px] px-5 py-3 bg-transparent text-[#92989e] font-['Inter'] text-base tracking-[0.30px] leading-6 outline-none"
              />

              <Button className="w-full md:w-auto px-[34px] py-3 rounded-[109px] bg-[#ffbb1c] hover:bg-[#e6a919] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 w-full" />

        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
          <div className="font-['Inter'] text-[#92989e] text-xs tracking-[0.26px] leading-4">
            Terms &amp; Conditions&nbsp;&nbsp;&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp; Accessibility&nbsp;&nbsp;&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp; Legal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          </div>

          <div className="font-['Inter'] text-[#92989e] text-xs tracking-[0.26px] leading-4 md:text-right">
            @Copyright 2025 - School X Technology
          </div>
        </div>
      </footer>
    </section>
  );
};
