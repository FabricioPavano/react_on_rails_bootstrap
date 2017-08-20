class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
  	@hello_world_props = { name: "Stranger" }
  end
end
