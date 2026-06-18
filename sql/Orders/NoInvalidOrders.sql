SELECT *
FROM Orders
WHERE Total < 0

SELECT o.Id, o.Total, SUM(UnitPrice * i.Quantity * 1.15) AS ExpectedTotal
FROM Orders o 
JOIN OrderItems i
ON i.OrderId = o.Id
JOIN Products p
ON p.Id = i.ProductId
GROUP BY o.Id, o.Total
HAVING o.Total <> SUM(UnitPrice * i.Quantity * 1.15)

SELECT *
FROM Orders o
JOIN OrderItems i
ON i.OrderID = o.Id
JOIN Products p
ON p.ID = i.ProductId
WHERE i.Quantity > p.StockQuantity