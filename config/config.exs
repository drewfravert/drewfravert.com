# ========================================================================================
# Configuration
# ========================================================================================

use Mix.Config

# ========================================================================================
# Endpoint
# ========================================================================================

config :portfolio, PortfolioWeb.Endpoint,
  url: [host: "drewfravert.local"],
  secret_key_base: "1I1+biC2Nf5icvOZEm+vhYaB86/j6pnrArzwJB0/Ca9ky+k6lGOi4EBBO1KpBuPX",
  render_errors: [view: PortfolioWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Portfolio.PubSub,
  live_view: [signing_salt: "wdqpuEkb"]

# ========================================================================================
# Logging
# ========================================================================================

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# ========================================================================================
# Elixir
# ========================================================================================

# set default time zone database
config :elixir, :time_zone_database, Tzdata.TimeZoneDatabase

# ========================================================================================
# Phoenix
# ========================================================================================

# set default JSON parser
config :phoenix, :json_library, Jason

# ========================================================================================
# Environment
# ========================================================================================

import_config "#{Mix.env()}.exs"
