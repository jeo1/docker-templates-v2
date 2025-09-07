#!/bin/sh

KEY=/ssl/portainer.key
CRT=/ssl/portainer.crt

if [ ! -f "$KEY" ] || [ ! -f "$CRT" ] ; then
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $KEY -out $CRT -subj "/C=CA"
fi

