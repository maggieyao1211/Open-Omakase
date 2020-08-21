class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :website_url, null: true
      t.string :address, null: false
      t.string :zip_code, null: false
      t.string :phone_number, null: true
      t.integer :price_level, null: false
      t.float :average_rating, null: false
      t.integer :city_id, null: false
      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :price_level
    add_index :restaurants, :average_rating
    add_index :restaurants, :city_id
  end
end
