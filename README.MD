# Overview

This is a very simple proof of concept repository for building a full stack app with React/Express in TypeScript.

# Setup

`docker build . -t myapp`
`docker run -p 8000:8000 myapp`

# Dependencies

To play around with this, you'll need to run a mysql instance on port 3306 and then create a database called test,
i.e. `CREATE DATABASE test;` in SQL speak.

You would also need to expose that to the Express app, so you could do it in a `docker-compose.yaml` file or 
add a `-p 3306:3306` to the `docker run` command above if you're running it on localhost.