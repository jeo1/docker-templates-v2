- `.env` settings
```env
COMPOSE_PROJECT_NAME=nginx
TIMEZONE=America/Toronto

NGINX_CONTAINER_NAME=nginx
SETUP_CONTAINER_NAME=nginx-setup

# Update
SSL=<path for ssl dir>
NGINX=<path for nginx config dir>
```

```
mkdir $NGINX/upstream
mkdir $NGINX/streams
```


- `upstream` example for qbittorrent
```
upstream qbittorrent {
    zone qbittorrent 64k;
    server <target p>:<port>;
    keepalive 2;
}
```

- `server` example for qbittorrent
```
server {
    listen 80;
    server_name qbittorrent.homelab.internal;

    location / {
        proxy_pass http://qbittorrent;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /static {
        rewrite ^/static(.*) /$1 break;
        root /static;
    }
}
```
