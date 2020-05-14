#!/usr/bin/env bash

# ========================================================================================
# Product Build Script
# ========================================================================================

# production setup
mix deps.get --only prod
MIX_ENV=prod mix compile

# compile assets
yarn --cwd ./assets install
yarn --cwd ./assets run deploy
mix phx.digest

# remove existing release directory
rm -rf "_build"

# perform release & migrate the database
MIX_ENV=prod mix release
# MIX_ENV=prod mix ecto.migrate
