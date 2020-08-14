use Mix.Config

# configure endpoint
config :portfolio, PortfolioWeb.Endpoint,
  http: [port: 4002],
  server: false

# print only warnings and errors during test
config :logger, level: :warn
