defmodule PortfolioWeb.Public.PageController do
  use PortfolioWeb, :controller

  def privacy(conn, _params) do
    render(conn, "privacy.html")
  end

  def resume(conn, _params) do
    render(conn, "resume.html")
  end

  def uses(conn, _params) do
    render(conn, "uses.html")
  end
end
