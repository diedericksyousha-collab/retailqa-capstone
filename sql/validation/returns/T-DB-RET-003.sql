USE [LewisStoresDb];
GO


-- Verify refund transaction is stored successfully

SELECT
    rr.OrderId,
    rr.UserId,
    rr.Status AS ReturnStatus,
    rr.RequestedAmount,
    rr.ApprovedAmount,
    rr.ResolutionNotes,
    p.Id AS ProductId,
    p.Title AS ProductName,
    p.Price,
    p.StockQuantity
FROM ReturnRequests rr
INNER JOIN Products p
    ON rr.ApprovedAmount = p.Price
WHERE rr.OrderId = N'ORD-003-20260510'
AND rr.UserId = N'user-003'
AND rr.Status = N'Approved'
AND rr.RequestedAmount = 22999.00
AND rr.ApprovedAmount = 22999.00
AND rr.ResolutionNotes = N'Full refund issued to original payment method'
AND p.Id = N'cloudrest-mattress'
AND p.Title = N'CloudRest Memory Foam Mattress';