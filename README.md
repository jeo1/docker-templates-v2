# Compose included
| Compose | Github-Action | Setup for Renovate | Notes |
| ------- | :-----------: | :----------------: | ----- |
| [audiobooks](https://github.com/jeo1/docker-templates-v2/tree/audiobooks) | ❌ |  |
| [cadvisor](https://github.com/jeo1/docker-templates-v2/tree/cadvisor) | ✅ | ⚠️ | latest did not match (may be out of date)
| [duckdns](https://github.com/jeo1/docker-templates-v2/tree/duckdns) | ✅ | ⚠️ | no merge created - testing with latest
| [gitea](https://github.com/jeo1/docker-templates-v2/tree/gitea) | ✅ | ✅ |
| [grafana](https://github.com/jeo1/docker-templates-v2/tree/grafana) | ✅ | ✅ |
| [graphite](https://github.com/jeo1/docker-templates-v2/tree/graphite) | ✅ |  |
| [influxdb](https://github.com/jeo1/docker-templates-v2/tree/influxdb) | ✅ |  |
| [jackett](https://github.com/jeo1/docker-templates-v2/tree/jackett) | ✅ | ✅ |
| [jellyfin](https://github.com/jeo1/docker-templates-v2/tree/jellyfin) | ✅ |  | using latest sha (untested)
| [kuma](https://github.com/jeo1/docker-templates-v2/tree/kuma) | ✅ | ✅ |
| [nginx](https://github.com/jeo1/docker-templates-v2/tree/nginx) | ✅ | ✅ | currently limited by `allowedVersions` 
| [node-exporter-alpine](https://github.com/jeo1/docker-templates-v2/tree/node-exporter-alpine) | ⚠️ |  | need to setup github-action to run on alpine (not ubuntu)
| [node-exporter](https://github.com/jeo1/docker-templates-v2/tree/node-exporter) | ✅ | ✅ |
| [plex](https://github.com/jeo1/docker-templates-v2/tree/plex) | ⚠️ |  | needs to add http check
| [portainer](https://github.com/jeo1/docker-templates-v2/tree/portainer) | ✅ | ✅ |
| [prometheus](https://github.com/jeo1/docker-templates-v2/tree/prometheus) | ✅ |  |
| [qbittorrent](https://github.com/jeo1/docker-templates-v2/tree/qbittorrent) | ✅ |  | make sure latest tag works
| [radarr](https://github.com/jeo1/docker-templates-v2/tree/radarr) | ✅ | ✅ |
| [sonarr](https://github.com/jeo1/docker-templates-v2/tree/sonarr) | ✅ | ✅ |
| [tautulli](https://github.com/jeo1/docker-templates-v2/tree/tautulli) | ✅ |  |
| [tdarr](https://github.com/jeo1/docker-templates-v2/tree/tdarr) | ✅ |  |
| [twitch-dvr](https://github.com/jeo1/docker-templates-v2/tree/twitch-dvr) | ❌ |  |


<!--
{
  "lscr.io/linuxserver/duckdns": {
    "branch": "duckdns",
    "workflow_id": "github-actions-duckdns.yml"
  },
  "docker.gitea.com/gitea": {
    "branch": "gitea",
    "workflow_id": "github-actions-gitea.yml"
  },
  "grafana/grafana": {
    "branch": "grafana",
    "workflow_id": "github-actions-grafana.yml"
  },
  "louislam/uptime-kuma": {
    "branch": "kuma",
    "workflow_id": "github-actions-kuma.yml"
  },
  "lscr.io/linuxserver/jackett": {
    "branch": "jackett",
    "workflow_id": "github-actions-jackett.yml"
  },
  "lscr.io/linuxserver/jellyfin": {
    "branch": "jellyfin",
    "workflow_id": "github-actions-jellyfin.yml"
  },
  "nginx": {
    "branch": "nginx",
    "workflow_id": "github-actions-nginx.yml"
  },
  "lscr.io/linuxserver/sonarr": {
    "branch": "sonarr",
    "workflow_id": "github-actions-sonarr.yml"
  },
  "lscr.io/linuxserver/radarr": {
    "branch": "radarr",
    "workflow_id": "github-actions-radarr.yml"
  },
  "quay.io/prometheus/node-exporter": {
    "branch": "node-exporter",
    "workflow_id": "github-actions-node-exporter.yml"
  },
  "portainer/portainer-ce": {
    "branch": "portainer",
    "workflow_id": "github-actions-portainer.yml"
  }
}
-->