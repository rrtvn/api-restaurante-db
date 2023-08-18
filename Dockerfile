# version de node
FROM node:20
# creamos el directorio 
RUN mkdir -p /usr/src/app
# seleccionamos directorio creado 
WORKDIR /user/src/app

COPY package*.json ./

RUN npm install 

COPY  . .
# puerto
EXPOSE 4010
#corremos app con nodemon
CMD [ "npm",  "run", "dev"  ]