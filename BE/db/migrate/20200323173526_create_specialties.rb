class CreateSpecialties < ActiveRecord::Migration[6.0]
  def change
    create_table :specialties do |t|
      t.string :title
      t.references :therapist, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.string :info

      t.timestamps
    end
  end
end
