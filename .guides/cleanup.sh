#!/bin/bash
for NAME in "EPDriver" "EPCars"
do
  echo "DROP DATABASE ${NAME};" | mysql
done