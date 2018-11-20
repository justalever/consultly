class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :reply
      t.belongs_to :meeting, foreign_key: true

      t.timestamps
    end
  end
end
