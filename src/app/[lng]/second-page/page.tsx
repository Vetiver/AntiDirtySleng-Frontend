import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n';

interface PageProps {
  params: {
    lng: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, 'second-page');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>
      {t('back-to-home')}
      </Link>
    </>
  );
};

export default Page;