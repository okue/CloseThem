#! /bin/bash

DIR=chrome-ext-close-them

mkdir -p ./$DIR
echo "mkdir directory $DIR"

rm -rf $DIR/*
echo "clean directory $DIR"

cp json/manifest.json $DIR/manifest.json
cp -r js $DIR/
cp -r img $DIR/
echo "" >> $DIR/js/setting.js
echo "setting={word:'$1'}" >> $DIR/js/setting.js
echo "copy main files to $DIR"
