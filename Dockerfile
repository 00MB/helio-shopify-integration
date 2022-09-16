FROM node:16

ENV ENV=
ENV STRIP_KEY=
ENV STRIPE_WEBHOOK_SIGNATURE=
ENV META_MASK_ADMIN_ACCOUNT_ADDRESS=
ENV META_MASK_ADMIN_ACCOUNT_PRIVATE_KEY=
ENV PINATA_API_KEY=
ENV PINATA_SECRET_API_KEY=
ENV EMAIL_HOST=
ENV EMAIL_USER=
ENV EMAIL_USER_PASSWORD=
ENV MONGO_URI=

WORKDIR app

COPY  . /app

RUN npm install

RUN chmod +x /app/start.sh

EXPOSE 8080

ENTRYPOINT [ "bash", "/app/start.sh" ]