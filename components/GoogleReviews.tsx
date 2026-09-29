'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { company, type Locale } from '@/data/site';
import { Arrow } from './Header';

type Review = {
  id: string;
  author: string;
  authorUrl: string | null;
  avatarUrl: string | null;
  rating: number | null;
  text: string;
  translated: boolean;
  publishedAt: string | null;
  relativeTime: string | null;
  url: string | null;
};

type ReviewsResponse = {
  status: 'ready' | 'unconfigured' | 'unavailable';
  rating?: number | null;
  count?: number | null;
  url?: string | null;
  reviews: Review[];
};

const labels = {
  es: {
    title: 'La experiencia, contada por nuestros clientes.',
    intro: 'Reseñas reales de nuestro perfil en Google Maps.',
    fallback: 'Conoce las experiencias de nuestros clientes en nuestro perfil de Google Maps.',
    open: 'Ver reseñas en Google Maps',
    count: 'reseñas en Google Maps',
    order: 'Google muestra hasta cinco reseñas ordenadas por relevancia.',
    source: 'Google Maps',
    stars: 'de 5 estrellas',
    translated: 'Traducido por Google',
    noComment: 'Valoración sin comentario.',
    individual: 'Ver reseña',
  },
  en: {
    title: 'The experience, in our customers’ words.',
    intro: 'Real reviews from our Google Maps profile.',
    fallback: 'Read about our customers’ experiences on our Google Maps profile.',
    open: 'Read reviews on Google Maps',
    count: 'reviews on Google Maps',
    order: 'Google shows up to five reviews, ordered by relevance.',
    source: 'Google Maps',
    stars: 'out of 5 stars',
    translated: 'Translated by Google',
    noComment: 'Rating without a written comment.',
    individual: 'View review',
  },
} as const;

function Stars({ rating, locale }: { rating: number; locale: Locale }) {
  return <div className="review-stars" role="img" aria-label={`${rating} ${labels[locale].stars}`}>
    {Array.from({ length: 5 }, (_, index) => <svg key={index} viewBox="0 0 20 20" aria-hidden="true" className={index < rating ? 'filled' : ''}><path d="m10 1.8 2.5 5.1 5.6.8-4.1 4 .97 5.6L10 14.7l-5 2.6.96-5.6-4.1-4 5.6-.8z" /></svg>)}
  </div>;
}

export function GoogleReviews({ locale }: { locale: Locale }) {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const t = labels[locale];

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/google-reviews?lang=${locale}`, { signal: controller.signal, cache: 'no-store' })
      .then(response => response.ok ? response.json() as Promise<ReviewsResponse> : null)
      .then(result => { if (result) setData(result); })
      .catch(() => { /* The direct Google Maps link remains available. */ });
    return () => controller.abort();
  }, [locale]);

  const reviews = data?.status === 'ready' ? data.reviews : [];
  return <section id="resenas" className="reviews-section section-pad" aria-labelledby="reviews-title">
    <div className="container">
      <div className="reviews-heading">
        <div>
          <h2 id="reviews-title">{t.title}</h2>
          {reviews.length > 0 && <p>{t.intro}</p>}
        </div>
        {reviews.length > 0 && <a className="reviews-all" href={company.googleMapsUrl} target="_blank" rel="noopener noreferrer">{t.open} <Arrow /></a>}
      </div>

      {reviews.length ? <>
        {typeof data?.rating === 'number' && <div className="reviews-summary"><strong>{data.rating.toFixed(1)}</strong><Stars rating={Math.round(data.rating)} locale={locale} />{typeof data.count === 'number' && <span>{data.count} {t.count}</span>}</div>}
        <div className="reviews-list">
          {reviews.map(review => <article className="review-card" key={review.id}>
            <div className="review-card-top"><Stars rating={review.rating ?? 0} locale={locale} /><span>{t.source}</span></div>
            <p className="review-quote">{review.text ? `“${review.text}”` : t.noComment}</p>
            {review.translated && <p className="review-translated">{t.translated}</p>}
            <div className="review-author">
              {review.avatarUrl ? <Image src={review.avatarUrl} alt="" width={40} height={40} unoptimized referrerPolicy="no-referrer" /> : <span className="review-avatar" aria-hidden="true">{review.author.slice(0, 1).toUpperCase()}</span>}
              <div>{review.authorUrl ? <a href={review.authorUrl} target="_blank" rel="noopener noreferrer"><strong>{review.author}</strong></a> : <strong>{review.author}</strong>}{review.publishedAt && <time dateTime={review.publishedAt}>{review.relativeTime || new Intl.DateTimeFormat(locale === 'es' ? 'es-US' : 'en-US', { dateStyle: 'medium' }).format(new Date(review.publishedAt))}</time>}</div>
            </div>
            <a className="review-source-link" href={review.url || data?.url || company.googleMapsUrl} target="_blank" rel="noopener noreferrer">{t.individual} <Arrow /></a>
          </article>)}
        </div>
        <p className="reviews-order">{t.order}</p>
      </> : <div className="reviews-fallback"><span>{t.source}</span><p>{t.fallback}</p><a href={company.googleMapsUrl} target="_blank" rel="noopener noreferrer">{t.open} <Arrow /></a></div>}
    </div>
  </section>;
}
