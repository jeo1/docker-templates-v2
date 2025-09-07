- `.env` settings
```env
COMPOSE_PROJECT_NAME=radarr
TIMEZONE=America/Toronto

ROOT_PATH=/media #path to media dir inside container

# Update
RADARR_MEDIA=<path to media dir>
RADARR_DOWNLOADS=<path to download dir for qbittorrent>

RADARR_CONFIG=<path to radarr config dir>
RADARR_QBITTORRENT_CONFIG=<path to qbittorrent config dir>

RADARR_PORT=<external port for radarr>
RADARR_QBITTORRENT_PORT=<external port for qbittorrent>
```
