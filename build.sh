#!/usr/bin/env bash

# ========================================================================================
# Product Build Script
# ========================================================================================

# exit on error
# set -o errexit

# ensure static directory exists or create it
STATIC_DIR="priv/static"
[[ -d "priv/static" ]] || mkdir "$STATIC_DIR"

# production setup
mix deps.get --only prod
MIX_ENV=prod mix compile

# compile assets
yarn --cwd ./assets install
yarn --cwd ./assets run deploy
mix phx.digest

# build the release & overwrite existing release
MIX_ENV=prod mix release --overwrite
# MIX_ENV=prod mix ecto.migrate
