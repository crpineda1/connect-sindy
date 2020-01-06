class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :player_1
      t.string :player_2
      t.string :winner

      t.timestamps
    end
  end
end
