Rails.application.routes.draw do
  root to: 'products#index'
  get "products" => "products#index"
  get "products/about" => "products#about"
end
