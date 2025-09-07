- `.env` settings
```env
COMPOSE_PROJECT_NAME=sonarr
TIMEZONE=America/Toronto

ROOT_PATH=# path to media dir inside container

# Update
MEDIA=# path to media dir
DOWNLOADS=# path to download dir for qbittorrent

SONARR_CONFIG=# path to sonarr config dir
QBITTORRENT_CONFIG=# path to qbittorrent config dir

EXTERNAL_SONARR_PORT=<external port for radarr>
EXTERNAL_QBITTORRENT_PORT=<external port for qbittorrent>
```