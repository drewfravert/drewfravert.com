defmodule PortfolioWeb.Public.StatusController do
  use PortfolioWeb, :controller

  def index(conn, _params) do
    json(conn, :ok)
  end
end
