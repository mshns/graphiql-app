export const DEFAULT_QUERY = {
  query: `query ($filmId: ID!, $planetId: ID!) {
  film(filmID: $filmId) {
    created
    director
    episodeID
    planetConnection {
      planets {
        name
      }
    }
  }
  planet(planetID: $planetId) {
    name
    diameter
  }
}`,
  variables: '{ "filmId": "2", "planetId": "3" }',
  headers: '{ "Cache-Control": "max-age=0" }'
};
