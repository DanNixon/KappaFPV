#!/bin/bash

VIDEO_PROJECT_DIR=videos

echo -n "Date: "
read date

date_stamp=`date "+%Y-%m-%d" -d "$date"`
echo $date_stamp

echo -n "Title: "
read title

filename_base="$date_stamp"_"$title"
echo $filename_base

cp description_template.txt $VIDEO_PROJECT_DIR/$filename_base.txt
touch $VIDEO_PROJECT_DIR/$filename_base.mlt
