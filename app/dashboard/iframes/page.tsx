import { lusitana } from "@/app/ui/fonts";
import CardWrapper from '@/app/ui/iframes/cards';
import { Metadata } from 'next';
import { Suspense } from 'react';
import {
  CardsSkeleton,
} from '@/app/ui/skeletons';


export const metadata: Metadata = {
  title: 'Iframes',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Iframes
      </h1>
      <div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
      </div>
    </main>
  );
}