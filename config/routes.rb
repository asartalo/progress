Rails.application.routes.draw do
  devise_for :users, controllers: {
    # remove this if you want to allow more users
    registrations: "registrations"
  }

  get 'dashboard', to: 'dashboard#index'
  root 'dashboard#index'
end
