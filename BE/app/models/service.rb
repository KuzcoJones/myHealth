class Service < ApplicationRecord
    has_many :specialties
    has_many :therapists, through: :specialties
end
