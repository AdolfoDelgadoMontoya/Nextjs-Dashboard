import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';
import {
    UserIcon,
    ExclamationCircleIcon,
    PencilSquareIcon,
    HeartIcon,
} from '@heroicons/react/24/outline';
import {
    CardsSkeleton,
} from '@/app/ui/skeletons';
import { Metadata } from 'next';
import Image from 'next/image'
import { GetApiData } from '@/app/lib/getapidata';

export const metadata: Metadata = {
    title: 'APIS',
};

export default async function Page() {
    const data = await GetApiData();
    const stringsSource = [
        { title: "Lista de nombres", icon: UserIcon, stringValue: data.props.data?.users.name, alterString: "Sin conexión" },
        { title: "Consejo al azar", icon: ExclamationCircleIcon, stringValue: data.props.data?.advice.slip.advice, alterString: "Sin conexión" },
        { title: "Actividad al azar", icon: PencilSquareIcon, stringValue: data.props.data?.activity.activity, alterString: "Sin conexión" },
    ];
    const imageSource = { title: "Perro al azar", source: data.props.data?.image.message, icon: HeartIcon, alt:"Sin conexión"};
    const ImageIcon = imageSource.icon;
    return (
        <div>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                APIs
            </h1>
            <div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Suspense fallback={<CardsSkeleton />}>

                        {/*Cartas con texto*/}
                        {stringsSource.map((stringSource, index) => {
                            const IconTxtCard = stringSource.icon;
                            return (
                                <div className="rounded-xl bg-gray-50 p-2 shadow-sm" key={index}>
                                    <div className="flex p-4">
                                        <IconTxtCard className="h-5 w-5 text-gray-700" />
                                        <h3 className="ml-2 text-sm font-medium">{stringSource.title}</h3>
                                    </div>
                                    <p
                                        className={`${lusitana.className}
                                truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
                                    >
                                        {stringSource.stringValue || stringSource.alterString}
                                    </p>
                                </div>
                            );
                        })}

                        {/*Carta con imagen*/}
                        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                            <div className="flex p-4">
                                <ImageIcon className="h-5 w-5 text-gray-700" />
                                <h3 className="ml-2 text-sm font-medium">{imageSource.title}</h3>
                            </div>
                            <p
                                className={`${lusitana.className}
                              truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
                            >
                                {imageSource.source ?(
                                <Image src={imageSource.source} width={100} height={100} alt={imageSource.alt} />
                                ) : (<p>{imageSource.alt}</p>)}
                            </p>
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}