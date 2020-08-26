class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.string :reserve_date, null: false
      t.string :reserve_time, null: false
      t.string :special_notice
      t.timestamps
    end
  end
end
