import type { SeoFacebookType, SeoAlternateLink, SeoTwitterCard } from './seoData';
import { Helmet } from 'react-helmet-async';
import { LanguageCodeLowercase } from 'types';
import { useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';

type TMetaItem = { name: string; content: string };

type SeoProps = {
  title?: string;
  image?: string;
  description?: string;
  twitterCreator?: string;
  twitterSite?: string;
  twitterCard?: SeoTwitterCard;
  fbType?: SeoFacebookType;
  fbLocale?: LanguageCodeLowercase;
  fbWebsiteUrl?: string;
  fbAppId?: string;
  meta?: TMetaItem[];
  alternate?: SeoAlternateLink[];
};

export const Seo = ({
  title,
  description,
  image,
  twitterCreator,
  twitterSite,
  twitterCard,
  fbType,
  fbWebsiteUrl,
  fbAppId,
  meta,
  alternate,
}: SeoProps) => {
  const lang = useAppSelector(selectActiveLang)?.toLowerCase() as LanguageCodeLowercase;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      {lang && <html lang={lang} />}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Twitter tags */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {image && <meta name="twitter:image" content={image} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      {(twitterSite || twitterCreator) && <meta name="twitter:site" content={twitterSite || twitterCreator} />}

      {/* Facebook tags */}
      {fbType && <meta property="og:type" content={fbType} />}
      {fbWebsiteUrl && <meta property="og:url" content={fbWebsiteUrl} />}
      {image && <meta property="og:image" content={image} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {lang && <meta property="og:locale" content={lang} />}
      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

      {meta?.map(({ name, content }) => (
        <meta name={name} content={content} />
      ))}

      {alternate?.map(({ href, hrefLang }) => (
        <link rel="alternate" href={href} hrefLang={hrefLang} key={hrefLang} />
      ))}
    </Helmet>
  );
};
