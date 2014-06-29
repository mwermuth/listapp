class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :name
      t.text :pods
      t.text :description
      t.references :user
      t.boolean :type

      t.timestamps
    end
  end
end
