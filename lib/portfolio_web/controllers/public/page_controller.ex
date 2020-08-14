defmodule PortfolioWeb.Public.PageController do
  use PortfolioWeb, :controller

  # def colophon(conn, _params) do
  #   render(conn, "colophon.html")
  # end

  # def index(conn, _params) do
  #   render(conn, "index.html")
  # end

  # def influences(conn, _params) do
  #   render(conn, "influences.html")
  # end

  def privacy(conn, _params) do
    render(conn, "privacy.html")
  end

  # def resources(conn, _params) do
  #   render(conn, "resources.html")
  # end

  def resume(conn, _params) do
    render(conn, "resume.html")
  end

  # def security(conn, _params) do
  #   render(conn, "security.html")
  # end

  def uses(conn, _params) do
    render(conn, "uses.html")
  end

  # def work(conn, _params) do
  #   render(conn, "work.html")
  # end

  # def writing(conn, _params) do
  #   render(conn, "writing.html")
  # end
end
