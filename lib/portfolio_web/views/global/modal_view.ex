defmodule PortfolioWeb.Global.ModalView do
  use PortfolioWeb, :view

  def pgp_key_block() do
    render(PortfolioWeb.Bot.PageView, "pgp-key.asc")
  end
end
