# frozen_string_literal: true

class DashboardController < ApplicationController
  layout "main"
  before_action :authenticate_user!

  def index
    @hello_world_props = { name: "Stranger" }
  end
end

