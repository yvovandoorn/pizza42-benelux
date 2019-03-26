# Create a build container
FROM node:11-alpine

# Set WORKDIR (creates it if it doesn't exist)
WORKDIR /usr/src/app

# Update apk
RUN apk update \ 
  && apk upgrade

#copy files needed for the build
COPY . .

#Build
RUN npm i 

#Expose port
EXPOSE 8080

# start command
CMD [ "npm", "run", "dev" ]
