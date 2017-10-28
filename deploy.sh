#!/usr/bin/env bash

DIR="/home/pi/tests/node-api"
USER=pi
IP=192.168.15.10

SSH="$USER@$IP"

ssh $SSH "sudo rm -rf $DIR/*"
scp -r . "$SSH:$DIR"
