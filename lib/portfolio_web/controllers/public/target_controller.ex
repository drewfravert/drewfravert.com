defmodule PortfolioWeb.Public.TargetController do
  use PortfolioWeb, :controller

  def remote(conn, _params) do
    render(conn, "remote.html")
  end
end
