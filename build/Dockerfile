FROM alpine

RUN \
    echo "**** Update ****" && \
    apk update

RUN \
    echo "**** Install Packages ****" && \
    apk add \
        curl

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
