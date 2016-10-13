# split-eat
Webapp for dividing expenses

## Dev Setup

* Git clone the repository
* Open command prompt
* Go to mongoDB bin folder
* Run the following command
`mongod.exe --dbpath "<your_local_db_folder_path>"`
you can now see a "waiting for connection" message in the console.
* Open another command prompt and navigate to mongodb bin directory
* Run the following command
`mongo < <your_project_directory>/db.dump`
this command will create `spliteatdb` database in your local
* then run
`mongo`. It will now point you to default database `test`. execute `show dbs`
and you should be able to see ``spliteat` as one of the db.
 * go to project root folder and run `npm install`