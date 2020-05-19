defmodule PortfolioWeb.TemplateHelpers do
  @moduledoc """
  """

  # ======================================================================================
  # Attributes
  # ======================================================================================

  @tz_utc "Etc/UTC"

  # ======================================================================================
  # Public Methods
  # ======================================================================================

  def day_of_week(tz_database_name \\ @tz_utc) do
    {:ok, date_time} = DateTime.now(tz_database_name)

    case date_time |> Date.day_of_week() do
      1 -> "Monday"
      2 -> "Tuesday"
      3 -> "Wednesday"
      4 -> "Thursday"
      5 -> "Friday"
      6 -> "Saturday"
      7 -> "Sunday"
      _ -> "day"
    end
  end

  def time_of_day(tz_database_name \\ @tz_utc) do
    {:ok, date_time} = DateTime.now(tz_database_name)
    hour = date_time.hour

    cond do
      hour >= 0 && hour < 6 -> "night"
      hour >= 6 && hour < 12 -> "morning"
      hour >= 12 && hour < 18 -> "afternoon"
      hour >= 18 && hour < 24 -> "evening"
      true -> ""
    end
  end

  # ======================================================================================
  # Private Methods
  # ======================================================================================
end
