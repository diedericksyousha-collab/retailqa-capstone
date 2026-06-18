USE [LewisStoresDb];
GO


SELECT
    OrderId,
    UserId,
    Status,
    Carrier,
    TrackingNumber,
    Origin,
    Destination,
    CurrentLocation,
    ShippedAtUtc,
    EstimatedDeliveryAtUtc,
    DeliveredAtUtc,
    UpdatedAtUtc
FROM Deliveries
WHERE OrderId = N'ORD-003-20260510';