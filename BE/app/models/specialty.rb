class Specialty < ApplicationRecord
  belongs_to :therapist
  belongs_to :service
end
