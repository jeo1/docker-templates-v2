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
| [jellyfin](https://github.com/jeo1/docker-templates-v2/tree/jellyfin) | ✅ | ❕ | using latest sha (untested)
| [kuma](https://github.com/jeo1/docker-templates-v2/tree/kuma) | ✅ | ✅ |
| [nginx](https://github.com/jeo1/docker-templates-v2/tree/nginx) | ✅ | ✅ | currently limited by `allowedVersions` 
| [node-exporter-alpine](https://github.com/jeo1/docker-templates-v2/tree/node-exporter-alpine) | ⚠️ |  | need to setup github-action to run on alpine (not ubuntu)
| [node-exporter](https://github.com/jeo1/docker-templates-v2/tree/node-exporter) | ✅ | ✅ |
| [plex](https://github.com/jeo1/docker-templates-v2/tree/plex) | ⚠️ |  | needs to add http check
| [portainer](https://github.com/jeo1/docker-templates-v2/tree/portainer) | ✅ | ✅ |
| [prometheus](https://github.com/jeo1/docker-templates-v2/tree/prometheus) | ✅ |  |
| [qbittorrent](https://github.com/jeo1/docker-templates-v2/tree/qbittorrent) | ✅ | ❕ | add with latest sha (untested, issue with named verison)
| [radarr](https://github.com/jeo1/docker-templates-v2/tree/radarr) | ✅ | ✅ |
| [sonarr](https://github.com/jeo1/docker-templates-v2/tree/sonarr) | ✅ | ✅ |
| [tautulli](https://github.com/jeo1/docker-templates-v2/tree/tautulli) | ✅ |  |
| [tdarr](https://github.com/jeo1/docker-templates-v2/tree/tdarr) | ✅ |  |
| [twitch-dvr](https://github.com/jeo1/docker-templates-v2/tree/twitch-dvr) | ❌ |  |


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