class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_admin!

  def index
  	@hello_world_props = { name: 'Visitor' }
  end
end
