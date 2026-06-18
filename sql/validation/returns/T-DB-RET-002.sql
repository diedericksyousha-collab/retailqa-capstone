USE [LewisStoresDb];
GO

-- Verify returned item has been restored into inventory

SELECT
    Id,
    Title,
    Sku,
    Category,
    Price,
    StockQuantity,
    IsActive
FROM Products
WHERE Id = N'cloudrest-mattress'
AND Title = N'CloudRest Memory Foam Mattress'
AND Price = 22999.00
AND StockQuantity > 0
AND IsActive = 1;