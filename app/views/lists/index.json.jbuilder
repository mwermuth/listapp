json.array!(@lists) do |list|
  json.extract! list, :id, :name, :pods_id, :description, :user, :type
  json.url list_url(list, format: :json)
end
