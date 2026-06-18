USE [LewisStoresDb];
GO


-- Verify audit logs are stored correctly for return/refund processing

SELECT
    al.TimestampUtc,
    al.EventType,
    al.UserId,
    al.Severity,
    al.Details,
    rr.OrderId,
    rr.Status AS ReturnStatus,
    rr.RequestedAmount,
    rr.ApprovedAmount,
    rr.ResolutionNotes
FROM AuditLogs al
INNER JOIN ReturnRequests rr
    ON al.UserId = rr.UserId
WHERE rr.OrderId = N'ORD-003-20260510'
AND rr.UserId = N'user-003'
AND rr.Status = N'Approved'
AND rr.ApprovedAmount = 22999.00
AND al.EventType = N'order.created'
AND al.Details LIKE N'%ORD-003-20260510%'
AND al.Details LIKE N'%22999%';