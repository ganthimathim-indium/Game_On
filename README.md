# Game_On

This repo includes APIs for GameOn project.

Follow the given guidelines to setup backend for GameOn application.

## prerequisite setup

**install node.**

***for ubuntu***

installing steps to install node using NVM
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
```bash 
source ~/.bashrc
```
```bash
source ~/.bash_profile
```
```bash
nvm list-remote
```
```bash
nvm install v14.10.0
```
```bash
nvm list
```
```bash
nvm use v14.10.0
```
check node version that is installed
```bash
node -v
```
***for Windows***

download file, extract and install nvm
```bash
https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip
```
confirm if nvm is installed 
```bash
$ nvm --version
```
install npm
```bash
$ nvm install latest 
```
```bash
$ nvm use <version number>
```

check versions
```bash
//Check Node.js version
$ node --version

//Check npm version
$ npm --version
```



**install postgress database.**

*version dependency*
  ***POSTGRESS VERSION 14*** AND ABOVE

**windows**

There are three steps to complete the PostgreSQL installation:

1:Download PostgreSQL installer for Windows

2:Install PostgreSQL

3:Verify the installation


please refer the given link:
```bash
https://www.postgresqltutorial.com/install-postgresql/
```


**ubuntu**


```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql-14
```

for reference:
```bash
https://www.postgresql.org/download/linux/ubuntu/
```
## install pgAdmin

pgAdmin is an ide for postgress-DB

**for windows**

```bash
https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.5/windows/
```

**for ubuntu**

```bash
sudo apt install pgadmin4
```

## DB Setup
open pgAdmin and create one database under postgress ownership

1: set preference:

      1.1: open file> preference> path > binary-path.
      
      1.2: goto potgress binary-path then we have to select our installed postgress version and 
           paste environment path ex:"C:\Program Files\PostgreSQL\14\bin" in front of that.
           
      1.3: save.

2: download the backup file from below link:
```bash
   https://indiumsoft-my.sharepoint.com/:u:/p/vinay_hatyal/EQ1mA0cT4blLl2laGu-8tncBSLmIgavLmTTY86JWY0il-g?e=uQsHtD
   ````
3: click on newly created db and restore the db.




## Environment Variables
1: To run this project, you will need to add the following environment variables to your .env file(create one if not exist)

```bash
JWTSECRET=the-super-strong-secrect
```

2: Change DBname and password in ***config> dev.json*** file


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
  node index.js  or npm start
```


## Api Documentation
Swagger UI for Api Documentation

```bash
http://localhost:3000/api-docs/#/
```

