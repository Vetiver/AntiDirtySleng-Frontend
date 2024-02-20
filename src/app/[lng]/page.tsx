import React from 'react';
import Link from 'next/link';
import { useTranslation } from './i18n';

interface PageProps {
  params: {
    lng: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        <p>{t('to-second-page')}</p>
      </Link>
    </>
  );
};

export default Page;