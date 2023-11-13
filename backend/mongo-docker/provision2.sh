
sleep 10;
mongosh --username $MONGO_INITDB_ROOT_USERNAME --authenticationMechanism "SCRAM-SHA-1" --password $MONGO_INITDB_ROOT_PASSWORD --host $MONGO_HOST \
--eval "use $PROBLEM_DATABASE;" \
--eval "db.createUser({user: '$PROBLEM_USERNAME',pwd: '$PROBLEM_USERPASSWORD',roles: [{ role: 'readWrite', db: '$PROBLEM_DATABASE' }]});" \
--eval "db.createCollection('test');" \
--eval "use $CHAT_DATABASE;" \
--eval "db.createUser({user: '$CHAT_USERNAME',pwd: '$CHAT_USERPASSWORD',roles: [{ role: 'readWrite', db: '$CHAT_DATABASE' }]});" \
--eval "db.createCollection('test');" \
--eval "use $USER_DATABASE;" \
--eval "db.createUser({user: '$USER_USERNAME',pwd: '$USER_USERPASSWORD',roles: [{ role: 'readWrite', db: '$USER_DATABASE' }]});" \
--eval "db.createCollection('test');"