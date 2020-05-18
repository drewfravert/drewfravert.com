defmodule PortfolioWeb.Public.TargetController do
  use PortfolioWeb, :controller

  def airship(conn, _params) do
    render(conn, "airship.html")
  end

  def show(conn, %{"target" => target}) do
    name =
      target
      |> String.capitalize()

    render(conn, "show.html", target: name)
  end
end
