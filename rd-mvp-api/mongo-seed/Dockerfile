FROM mongo:5.0.12

COPY init.json /init.json
CMD mongoimport --host database --db rd-mvp --collection projects --type json --file /init.json --jsonArray