SELECT
    o.Id AS OrderId, 
    p.Title AS ProductName, 
    oi.Quantity, 
    oi.UnitPrice, 
    
    oi.Quantity * oi.UnitPrice AS TotalBeforeVAT, 
    
    (oi.Quantity * oi.UnitPrice) * 0.15 AS VATAmount,
    (oi.Quantity * oi.UnitPrice) * 1.15 AS ExpectedTotaI,
    
    o.Total AS ActualOrderTotaI,

    CASE 
        WHEN o. Total = (oi.Quantity * oi.UnitPrice) * 1.15
        THEN 'PASS'
        ELSE 'FAIL'
    END AS TestResu1t

FROM Orders o
JOIN OrderItems oi
    ON o.Id = oi.OrderId
JOIN Products p
    ON oi.Productid = p.Id
WHERE o.Id = 'LWS-66625'