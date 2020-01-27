class User < ApplicationRecord
  has_many :messages, dependent: :destroy
  validates :username,
    presence: true,
    length: { minumum: 3, maximum: 25 },
    uniqueness: { case_sensitive: false }
  has_secure_password
end
