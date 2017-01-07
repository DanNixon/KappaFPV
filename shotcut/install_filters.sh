#!/bin/bash

SHOTCUT_PATH="$1"
FILTER_PATH=share/shotcut/qml/filters
FILTERS_SRC_DIR=filters

for filter in `ls ./$FILTERS_SRC_DIR`
do
  filter_src_path="`pwd`/$FILTERS_SRC_DIR/$filter"
  filter_dest_path="$SHOTCUT_PATH/$FILTER_PATH/$filter"
  
  mkdir -p "$filter_dest_path"
  cp "$filter_src_path/"* "$filter_dest_path"
  cp ./filters_common/* "$filter_dest_path"
  cp ../logo_simple.png "$filter_dest_path"
done