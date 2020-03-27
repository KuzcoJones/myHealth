Rails.application.routes.draw do
  resources :users
  resources :specialty
  resources :service
  resources :therapist
  

  post 'signup', to: 'user#create', as: '/signup'

  post 'login', to: 'sessions#create', as: '/login'
  
  get 'current_user', to: 'sessions#show', as: '/current_user'

  get 'logout', to: 'sessions#destroy', as: '/logout'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
