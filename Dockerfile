FROM ubuntu:18.04 as base-image
RUN apt-get update

#Install node js
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

#install supervisor in ubuntu for running multiple sub processes
RUN apt-get install -y supervisor

#install nginx server
RUN apt-get install -y nginx

#Switch this directory as our working directory
WORKDIR /usr/bobble-website

#Copy the package.json dependency file
COPY ./package*.json ./

# Install yarn globally since it is our default package manager
RUN npm install -g yarn

# Install dependencies using yarn since it is our default package manager
RUN yarn install

ENV REACT_APP_ENVIRONMENT=""

# Copy all files
COPY ./ ./

# Add bash
RUN apt install bash

# Make our shell script executable
RUN chmod +x env.sh

# Build react app
RUN yarn build

#Copy the configuration file to the default location as sepcified by nginx documentation
COPY ./docker-setup/nginx/default.conf.example /etc/nginx/conf.d/default.conf

#Copy the configuration file to the default location as sepcified by nginx documentation
COPY ./docker-setup/nginx/nginx.conf.example /etc/nginx/nginx.conf

#Copy the supervisord configuration file to the desired location as specified by supervisord documentation
COPY ./docker-setup/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

#Expose the listening ports 3000 for react and 5050 for nginx server
EXPOSE 80

# Launch supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]