import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';
import {
    UserIcon,
    ExclamationCircleIcon,
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
    const data1 = await GetApiData("akita");
    const data2 = await GetApiData("african");
    const data3 = await GetApiData("boxer");
    const data4 = await GetApiData("basenji");

    const sources = [
        {
            stringValueRow1: data1.props.data?.users.name,
            stringValueRow2: data1.props.data?.advice.slip.advice,
            imgValueRow3: data1.props.data?.image.message
        },
        {
            stringValueRow1: data2.props.data?.users.name,
            stringValueRow2: data2.props.data?.advice.slip.advice,
            imgValueRow3: data2.props.data?.image.message
        },
        {
            stringValueRow1: data3.props.data?.users.name,
            stringValueRow2: data3.props.data?.advice.slip.advice,
            imgValueRow3: data3.props.data?.image.message
        },
        {
            stringValueRow1: data4.props.data?.users.name,
            stringValueRow2: data4.props.data?.advice.slip.advice,
            imgValueRow3: data4.props.data?.image.message
        },
    ];

    const NamesIcon =  UserIcon;
    const AdviceIcon = ExclamationCircleIcon;
    const DogsIcon = HeartIcon;
    return (
        <div>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                APIs
            </h1>
            <div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Suspense fallback={<CardsSkeleton />}>

                        {/*Cartas con texto*/}
                        {sources.map((source, index) => {
                            return (
                                <div key={index}>
                                    {/*Cartas con nombres*/}
                                    <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
                                        <div className="flex p-4">
                                            <NamesIcon className="h-5 w-5 text-gray-700" />
                                            <h3 className="ml-2 text-sm font-medium">Lista de nombres</h3>
                                        </div>
                                        <p
                                            className={`${lusitana.className}
                                        rounded-xl bg-white px-4 py-8 text-justify text-2xl`}
                                        >
                                            {source.stringValueRow1 || "Not found"}
                                        </p>
                                    </div>
                                    {/*Cartas con consejos*/}
                                    <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
                                        <div className="flex p-4">
                                            <AdviceIcon className="h-5 w-5 text-gray-700" />
                                            <h3 className="ml-2 text-sm font-medium">Consejo al azar</h3>
                                        </div>
                                        <p
                                            className={`${lusitana.className}
                                        rounded-xl bg-white px-4 py-8 text-justify text-2xl`}
                                        >
                                            {source.stringValueRow2 || "Not found"}
                                        </p>
                                    </div>
                                    {/*Cartas con perros*/}
                                    <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
                                        <div className="flex p-4">
                                            <DogsIcon className="h-5 w-5 text-gray-700" />
                                            <h3 className="ml-2 text-sm font-medium">Perros al azar</h3>
                                        </div>
                                        <p
                                            className={`${lusitana.className}
                              truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
                                        >
                                            {source.imgValueRow3 ? (
                                                <Image src={source.imgValueRow3} width={100} height={100} alt={"Dog img"+index} />
                                            ) : (<p>{"Dog img"+index}</p>)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}