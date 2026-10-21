// Enlaces a la ficha de Google Maps de Sublink (Place ID ya usado en /api/reviews).
// Formato oficial "Maps URLs": https://developers.google.com/maps/documentation/urls
export const MAPS_PLACE_ID = "ChIJd4jZgbDIwigRmh5Ff5t_6e0";
const NAME = encodeURIComponent("Sublink Sublimación Textil Valencia Venezuela");

// Abre la ficha (reseñas, fotos, botón Cómo llegar)
export const MAPS_PLACE_URL =
  `https://www.google.com/maps/search/?api=1&query=${NAME}&query_place_id=${MAPS_PLACE_ID}`;

// Abre la app de Maps con la ruta hacia Sublink desde donde esté el usuario
export const MAPS_DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${NAME}&destination_place_id=${MAPS_PLACE_ID}`;
