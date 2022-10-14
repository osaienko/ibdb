class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :reviewer, :description, :score, :color, :aroma, :flavor, :body, :beer_id
end