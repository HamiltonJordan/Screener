#!/bin/bash
echo "Creating backup...."
 SRCDIR="TestBackUp" #Enter directory you want to backup
 DESTDIR="" #Enter where you want the backup to go to
 DATE=`date +%Y-%m-%d`
 FILENAME="Screener_BackUp_$DATE".tgz
 tar --create --gzip --file=$DESTDIR$FILENAME $SRCDIR
echo "Back up finished!  File = $FILENAME"
