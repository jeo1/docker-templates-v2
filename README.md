# Compose included
| Compose | Github-Action | Setup for Renovate | Renovate Works | Notes |
| ------- | :-----------: | :----------------: | :------------: | ----- |
| [audiobooks](https://github.com/jeo1/docker-templates-v2/tree/audiobooks) | ❌ |  |  |
| [cadvisor](https://github.com/jeo1/docker-templates-v2/tree/cadvisor) | ✅ | ⚠️ |  | latest did not match (may be out of date)
| [duckdns](https://github.com/jeo1/docker-templates-v2/tree/duckdns) | ✅ | ❕ |  | no merge created - testing with latest
| [gitea](https://github.com/jeo1/docker-templates-v2/tree/gitea) | ✅ | ✅ | ✅ |
| [grafana](https://github.com/jeo1/docker-templates-v2/tree/grafana) | ✅ | ✅ | ❕ | [pr72](https://github.com/jeo1/docker-templates-v2/pull/72) required manual merge
| [graphite](https://github.com/jeo1/docker-templates-v2/tree/graphite) | ✅ | ✅ |  | look into switch to `sitespeedio/graphite`
| [influxdb](https://github.com/jeo1/docker-templates-v2/tree/influxdb) | ✅ | ✅ |  |
| [jackett](https://github.com/jeo1/docker-templates-v2/tree/jackett) | ✅ | ✅ | ✅ |
| [jellyfin](https://github.com/jeo1/docker-templates-v2/tree/jellyfin) | ✅ | ✅ | ✅ | 
| [kuma](https://github.com/jeo1/docker-templates-v2/tree/kuma) | ✅ | ✅ |  |
| [nginx](https://github.com/jeo1/docker-templates-v2/tree/nginx) | ✅ | ✅ | ✅ |
| [node-exporter-alpine](https://github.com/jeo1/docker-templates-v2/tree/node-exporter-alpine) | ⚠️ |  |  | need to setup github-action to run on alpine (not ubuntu)
| [node-exporter](https://github.com/jeo1/docker-templates-v2/tree/node-exporter) | ✅ | ✅ |  |
| [plex](https://github.com/jeo1/docker-templates-v2/tree/plex) | ✅ | ✅ | ❕ | 
| [portainer](https://github.com/jeo1/docker-templates-v2/tree/portainer) | ✅ | ✅ |  |
| [prometheus](https://github.com/jeo1/docker-templates-v2/tree/prometheus) | ✅ | ✅ | ✅ |
| [qbittorrent](https://github.com/jeo1/docker-templates-v2/tree/qbittorrent) | ✅ | ✅ | ✅ | 
| [radarr](https://github.com/jeo1/docker-templates-v2/tree/radarr) | ✅ | ✅ |  |
| [sonarr](https://github.com/jeo1/docker-templates-v2/tree/sonarr) | ✅ | ✅ | ✅ |
| [tautulli](https://github.com/jeo1/docker-templates-v2/tree/tautulli) | ✅ | ✅ |  |
| [tdarr](https://github.com/jeo1/docker-templates-v2/tree/tdarr) | ✅ | ✅ | ✅ |
| [twitch-dvr](https://github.com/jeo1/docker-templates-v2/tree/twitch-dvr) | ❌ |  |  |


# Ports
| Compose                                                                         | Container | Container Port | Default Port |
| -------                                                                         | --------- | -------------- | ------------ |
| [audiobooks](https://github.com/jeo1/docker-templates-v2/tree/audiobooks)       | [qbittorrent](https://github.com/jeo1/docker-templates-v2/blob/audiobooks/docker-compose.yml)       | 8080 | [None](https://github.com/jeo1/docker-templates-v2/blob/audiobooks/env.j2) |
| [cadvisor](https://github.com/jeo1/docker-templates-v2/tree/cadvisor)           | [cadvisor](https://github.com/jeo1/docker-templates-v2/blob/cadvisor/docker-compose.yml)            | 8080 | [8083](https://github.com/jeo1/docker-templates-v2/blob/cadvisor/env.j2)   |
| [gitea](https://github.com/jeo1/docker-templates-v2/tree/gitea)                 | [gitea](https://github.com/jeo1/docker-templates-v2/blob/gitea/docker-compose.yml)                  | 3000 | [None](https://github.com/jeo1/docker-templates-v2/blob/gitea/env.j2) |
| [gitea](https://github.com/jeo1/docker-templates-v2/tree/gitea)                 | [gitea](https://github.com/jeo1/docker-templates-v2/blob/gitea/docker-compose.yml)                  | 22   | [None](https://github.com/jeo1/docker-templates-v2/blob/gitea/env.j2) |
| [grafana](https://github.com/jeo1/docker-templates-v2/tree/grafana)             | [grafana](https://github.com/jeo1/docker-templates-v2/blob/grafana/docker-compose.yml)              | 3000 | [None](https://github.com/jeo1/docker-templates-v2/blob/grafana/env.j2) |
| [graphite](https://github.com/jeo1/docker-templates-v2/tree/graphite)           | [graphite](https://github.com/jeo1/docker-templates-v2/blob/graphite/docker-compose.yml)            | host | |
| [influxdb](https://github.com/jeo1/docker-templates-v2/tree/influxdb)           | [influxdb2](https://github.com/jeo1/docker-templates-v2/blob/influxdb/docker-compose.yml)           | 8086 | [None](https://github.com/jeo1/docker-templates-v2/blob/influxdb/env.j2) |
| [jackett](https://github.com/jeo1/docker-templates-v2/tree/jackett)             | [jackett](https://github.com/jeo1/docker-templates-v2/blob/jackett/docker-compose.yml)              | 9117 | [None](https://github.com/jeo1/docker-templates-v2/blob/jackett/env.j2) |
| [jellyfin](https://github.com/jeo1/docker-templates-v2/tree/jellyfin)           | [jellyfin](https://github.com/jeo1/docker-templates-v2/blob/jellyfin/docker-compose.yml)            | 8096 | [None](https://github.com/jeo1/docker-templates-v2/blob/jellyfin/env.j2) |
| [jellyfin](https://github.com/jeo1/docker-templates-v2/tree/jellyfin)           | [jellyfin](https://github.com/jeo1/docker-templates-v2/blob/jellyfin/docker-compose.yml)            | 7359 | [None](https://github.com/jeo1/docker-templates-v2/blob/jellyfin/env.j2) |
| [jellyfin](https://github.com/jeo1/docker-templates-v2/tree/jellyfin)           | [jellyfin](https://github.com/jeo1/docker-templates-v2/blob/jellyfin/docker-compose.yml)            | 1900 | [None](https://github.com/jeo1/docker-templates-v2/blob/jellyfin/env.j2) |
| [kuma](https://github.com/jeo1/docker-templates-v2/tree/kuma)                   | [uptime-kuma](https://github.com/jeo1/docker-templates-v2/blob/kuma/docker-compose.yml)             | 3001 | [None](https://github.com/jeo1/docker-templates-v2/blob/kuma/env.j2) |
| [nginx](https://github.com/jeo1/docker-templates-v2/tree/nginx)                 | [nginx](https://github.com/jeo1/docker-templates-v2/blob/nginx/docker-compose.yml)                  | host | | 
| [node-exporter](https://github.com/jeo1/docker-templates-v2/tree/node-exporter) | [node-exporter](https://github.com/jeo1/docker-templates-v2/blob/node-exporter/docker-compose.yml)  | 9100 | [9100](https://github.com/jeo1/docker-templates-v2/blob/node-exporter/env.j2) | 
| [node-exporter-alpine](https://github.com/jeo1/docker-templates-v2/tree/node-exporter-alpine) | [node-exporter-alpine](https://github.com/jeo1/docker-templates-v2/blob/node-exporter-alpine/docker-compose.yml) | 9100 | [9100](https://github.com/jeo1/docker-templates-v2/blob/node-exporter-alpine/env.j2) |
| [plex](https://github.com/jeo1/docker-templates-v2/tree/plex)                   | [plex](https://github.com/jeo1/docker-templates-v2/blob/plex/docker-compose.yml)                    | macvlan | | 
| [portainer](https://github.com/jeo1/docker-templates-v2/tree/portainer)         | [portainer](https://github.com/jeo1/docker-templates-v2/blob/portainer/docker-compose.yml)          | 8000 | [8000](https://github.com/jeo1/docker-templates-v2/blob/portainer/env.j2) | 
| [portainer](https://github.com/jeo1/docker-templates-v2/tree/portainer)         | [portainer](https://github.com/jeo1/docker-templates-v2/blob/portainer/docker-compose.yml)          | 9000 | [9000](https://github.com/jeo1/docker-templates-v2/blob/portainer/env.j2) | 
| [portainer](https://github.com/jeo1/docker-templates-v2/tree/portainer)         | [portainer](https://github.com/jeo1/docker-templates-v2/blob/portainer/docker-compose.yml)          | 9443 | [443](https://github.com/jeo1/docker-templates-v2/blob/portainer/env.j2) | 
| [prometheus](https://github.com/jeo1/docker-templates-v2/tree/prometheus)       | [prometheus](https://github.com/jeo1/docker-templates-v2/blob/prometheus/docker-compose.yml)        | 9090 | [None](https://github.com/jeo1/docker-templates-v2/blob/prometheus/env.j2) | 
| [qbittorrent](https://github.com/jeo1/docker-templates-v2/tree/qbittorrent)     | [qbittorrent](https://github.com/jeo1/docker-templates-v2/blob/qbittorrent/docker-compose.yml)      | 8080 | [None](https://github.com/jeo1/docker-templates-v2/blob/qbittorrent/env.j2) | 
| [radarr](https://github.com/jeo1/docker-templates-v2/tree/radarr)               | [radarr](https://github.com/jeo1/docker-templates-v2/blob/radarr/docker-compose.yml)                | 7878 | [None](https://github.com/jeo1/docker-templates-v2/blob/radarr/env.j2) | 
| [radarr](https://github.com/jeo1/docker-templates-v2/tree/radarr)               | [qbittorrent](https://github.com/jeo1/docker-templates-v2/blob/radarr/docker-compose.yml)           | 8080 | [None](https://github.com/jeo1/docker-templates-v2/blob/radarr/env.j2) | 
| [sonarr](https://github.com/jeo1/docker-templates-v2/tree/sonarr)               | [sonarr](https://github.com/jeo1/docker-templates-v2/blob/sonarr/docker-compose.yml)                | 8989 | [None](https://github.com/jeo1/docker-templates-v2/blob/sonarr/env.j2) | 
| [sonarr](https://github.com/jeo1/docker-templates-v2/tree/sonarr)               | [qbittorrent](https://github.com/jeo1/docker-templates-v2/blob/sonarr/docker-compose.yml)           | 8080 | [None](https://github.com/jeo1/docker-templates-v2/blob/sonarr/env.j2) | 
| [tautulli](https://github.com/jeo1/docker-templates-v2/tree/tautulli)           | [tautulli](https://github.com/jeo1/docker-templates-v2/blob/tautulli/docker-compose.yml)            | 8181 | [None](https://github.com/jeo1/docker-templates-v2/blob/tautulli/env.j2) | 
| [tdarr](https://github.com/jeo1/docker-templates-v2/tree/tdarr)                 | [tdarr](https://github.com/jeo1/docker-templates-v2/blob/tdarr/docker-compose.yml)                  | host | | 

<!--

-->

<!--
icons
✅
⚠️
❌
❕
-->


<!--
# renovate version limit
    {
      "automergeType": "pr",
      "automerge": true,
      "baseBranches": [
        "main"
      ],
      "matchDatasources": [
        "docker"
      ],
      "matchPackageNames": [
        "nginx"
      ],
      "allowedVersions": "<=1.29"
    }
-->

