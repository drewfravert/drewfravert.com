use Mix.Config

# configure database
config :portfolio, Portfolio.Repo,
  username: "postgres",
  password: "postgres",
  database: "portfolio_test#{System.get_env("MIX_TEST_PARTITION")}",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# configure endpoint
config :portfolio, PortfolioWeb.Endpoint,
  http: [port: 4002],
  server: false

# print only warnings and errors during test
config :logger, level: :warn
