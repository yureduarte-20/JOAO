echo "$PROBLEM_DATABASE $CHAT_DATABASE"
sleep 1;
echo  "use $PROBLEM_DATABASE\n db.createUser({user: '$PROBLEM_USERNAME',pwd: '$PROBLEM_USERPASSWORD',roles: [{  role: 'readWrite',  db: '$PROBLEM_DATABASE'}]})\n db.createCollection(\"test\")\n"  | mongosh --username $MONGO_INITDB_ROOT_USERNAME --authenticationMechanism "SCRAM-SHA-1" --password $MONGO_INITDB_ROOT_PASSWORD --host $MONGO_HOST
echo  "use $CHAT_DATABASE\n db.createUser({user: '$CHAT_USERNAME',pwd: '$CHAT_USERPASSWORD',roles: [{  role: 'readWrite',  db: '$CHAT_DATABASE'}]})\n db.createCollection(\"test\")\n" | mongosh --username $MONGO_INITDB_ROOT_USERNAME --authenticationMechanism "SCRAM-SHA-1" --password $MONGO_INITDB_ROOT_PASSWORD --host $MONGO_HOST
echo  "use $USER_DATABASE\n db.createUser({user: '$USER_USERNAME',pwd: '$USER_USERPASSWORD',roles: [{  role: 'readWrite',  db: '$USER_DATABASE'}]})\n db.createCollection(\"test\")\n" | mongosh --username $MONGO_INITDB_ROOT_USERNAME --authenticationMechanism "SCRAM-SHA-1" --password $MONGO_INITDB_ROOT_PASSWORD --host $MONGO_HOST
#echo "criado"
#exit;