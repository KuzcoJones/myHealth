class Therapist < ApplicationRecord
    belongs_to :user
    has_many :specialties
    has_many :services, through: :specialties
end

