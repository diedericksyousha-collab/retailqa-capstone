USE [LewisStoresDb];
GO


-- Verify return request record exists and is valid

SELECT
    OrderId,
    UserId,
    Reason,
    Status,
    RequestedAmount,
    ApprovedAmount,
    ResolutionNotes,
    RequestedAtUtc,
    UpdatedAtUtc
FROM ReturnRequests
WHERE OrderId = N'ORD-003-20260510'
AND UserId = N'user-003'
AND Reason = N'Item defective'
AND Status = N'Approved'
AND RequestedAmount = 22999.00
AND ApprovedAmount = 22999.00
AND ResolutionNotes = N'Full refund issued to original payment method';