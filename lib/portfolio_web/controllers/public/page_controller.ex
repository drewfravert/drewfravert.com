defmodule PortfolioWeb.Public.PageController do
  use PortfolioWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def info(conn, _params) do
    render(conn, "info.html")
  end

  def resources(conn, _params) do
    render(conn, "resources.html")
  end

  def resume(conn, _params) do
    render(conn, "resume.html")
  end

  def work(conn, _params) do
    render(conn, "work.html")
  end

  def writing(conn, _params) do
    render(conn, "writing.html")
  end

  def uses(conn, _params) do
    render(conn, "uses.html")
  end
end
