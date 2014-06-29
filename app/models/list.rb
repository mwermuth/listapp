class List < ActiveRecord::Base
  serialize :pods
  belongs_to :user

end
