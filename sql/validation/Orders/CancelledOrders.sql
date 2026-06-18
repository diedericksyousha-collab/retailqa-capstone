SELECT o.Id, o.[Date], o.[Status], o.Total, o.UserID, u.Email, u.Role, u.FullName, u.Phone, u.Address
FROM Orders o
JOIN Users u
ON  u.Id = o.UserID
WHERE [Status] = 'cancelled'