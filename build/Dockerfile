FROM alpine

RUN \
    echo "**** Update ****" && \
    apk update

RUN \
    echo "**** Install Packages ****" && \
    apk add \
        openssl

COPY start.sh /start.sh
RUN chmod +x /start.sh

VOLUME /ssl

CMD ["/start.sh"]
