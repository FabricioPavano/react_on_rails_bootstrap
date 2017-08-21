# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

User.create( email: 'test@user.com', password: 123123 )
User.create( email: 'test@user1.com', password: 123123 )
User.create( email: 'test@user2.com', password: 123123 )
User.create( email: 'test@user3.com', password: 123123 )

Admin.delete_all

Admin.create( email: 'test@admin.com', password: 123123)
Admin.create( email: 'test@admin1.com', password: 123123)
Admin.create( email: 'test@admin2.com', password: 123123)
Admin.create( email: 'test@admin3.com', password: 123123)
