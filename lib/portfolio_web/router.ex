defmodule PortfolioWeb.Router do
  use PortfolioWeb, :router

  import Phoenix.LiveDashboard.Router
  import Plug.BasicAuth

  # ========================================================================================
  # Pipelines
  # ========================================================================================

  # pipeline :api do
  #   plug :accepts, ["json"]
  # end

  pipeline :bot do
    plug :accepts, ["xml", "txt"]
  end

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {PortfolioWeb.Global.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :public do
    plug :put_layout, {PortfolioWeb.Public.LayoutView, "app.html"}
  end

  pipeline :simple_auth do
    plug :basic_auth, username: "admin", password: "admin"
  end

  # ========================================================================================
  # Public Routes
  # ========================================================================================

  scope "/", PortfolioWeb.Public, as: :public do
    pipe_through [:browser, :public]

    # public page routes
    get "/", PageController, :index
    get "/work", PageController, :work
    get "/info", PageController, :info
    get "/resources", PageController, :resources
    get "/resume", PageController, :resume
    get "/uses", PageController, :uses
    get "/writing", PageController, :writing
  end

  # ========================================================================================
  # Targeted Routes
  # ========================================================================================

  scope "/hello", PortfolioWeb.Public, as: :target do
    pipe_through [:browser, :public]

    get "/blox", TargetController, :blox
    get "/remote", TargetController, :remote
    get "/shipt", TargetController, :shipt
  end

  # ========================================================================================
  # Dashboard Routes
  # ========================================================================================

  scope "/dashboard", PortfolioWeb.Public, as: :dashboard do
    pipe_through [:browser, :public, :simple_auth]

    live_dashboard "/", metrics: PortfolioWeb.Telemetry
  end

  # ========================================================================================
  # API Routes
  # ========================================================================================

  # scope "/api", PortfolioWeb.API, as: :api do
  #   pipe_through :api
  # end

  # ========================================================================================
  # Bot Routes
  # ========================================================================================

  scope "/", PortfolioWeb.Bot, as: :bot do
    pipe_through :bot

    get "/robots.txt", PageController, :robots
    get "/sitemap.xml", PageController, :sitemap
  end
end
