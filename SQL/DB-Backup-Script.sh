#!/bin/bash

# Database credentials
user="root"
password="jthklo123"
host="localhost"
db_name="websitedb"

# Other options
backup_path="/tmp/Video_BackUp"
date=$(date +"%d-%b-%Y")

# Set default file permissions
umask 177

# Dump database into SQL file
mysqldump --user=$user --password=$password --host=$host $db_name > $backup_path/$db_name-$date.sql
