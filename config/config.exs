use Mix.Config

# base application configuration
config :portfolio,
  ecto_repos: [Portfolio.Repo]

# base endpoint configuration
config :portfolio, PortfolioWeb.Endpoint,
  url: [host: "drewfravert.local"],
  secret_key_base: "1I1+biC2Nf5icvOZEm+vhYaB86/j6pnrArzwJB0/Ca9ky+k6lGOi4EBBO1KpBuPX",
  render_errors: [view: PortfolioWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Portfolio.PubSub,
  live_view: [signing_salt: "wdqpuEkb"]

# base logger configuration
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# base JSON parsing configuration
config :phoenix, :json_library, Jason

# environment specific configuration
import_config "#{Mix.env()}.exs"
