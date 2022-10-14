class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :reviewer
      t.string :description
      t.integer :score
      t.integer :color
      t.integer :aroma
      t.integer :flavor
      t.integer :body
      t.belongs_to :beer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
