import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type GoogleReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  rating?: number;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  publishTime?: string;
  googleMapsUri?: string;
};

type Place = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
};

function httpsUrl(value?: string) {
  if (!value) return null;
  try { return new URL(value).protocol === 'https:' ? value : null; }
  catch { return null; }
}

export async function GET(request: NextRequest) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    return NextResponse.json({ status: 'unconfigured', reviews: [] }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  try {
    const locale = request.nextUrl.searchParams.get('lang') === 'en' ? 'en' : 'es';
    const url = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`);
    url.searchParams.set('languageCode', locale);
    const response = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
      cache: 'no-store',
    });
    if (!response.ok) throw new Error(`Google Places request failed: ${response.status}`);

    const place = await response.json() as Place;
    const reviews = (place.reviews ?? []).slice(0, 5).map(review => {
      const text = review.text?.text || review.originalText?.text || '';
      return {
        id: review.name || `${review.publishTime}-${review.authorAttribution?.displayName}`,
        author: review.authorAttribution?.displayName || (locale === 'es' ? 'Usuario de Google' : 'Google user'),
        authorUrl: httpsUrl(review.authorAttribution?.uri),
        avatarUrl: httpsUrl(review.authorAttribution?.photoUri),
        rating: typeof review.rating === 'number' ? review.rating : null,
        text,
        translated: Boolean(review.originalText?.text && text !== review.originalText.text),
        publishedAt: review.publishTime || null,
        relativeTime: review.relativePublishTimeDescription || null,
        url: httpsUrl(review.googleMapsUri),
      };
    });

    return NextResponse.json({
      status: 'ready',
      rating: typeof place.rating === 'number' ? place.rating : null,
      count: typeof place.userRatingCount === 'number' ? place.userRatingCount : null,
      url: httpsUrl(place.googleMapsUri),
      reviews,
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Unable to load Google Places reviews:', error);
    return NextResponse.json({ status: 'unavailable', reviews: [] }, {
      status: 503,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
}
