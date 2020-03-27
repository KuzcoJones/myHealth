class CreateTherapists < ActiveRecord::Migration[6.0]
  def change
    create_table :therapists do |t|
      t.string :name
      t.text :bio
      t.string :location
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
