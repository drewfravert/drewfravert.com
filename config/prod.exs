use Mix.Config

# endpoint configuration
# SSL certificates handled by render.com
config :portfolio, PortfolioWeb.Endpoint,
  url: [host: "drewfravert.com", port: 443],
  force_ssl: true,
  cache_static_manifest: "priv/static/cache_manifest.json"

# do not print debug messages in production
config :logger, level: :info
