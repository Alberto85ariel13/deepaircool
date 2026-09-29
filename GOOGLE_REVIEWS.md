# Reseñas automáticas de Google Maps

La web incluye una sección bilingüe que muestra hasta cinco reseñas reales del perfil de Deep Air Cool Solutions, ordenadas **por relevancia**, como las entrega Places API (New). El enlace público de Maps sirve para abrir el perfil, pero no autoriza por sí solo la lectura automática.

Para activar la sección:

1. Crea o selecciona un proyecto en Google Cloud, [habilita Places API (New)](https://developers.google.com/maps/documentation/places/web-service/get-api-key) y configura la facturación que exige Google Maps Platform.
2. Obtén una clave de API y restríngela a Places API (New). Guárdala solo en el servidor como `GOOGLE_PLACES_API_KEY`.
3. Obtén el [Place ID](https://developers.google.com/maps/documentation/places/web-service/place-id) exacto del perfil enlazado: `https://maps.app.goo.gl/oFMaDLb18t4ZUCBj7`. Guárdalo como `GOOGLE_PLACE_ID`. El Place ID es distinto del enlace corto y del identificador `ftid` de la URL larga.
4. Completa `.env.example` en un archivo `.env.local` local y en los secretos del hosting; reinicia la aplicación.

La ruta `/api/google-reviews` pide `rating`, `userRatingCount`, `googleMapsUri` y `reviews` a Google desde el servidor. La clave nunca se envía al navegador. La respuesta no se guarda en caché; cuando Google publica cambios, aparecen en la siguiente visita. Si falta la configuración o Google falla, la sección mantiene el enlace al perfil y no inventa reseñas.

Google devuelve [hasta cinco reseñas por relevancia](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Place.FIELDS.reviews). La visualización muestra autor, foto cuando existe, valoración, fecha y enlace a cada reseña de Google Maps, según sus [reglas de atribución](https://developers.google.com/maps/documentation/places/web-service/policies). Antes de activar la integración en producción, el sitio también debe publicar Términos de uso y Política de privacidad que incorporen los términos y la política de Google, como exigen esas reglas.
