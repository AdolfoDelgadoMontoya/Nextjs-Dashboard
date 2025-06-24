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

export async function GetApiData() {
    try {
        const [res1, res2, res3, res4] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://api.adviceslip.com/advice'),
            fetch('https://bored-api.appbrewery.com/random'),
            fetch('https://dog.ceo/api/breeds/image/random'),
        ]);

        // Verificamos si las respuestas fueron exitosas
        if (!res1.ok || !res2.ok || !res3.ok || !res4.ok) {
            throw new Error('Error al obtener los datos');
        }

        const [users, advice, activity, image] = await Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]);

        return {
            props: {
                data: { users, advice, activity, image },
            },
            revalidate: 60, // ISR: revalida cada 60 segundos
        };
    } catch (err) {
        return {
            props: {
                data: null,
                error: err,
            },
        };
    }
}