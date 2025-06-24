import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';
import {
  PlayCircleIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import {
  CardsSkeleton,
} from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iframes',
};

export default async function Page() {
  const youtube = {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/aHYvmY3nV5U?si=UIhLsJW5f4j7Jn9a",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy: "strict-origin-when-cross-origin",
    allowFullScreen: true,
  };
  const presentacion = {
    src: "https://www.slideserve.com/embed/12603475",
    width: "100%",
    height: "497",
    frameBorder: "0",
    marginWidth: "0",
    marginHeight: "0",
    scrolling: "no",
    Style: "border:1px solid #CCC;border-width:1px 1px;margin-bottom:5px;max-width: 100%;",
    allowFullScreen: true,
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
  };
  const mapa = {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2748349095345!2d-101.23508392587796!3d20.5768310031494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85c965f8dd99%3A0xf0c50b96a2552383!2sUniversidad%20Tecnol%C3%B3gica%20de%20Salamanca!5e0!3m2!1ses!2smx!4v1749753481039!5m2!1ses!2smx",
    width: "100%",
    height: "450",
    Style: "border:0;",
    allowFullScreen: "",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  };
  const cardsValues = [
    { title: "Youtube", icon: PlayCircleIcon, attributes: youtube },
    { title: "Slide", icon: PresentationChartLineIcon, attributes: presentacion},
    { title: "Google maps", icon: AcademicCapIcon, attributes: mapa },
  ];
  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        APIs
      </h1>
      <div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <Suspense fallback={<CardsSkeleton />}>

            {/*Cartas con texto*/}
            {cardsValues.map((cardValue, index) => {
              const IconCard = cardValue.icon;
              return (
                <div className="rounded-xl bg-gray-50 p-2 shadow-sm" key={index}>
                  <div className="flex p-4">
                    <IconCard className="h-5 w-5 text-gray-700" />
                    <h3 className="ml-2 text-sm font-medium">{cardValue.title}</h3>
                  </div>
                  <iframe {...cardValue.attributes as React.IframeHTMLAttributes<HTMLIFrameElement>} />
                </div>
              );
            })}

          </Suspense>
        </div>
      </div>
    </div>
  );
}