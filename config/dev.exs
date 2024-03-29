use Mix.Config

# endpoint configuration
config :portfolio, PortfolioWeb.Endpoint,
  http: [port: 4000],
  https: [
    port: 4001,
    cipher_suite: :strong,
    certfile: "priv/cert/selfsigned.pem",
    keyfile: "priv/cert/selfsigned_key.pem"
  ],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [
    node: [
      "node_modules/webpack/bin/webpack.js",
      "--config",
      "webpack.development.js",
      "--watch",
      "--color",
      cd: Path.expand("../assets", __DIR__)
    ]
  ],
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/portfolio_web/(live|views)/.*(ex)$",
      ~r"lib/portfolio_web/templates/.*(eex)$"
    ]
  ]

# exclude metadata and timestamps from logs
config :logger, :console, format: "[$level] $message\n"

# set a higher stacktrace during development
config :phoenix, :stacktrace_depth, 20

# initialize plugs at runtime to speed compilation
config :phoenix, :plug_init_mode, :runtime
