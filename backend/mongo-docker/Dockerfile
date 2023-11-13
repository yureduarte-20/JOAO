FROM mongo
ARG MONGO_HOST 
COPY provision2.sh .
ENV HOST=0.0.0.0 
ENV MONGO_HOST=${MONGO_HOST}
CMD sh ./provision2.sh 