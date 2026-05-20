SELECT 
    o.Id as [OrderId],
    o.UserId,
    u.Email
FROM Orders o
LEFT JOIN Users u ON o.UserId = u.Id
WHERE o.UserId IS NOT NULL 
  AND u.Id IS NULL
ORDER BY o.Id;
GO

SELECT 
    pm.Id as [PaymentMethodId],
    pm.UserId,
    u.Email
FROM PaymentMethods pm
LEFT JOIN Users u ON pm.UserId = u.Id
WHERE pm.UserId IS NOT NULL
  AND u.Id IS NULL
ORDER BY pm.Id;
GO

-- T-DB-INT-020: Data Freshness Check
SELECT 
    'Categories' as [TableName], 
    MAX(CAST(NULL AS DATETIME2)) as [LastUpdate]
FROM Categories

UNION ALL

SELECT 
    'Products', 
    MAX(CAST(NULL AS DATETIME2))
FROM Products

UNION ALL

SELECT 
    'Orders', 
    MAX(UpdatedAtUtc)
FROM Orders

UNION ALL

SELECT 
    'Users', 
    MAX(CAST(NULL AS DATETIME2))
FROM Users

UNION ALL

SELECT 
    'AuditLogs', 
    MAX(TimestampUtc)
FROM AuditLogs

ORDER BY [TableName];
GO