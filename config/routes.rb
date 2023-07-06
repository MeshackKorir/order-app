Rails.application.routes.draw do
  
  resources :foods
  resources :orderitems
  resources :orders
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

post "/signup", to: 'users#create'
get "/me", to:'users#show'
post "/login", to: 'sessions#create'
delete '/logout', to:'sessions#destroy'
patch '/reset', to:'users#reset'
end
