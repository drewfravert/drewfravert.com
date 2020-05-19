defmodule PortfolioWeb.Bot.PageController do
  use PortfolioWeb, :controller

  def keybase(conn, _params) do
    render(conn, "keybase.txt")
  end

  def pgp_key(conn, _params) do
    render(conn, "pgp-key.txt")
  end

  def robots(conn, _params) do
    render(conn, "robots.txt")
  end

  def security(conn, _params) do
    render(conn, "security.txt")
  end

  def sitemap(conn, _params) do
    render(conn, "sitemap.xml")
  end
end
