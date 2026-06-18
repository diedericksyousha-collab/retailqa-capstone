SELECT *
FROM Orders o
JOIN OrderItems i
ON i.OrderId = o.Id
WHERE o.Id = 'ORD-002-20260511'