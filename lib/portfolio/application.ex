defmodule Portfolio.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      Portfolio.Repo,
      PortfolioWeb.Telemetry,
      {Phoenix.PubSub, name: Portfolio.PubSub},
      PortfolioWeb.Endpoint
      # Start a worker by calling: Portfolio.Worker.start_link(arg)
      # {Portfolio.Worker, arg}
    ]

    opts = [strategy: :one_for_one, name: Portfolio.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    PortfolioWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
