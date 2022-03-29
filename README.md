# Game_On

This repo includes apis for GameOn projec.
Follow the given guidelines to setup backend for GameOn application.

## prerequisite setup

**install postgress database.

*version dependency
  POSTGRESS VERSION 14 AND ABOVE

**for windows

There are three steps to complete the PostgreSQL installation:
1:Download PostgreSQL installer for Windows
2:Install PostgreSQL
3:Verify the installation

please refer the given link:
https://www.postgresqltutorial.com/install-postgresql/

**for ubuntu 

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql-14

for reference:
https://www.postgresql.org/download/linux/ubuntu/

**install pgAdmin

pgAdmin is an ide for postgress-DB

**for windows

https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.5/windows/

**for ubuntu

sudo apt install pgadmin4


## DB Setup
open pgAdmin and create one database under postgress ownership
1:set preference
  1.1: open file> preference> path > binary-path
  1.2: goto potgress binary-path then we have to select our installed postgress version and 
       paste environment path ex:"C:\Program Files\PostgreSQL\14\bin" in front of that.
  1.3: save

2: download the backup file from below link:
   https://indiumsoft-my.sharepoint.com/:u:/p/vinay_hatyal/EQ1mA0cT4blLl2laGu-8tncBSLmIgavLmTTY86JWY0il-g?e=GNL7bD

3: click on newly created db and restore the db



## Environment Variables
*To run this project, you will need to add the following environment variables to your .env file(create one if not exist)

JWTSECRET=the-super-strong-secrect

*Change DBname and password in config>dev.json file


## Run Locally

Clone the project

```bash
  git clone https://github.com/ganthimathim-indium/Game_On.git
```

Go to the project directory

```bash
  cd Game_On
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


