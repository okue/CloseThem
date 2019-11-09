#! /bin/bash

DIR=chrome-ext-close-them

mkdir -p ./$DIR
echo "mkdir directory $DIR"

rm -rf $DIR/*
echo "clean directory $DIR"

cp json/manifest.json $DIR/manifest.json
cp -r js $DIR/
cp -r img $DIR/
cp -r html $DIR/
echo "copy main files to $DIR"
