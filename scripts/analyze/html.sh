#!/usr/bin/env sh

if [ ! -d analysis ]; then
  mkdir analysis
fi

re='.*/(.*)\.[0-9a-z]{8}\.((chunk\.)?js)';

if [[ $1 =~ $re ]]; then
  dist=analysis/${BASH_REMATCH[1]}.${BASH_REMATCH[2]}.html;
  source-map-explorer --html $1 > $dist;
  echo Dump into $dist;
fi
