Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :sessions, only: [:create, :destroy]
    resources :cities, only: [:show]
    resources :restaurants, only: [:index, :show]
    resources :reviews, only: [:create, :update, :destroy]
    resources :reservations, only: [:create, :update, :destroy]
  end
end
