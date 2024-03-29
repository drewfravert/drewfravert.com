defmodule PortfolioWeb.Router do
  use PortfolioWeb, :router

  import Plug.BasicAuth

  # ======================================================================================
  # Pipelines
  # ======================================================================================

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :bot do
    plug :accepts, ["xml", "txt", "asc"]
  end

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :put_root_layout, {PortfolioWeb.Global.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :public do
    plug :put_layout, {PortfolioWeb.Public.LayoutView, "app.html"}
  end

  pipeline :simple_auth do
    plug :basic_auth,
      username: System.get_env("BASIC_AUTH_USER"),
      password: System.get_env("BASIC_AUTH_PASSWORD")
  end

  # ======================================================================================
  # Public Routes
  # ======================================================================================

  scope "/", PortfolioWeb.Public, as: :public do
    pipe_through [:browser, :public]

    # public page routes
    get "/", PageController, :resume
    get "/privacy", PageController, :privacy
    get "/uses", PageController, :uses
  end

  # ======================================================================================
  # Targeted Routes
  # ======================================================================================

  scope "/hey", PortfolioWeb.Public, as: :public do
    pipe_through [:browser, :public]
  end

  # ======================================================================================
  # Status Routes
  # ======================================================================================

  scope "/status", PortfolioWeb.Public, as: :public do
    pipe_through :api

    get "/", StatusController, :index
  end

  # ======================================================================================
  # Dashboard Routes
  # ======================================================================================

  if Mix.env() in [:prod] do
    import Phoenix.LiveDashboard.Router

    scope "/dashboard", PortfolioWeb.Public, as: :dashboard do
      pipe_through [:browser, :public, :simple_auth]

      live_dashboard "/", metrics: PortfolioWeb.Telemetry
    end
  end

  # ======================================================================================
  # API Routes
  # ======================================================================================

  # scope "/api", PortfolioWeb.API, as: :api do
  #   pipe_through :api
  # end

  # ======================================================================================
  # Bot Routes
  # ======================================================================================

  scope "/", PortfolioWeb.Bot, as: :bot do
    pipe_through :bot

    get "/.well-known/security.txt", PageController, :security
    get "/pgp-key.asc", PageController, :pgp_key
    get "/robots.txt", PageController, :robots
    get "/sitemap.xml", PageController, :sitemap
  end
end
