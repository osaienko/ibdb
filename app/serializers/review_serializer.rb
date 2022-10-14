class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :reviewer, :description, :score, :color, :aroma, :flavor, :body, :airline_id
end