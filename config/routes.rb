Rails.application.routes.draw do

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  devise_for :admins, controllers: {
    sessions: 'admins/sessions'
  }

  #Root

  root to: "application#index"


  #Admin

  get 'admins/', to: 'admins#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
