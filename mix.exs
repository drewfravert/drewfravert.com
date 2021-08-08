defmodule Portfolio.MixProject do
  @moduledoc false

  use Mix.Project

  def project do
    [
      app: :portfolio,
      version: "0.2.0",
      elixir: "~> 1.12.2",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Portfolio.Application, []},
      extra_applications: [:logger, :runtime_tools, :os_mon]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:credo, "~> 1.5.6", only: [:dev, :test], runtime: false},
      {:floki, ">= 0.31.0", only: :test},
      {:gettext, "~> 0.18.2"},
      {:jason, "~> 1.2"},
      {:phoenix, "~> 1.5.10"},
      {:phoenix_html, "~> 2.14.3"},
      {:phoenix_live_view, "~> 0.15.7"},
      {:phoenix_live_reload, "~> 1.3.3"},
      {:phoenix_live_dashboard, "~> 0.4.0"},
      {:plug_cowboy, "~> 2.5.1"},
      {:sobelow, "~> 0.11.1", only: :dev},
      {:telemetry_metrics, "~> 0.6.1"},
      {:telemetry_poller, "~> 0.5.1"},
      {:tzdata, "~> 1.1.0"}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "yarn --cwd ./assets install", "phx.gen.cert"]
    ]
  end
end
