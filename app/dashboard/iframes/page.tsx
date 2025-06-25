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
  /*
  <iframe width="560" height="315" src="https://www.youtube.com/embed/aHYvmY3nV5U?si=yioCuzbZNI2gVBnN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <iframe src="https://www.slideserve.com/embed/12603475" width="600" height="497" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px;max-width: 100%;" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2748349095264!2d-101.23508392587794!3d20.5768310031494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85c965f8dd99%3A0xf0c50b96a2552383!2sUniversidad%20Tecnol%C3%B3gica%20de%20Salamanca!5e0!3m2!1ses!2smx!4v1750870203654!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  */
  const YoutubeIcon = PlayCircleIcon;
  const SlideIcon = PresentationChartLineIcon;
  const GoogleMapsIcon = AcademicCapIcon;
  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        APIs
      </h1>
      <div>
        {/*Cartas*/}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <Suspense fallback={<CardsSkeleton />}>
            <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
              {/*Youtube*/}
              <div className="flex p-4">
                <YoutubeIcon className="h-5 w-5 text-gray-700" />
                <h3 className="ml-2 text-sm font-medium">Youtube</h3>
              </div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHYvmY3nV5U?si=yioCuzbZNI2gVBnN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            {/*Slide*/}
            <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
              <div className="flex p-4">
                <SlideIcon className="h-5 w-5 text-gray-700" />
                <h3 className="ml-2 text-sm font-medium">Slide</h3>
              </div>
              <iframe src="https://www.slideserve.com/embed/12603475" width="100%" height="497" style={{ border: "1px solid #CCC", borderWidth: "1px 1px 0", marginBottom: "5px", maxWidth: "100%" }} allowFullScreen></iframe>
            </div>
            {/*Google maps*/}
            <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
              <div className="flex p-4">
                <GoogleMapsIcon className="h-5 w-5 text-gray-700" />
                <h3 className="ml-2 text-sm font-medium">Google maps</h3>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2748349095264!2d-101.23508392587794!3d20.5768310031494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85c965f8dd99%3A0xf0c50b96a2552383!2sUniversidad%20Tecnol%C3%B3gica%20de%20Salamanca!5e0!3m2!1ses!2smx!4v1750870203654!5m2!1ses!2smx" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}