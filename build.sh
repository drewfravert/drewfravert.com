#!/usr/bin/env bash

# ========================================================================================
# Product Build Script
# ========================================================================================

# exit on error
set -o errexit

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
