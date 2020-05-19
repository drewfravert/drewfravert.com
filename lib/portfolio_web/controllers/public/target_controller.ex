defmodule PortfolioWeb.Public.TargetController do
  use PortfolioWeb, :controller

  def airship(conn, _params) do
    time_zone = "America/Chicago"

    render(conn, "airship.html", time_zone: time_zone)
  end

  def remote(conn, _params) do
    time_zone = "Europe/Lisbon"

    render(conn, "remote.html", time_zone: time_zone)
  end
end
