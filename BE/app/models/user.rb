class User < ApplicationRecord
    has_many :therapists
    has_many :services, through: :therapists
    has_secure_password 
    validates_presence_of :username
    validates_uniqueness_of :username
end
