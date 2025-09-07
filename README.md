### .env
```.env
COMPOSE_PROJECT_NAME=jellyfin
TIMEZONE=America/Toronto

CONTAINER_NAME=jellyfin

# Update
JELLYFIN_CONFIG=<Path to jellyfin config>
JELLYFIN_MEDIA_MOUNT=<Path to media>

JELLYFIN_WEB_PORT=<jellyfin web port>
JELLYFIN_LOCAL_PORT=<Allows clients to discover Jellyfin on the local network. default 7359>
JELLYFIN_DNLA_PORT=<Service discovery used by DNLA and clients. default 1900>
```
