defmodule PortfolioWeb.Public.TargetController do
  use PortfolioWeb, :controller

  def remote(conn, _params) do
    redirect(conn, to: "/")
  end
end
