Rails.application.routes.draw do
  root to: 'products#index'
  get "products" => "products#index"
  get "products/new" => "products#new"
end
