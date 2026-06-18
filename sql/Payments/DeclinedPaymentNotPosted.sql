SELECT *
FROM Orders o
JOIN OrderItems i
ON i.OrderId = o.Id
WHERE o.Id = 'LWS-84627'