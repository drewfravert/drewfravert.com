#!/usr/bin/env bash

# ========================================================================================
# Product Build Script
# ========================================================================================

# get production dependencies
mix deps.get --only prod

# compile production files
MIX_ENV=prod mix compile

# install production packages
yarn ./assets

# build production packages
yarn run --production ./assets

# digest & compress static files
mix phx.digest

# remove generated build directory
rm -rf "_build"

# perform production release
MIX_ENV=prod mix release
