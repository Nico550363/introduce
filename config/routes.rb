Rails.application.routes.draw do
  root to: 'products#index'
  get "product" => "products#index"
end
