defmodule PortfolioWeb.Router do
  use PortfolioWeb, :router

  # ========================================================================================
  # Pipelines
  # ========================================================================================

  pipeline :api do
    plug :accepts, ["json"]
  end

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

  pipeline :dashboard do
    plug :put_layout, {PortfolioWeb.Dashboard.LayoutView, "app.html"}
  end

  pipeline :public do
    plug :put_layout, {PortfolioWeb.Public.LayoutView, "app.html"}
  end

  # ========================================================================================
  # Public Routes
  # ========================================================================================

  scope "/", PortfolioWeb.Public, as: :public do
    pipe_through [:browser, :public]

    get "/", PageController, :index
    get "/work", PageController, :work
    get "/info", PageController, :info
    get "/resources", PageController, :resources
    get "/resume", PageController, :resume
    get "/uses", PageController, :uses
    get "/writing", PageController, :writing
  end

  # ========================================================================================
  # Dashboard Routes
  # ========================================================================================

  scope "/dashboard", PortfolioWeb.Dashboard, as: :dashboard do
    pipe_through [:browser, :dashboard]

    get "/", PageController, :index
  end

  # If you want to use the LiveDashboard in production, you should put it behind
  # authentication and allow only admins to access it. If your application does not have an
  # admins-only section yet, you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/dashboard" do
      pipe_through :browser
      live_dashboard "/live", metrics: PortfolioWeb.Telemetry
    end
  end

  # ========================================================================================
  # API Routes
  # ========================================================================================

  scope "/api", PortfolioWeb.API, as: :api do
    pipe_through :api
  end

  # ========================================================================================
  # Bot Routes
  # ========================================================================================

  scope "/", PortfolioWeb.Bot, as: :bot do
    pipe_through :bot

    get "/robots.txt", PageController, :robots
    get "/sitemap.xml", PageController, :sitemap
  end
end
