Rails.application.routes.draw do
  root to: 'products#index'
  get "products" => "products#index"
  get "products/skill" => "products#skill"
  get "products/about" => "products#about"
  get "products/works" => "products#works"
  get "products/contact" => "products#contact"
  get "products/test" => "products#test"
end
