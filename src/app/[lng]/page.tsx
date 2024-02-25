import React from 'react';
import Link from 'next/link';
import { useTranslation } from './i18n';
import { Providers } from './providers';

interface PageProps {
  params: {
    lng: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
      <Providers>
        <p>{t('to-second-page')}</p>
      </Providers>
  );
};

export default Page;