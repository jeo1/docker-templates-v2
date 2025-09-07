### .env
```.env
COMPOSE_PROJECT_NAME=plex
TIMEZONE=America/Toronto

CONTAINER_NAME=plex

DOCKER_MACVLAN_NETWORK=<name of docker network>
PLEX_IP_ADDRESS=<ip address of plex container>

# Update
PLEX_MEDIA_MOUNT=<path to plex media>
PLEX_CONFIG=<path to plex config>
```

### private/.env
```.env
PLEX_CLAIM=<private plex token>
```
- Can obtain a claim token from https://plex.tv/claim and input here. Keep in mind that the claim tokens expire within 4 minutes.