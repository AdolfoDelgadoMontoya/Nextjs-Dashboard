import {
  PlayCircleIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  reproductor: PlayCircleIcon,
  mapa: AcademicCapIcon,
  presentacion: PresentationChartLineIcon
};

export default async function CardWrapper() {
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
    src:"https://www.slideserve.com/embed/12603475",
    width:"100%",
    height:"497",
    frameBorder:"0",
    marginWidth:"0",
    marginHeight:"0",
    scrolling:"no",
    Style:"border:1px solid #CCC;border-width:1px 1px;margin-bottom:5px;max-width: 100%;",
    allowFullScreen:true,
    webkitallowfullscreen:"true",
    mozallowfullscreen: "true",
  };
  const mapa = {
    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2748349095345!2d-101.23508392587796!3d20.5768310031494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85c965f8dd99%3A0xf0c50b96a2552383!2sUniversidad%20Tecnol%C3%B3gica%20de%20Salamanca!5e0!3m2!1ses!2smx!4v1749753481039!5m2!1ses!2smx",
    width:"100%",
    height:"450",
    Style:"border:0;",
    allowFullScreen:"",
    loading:"lazy",
    referrerPolicy:"no-referrer-when-downgrade",
  };

  return (
    <>
      <Card title="Musica qlera" values={youtube} icon="reproductor" />
      <Card title="Presentación nextjs" values={presentacion} icon="presentacion" />
      <Card title="Mapa a UTS" values={mapa} icon="mapa"/>
    </>
  );
}

export function Card({
  title,
  values,
  icon,
}: {
  title: string;
  values: any;
  icon: 'reproductor' | 'mapa' | 'presentacion';
}) {

  const Icon = iconMap[icon];

  return (
    <>
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          <iframe {...values} />
        </p>
      </div>
    </>
  );
}