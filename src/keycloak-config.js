import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
  "realm": "SPA",
  "url": "http://localhost:8080/auth",
  "ssl-required": "external",
  "resource": "reactapp",
  "public-client": true,
  "clientId": "reactapp"
});