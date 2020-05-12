defmodule PortfolioWeb.Bot.PageController do
  use PortfolioWeb, :controller

  def robots(conn, _params) do
    render(conn, "robots.txt")
  end

  def sitemap(conn, _params) do
    render(conn, "sitemap.xml")
  end
end
